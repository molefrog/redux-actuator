
const currentTimestamp = () => (new Date()).getTime()

// Actions
export const ACTUATE = 'redux-actuator/ACTUATE'

const actuateFactory = (channel) =>
  (eventType, ...args) => {
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

// Action creators
export const actuate = actuateFactory('default')
export const actuateChannel = actuateFactory
