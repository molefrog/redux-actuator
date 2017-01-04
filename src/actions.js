
const currentTimestamp = () => (new Date()).getTime()

// Actions
export const ACTUATE = 'redux-actuator/ACTUATE'

// Action creators
export const actuate = (channel, eventType, ...args) => {
  const timestamp = currentTimestamp()

  return {
    type: ACTUATE,
    payload: {
      channel,
      event: {
        type: eventType,
        timestamp,
        args
      }
    }
  }
}
