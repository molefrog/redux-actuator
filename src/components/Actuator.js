import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import ActuatorInner from './ActuatorInner'

const Actuator = ({ event, events, ...props }) => (
  <ActuatorInner event={event} handlers={events} {...props} />
)

const mapStateToProps = (state, ownProps) => {
  const channels = state.actuator || {}
  const event = channels[ownProps.channel]

  return { event }
}

const WrappedActuator = connect(mapStateToProps)(Actuator)

WrappedActuator.propTypes = {
  channel: PropTypes.string,
  events: PropTypes.object.isRequired
}

WrappedActuator.defaultProps = {
  channel: 'default'
}

export default WrappedActuator
