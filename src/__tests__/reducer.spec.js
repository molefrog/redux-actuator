import createReducer from '../reducer'
import { ACTUATE } from '../actions'

const mockEngine = {}
const reducer = createReducer(mockEngine)

describe('reducer', () => {
  it('should return an empty object as initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle ACTUATE action when channel is given', () => {
    const state = reducer(
      {},
      {
        type: ACTUATE,
        payload: { channel: 'm00t', timestamp: 1337 }
      }
    )

    expect(state.m00t).toBeTruthy()
    expect(state.m00t).toMatchObject({ timestamp: 1337 })
  })

  it('should ignore action when channel is not specified', () => {
    const initialState = { someChannel: { foo: 'bar' } }
    const state = reducer(initialState, { type: ACTUATE })

    expect(state).toEqual(initialState)
  })
})
