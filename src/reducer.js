import { ACTUATE } from './actions'

const createReducer = (engine) =>
  (state = {}, action) => {
    if (action.type === ACTUATE) {
      const { channel, ...rest } = action.payload || {}
      const event = rest.event || {}

      // Channel isn't given, ignore
      if (!channel) {
        return state
      }

      return {
        ...state,
        [channel]: event
      }
    }
    return state
  }

export default createReducer
