import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { currentTimestamp } from '../utils/currentTimestamp'

export class Actuator extends React.Component {
  constructor(props, context) {
    super(props, context)

    // Used to store last visible keys on per-channel basis
    // format channel -> last key
    this._keyCache = {}
  }

  getObservedChannels() {
    return [this.props.channel]
  }

  onStateChanged(state = null, ...restOpts) {
    state = state || this.context.store.getState()
    if (!state.actuator) return null

    const channels = this.getObservedChannels()

    for (let i = 0, chan = channels[i]; i < channels.length; ++i) {
      const event = state.actuator[chan]

      if (!event) continue
      this.checkEvent(chan, event, ...restOpts)
    }
  }

  checkEvent(channel, event, options = {}) {
    // Compare event keys (they have to be unique)
    const _prevKey = this._keyCache[channel]
    if (_prevKey && _prevKey === event.key) {
      return
    }

    this._keyCache[channel] = event.key

    // Special case when the event was dispatched before
    // the mount. If you need to handle cases like
    // this one, pass `deltaError` prop, which literally means:
    // "handle missed events on mount if it's younger than `deltaError`"
    let shouldHandleOnMount = false
    const { deltaError } = this.props

    if (options.onMount && deltaError) {
      const now = currentTimestamp()
      const delta = Math.abs(now - event.timestamp)

      shouldHandleOnMount = delta <= deltaError
    }

    if (options.onMount && !shouldHandleOnMount) {
      return
    }

    this.props.on(...event.args)
  }

  componentDidMount() {
    const store = this.context.store

    if (store) {
      this._sub = store.subscribe(() => this.onStateChanged())

      // trigger on mount check
      const state = store.getState()
      this.onStateChanged(state, { onMount: true })
    }
  }

  componentWillUnmount() {
    this._sub && this._sub()
  }

  render() {
    if (!this.props.children) return null
    return this.props.children
  }
}

Actuator.propTypes = {
  channel: PropTypes.string.isRequired,
  on: PropTypes.func.isRequired,
  deltaError: PropTypes.number
}

Actuator.contextTypes = {
  store: PropTypes.object
}

export default Actuator
