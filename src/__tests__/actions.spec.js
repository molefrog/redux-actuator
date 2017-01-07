import { ACTUATE, actuate } from '../actions'

describe('actuate() action creator', () => {
  it('should create flux standard action with type ACTUATE', () => {
    const action = actuate()
    expect(action.type).toBe(ACTUATE)
    expect(action.payload).toMatchObject({})
  })

  it('creates ACTUATE action on a default channel', () => {
    const action = actuate()
    expect(action.payload.channel).toBe('default')
  })

  it('takes the name of the event as a first arg', () => {
    const action = actuate('foo')
    expect(action.payload.event.type).toBe('foo')
  })

  it('takes event parameters', () => {
    const action = actuate('foo', 'what', 'the', 'hell')
    expect(action.payload.event.args).toEqual([ 'what', 'the', 'hell' ])
  })
})
