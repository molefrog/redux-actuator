import { currentTimestamp } from './utils/currentTimestamp'

// Actions
export const ACTUATE = 'redux-actuator/ACTUATE'

export const actuate = (channel, ...args) => {
  const timestamp = currentTimestamp()

  // channel has to be specified
  if (!channel) {
    const warning =
      'Triggering actions without a channel is no longer ' +
      'supported by `redux-actuator`. These actions will be ' +
      'ingored by the actuator.'

    console.warn(warning)
  }

  return {
    type: ACTUATE,
    payload: {
      channel,
      timestamp,
      args
    }
  }
}
