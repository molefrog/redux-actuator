import defaultExport, { ACTUATE } from '../index'

describe('entry point', () => {
  it('should export createReducer as default', () => {
    expect(typeof defaultExport).toEqual('function')
  })

  it('should export everything from actions module', () => {
    expect(typeof ACTUATE).toEqual('string')
  })
})
