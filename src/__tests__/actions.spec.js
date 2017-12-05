import { ACTUATE, actuate } from '../actions'

describe('actuate() action creator', () => {
  it('should create flux standard action with type ACTUATE', () => {
    const action = actuate('f00z')
    expect(action.type).toBe(ACTUATE)
    expect(action.payload).toMatchObject({})
  })

  it('uses first arg as a name of the channel', () => {
    const action = actuate('foo')
    expect(action.payload.channel).toBe('foo')
  })

  it('puts an empty array if args are not specified', () => {
    const action = actuate('foo')
    expect(action.payload.args).toEqual([])
  })

  it('takes event parameters', () => {
    const action = actuate('foo', 'what', 'the', 'hell')
    expect(action.payload.args).toEqual(['what', 'the', 'hell'])
  })
})
