import { ACTUATE, actuate } from '../actions'

describe('actuate() action creator', () => {
  it('should create flux standard action with type ACTUATE', () => {
    const action = actuate()
    expect(action.type).toBe(ACTUATE)
    expect(action.payload).toMatchObject({})
  })
})
