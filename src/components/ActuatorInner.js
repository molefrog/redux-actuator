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

    // This needs better clarification!
    if (options.onMount && deltaError) {
      const now = currentTimestamp()
      const delta = Math.abs(now - event.timestamp)

      if (delta > deltaError) {
        return
      }
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
