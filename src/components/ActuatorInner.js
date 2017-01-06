import React from 'react'

import currentTimestamp from '../utils/currentTimestamp'

// ActuatorInner is an auxiliary component used internally
// by Actuator component.
// It has no connection to the store, it only responds to an event
// change passed as a prop.

export class ActuatorInner extends React.Component {
  checkEvents (prevProps, options = {}) {
    // current and previous event payloads
    const prevEvent = prevProps.event || {}
    const event = this.props.event || {}

    if ((event.type && prevEvent.type === event.type) &&
      (event.timestamp && prevEvent.timestamp === event.timestamp)) {
      return
    }

    const { deltaError } = this.props

    // Special case when the event was dispatched before
    // the mount. If you need to handle cases like
    // this one, pass `deltaError` prop, which literally means:
    // "handle missed events on mount if it's younger than `deltaError`"
    let shouldHandleOnMount = false

    if (options.onMount && deltaError) {
      const now = currentTimestamp()
      const delta = Math.abs(now - event.timestamp)

      shouldHandleOnMount = delta <= deltaError
    }

    if (options.onMount && !shouldHandleOnMount) {
      return
    }

    const eventHandlers = this.props.handlers || {}
    if (eventHandlers[event.type]) {
      eventHandlers[event.type](...event.args)
    }
  }

  componentDidUpdate (prevProps) {
    this.checkEvents(prevProps)
  }

  componentDidMount () {
    this.checkEvents({}, { onMount: true })
  }

  render () {
    if (!this.props.children) return null
    return this.props.children
  }
}

ActuatorInner.propTypes = {
  handlers: React.PropTypes.object.isRequired,
  deltaError: React.PropTypes.number,
  event: React.PropTypes.object
}

export default ActuatorInner
