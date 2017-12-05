import { ACTUATE } from './actions'

const createReducer = engine => (state = {}, action) => {
  if (action.type === ACTUATE) {
    const { channel, ...rest } = action.payload || {}

    // Ignore mailformed actions
    if (!channel || !rest) {
      return state
    }

    return {
      ...state,
      [channel]: rest
    }
  }
  return state
}

export default createReducer
