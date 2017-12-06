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

  getChanHandlers() {
    const { on, channel } = this.props

    if (typeof on === 'function') {
      return { [channel]: on }
    }

    return on
  }

  getObservedChannels() {
    return Object.keys(this.getChanHandlers())
  }

  onStateChanged(state = null, ...restOpts) {
    state = state || this.context.store.getState()
    if (!state.actuator) return null

    const channels = this.getObservedChannels()

    for (let i = 0; i < channels.length; ++i) {
      const chan = channels[i]
      const event = state.actuator[chan]

      if (!event) continue
      this.checkEvent(chan, event, ...restOpts)
    }
  }

  callChanHandler(channel, args) {
    const handlers = this.getChanHandlers()
    handlers[channel] && handlers[channel](...args)
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

    this.callChanHandler(channel, event.args)
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
  channel: PropTypes.string,

  on: PropTypes.oneOfType([
    // Can be simple event handler of a map of handlers
    // e.g. { chanOne: ..., chanTwo: ... }
    PropTypes.func,
    PropTypes.objectOf(PropTypes.func)
  ]).isRequired,

  deltaError: PropTypes.number,

  // Always require `channel` prop, unless the map
  // of listeners wasn't passed with `on` prop.
  _requireChannel: props => {
    const isMapOfHandlers = props.on !== null && typeof props.on === 'object'

    if (!props.channel && !isMapOfHandlers) {
      return new Error('channel is required')
    }
  }
}

Actuator.contextTypes = {
  store: PropTypes.object
}

export default Actuator
