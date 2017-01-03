
const currentTimestamp = () => (new Date()).getTime()

// Actions
export const ACTUATE = 'redux-actuator/ACTUATE'

// Action creators
export const actuate = (channel, event, eventData = {}) => {
  const timestamp = currentTimestamp()

  return {
    type: ACTUATE,
    payload: { timestamp, channel, event, eventData }
  }
}
