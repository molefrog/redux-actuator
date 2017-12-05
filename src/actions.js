import { currentTimestamp } from './utils/currentTimestamp'

// Actions
export const ACTUATE = 'redux-actuator/ACTUATE'

let clock = 0

const genKey = (ts, clock) => `${ts}::${clock}`

export const actuate = (channel, ...args) => {
  // channel has to be specified
  if (!channel) {
    const warning =
      'Triggering actions without a channel is no longer ' +
      'supported by `redux-actuator`. These actions will be ' +
      'ingored by the actuator.'

    console.warn(warning)
  }

  const timestamp = currentTimestamp()
  clock += 1

  return {
    type: ACTUATE,
    payload: {
      key: genKey(timestamp, clock),
      channel,
      timestamp,
      args
    }
  }
}
