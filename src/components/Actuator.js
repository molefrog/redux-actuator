import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import ActuatorInner from './ActuatorInner'

const Actuator = ({ event, onTrigger, ...props }) => (
  <ActuatorInner event={event} handler={onTrigger} {...props} />
)

const mapStateToProps = (state, ownProps) => {
  const channels = state.actuator || {}
  const event = channels[ownProps.channel]

  return { event }
}

const WrappedActuator = connect(mapStateToProps)(Actuator)

WrappedActuator.propTypes = {
  channel: PropTypes.string.isRequired,
  onTrigger: PropTypes.func
}

export default WrappedActuator
