import React from 'react'
import { mount } from 'enzyme'
import ActuatorInner from '../components/ActuatorInner'

describe('ActuatorInner component', () => {
  it('should not trigger any events on mount', () => {
    const eventHandler = jest.fn()

    mount(<ActuatorInner handlers={{foo: eventHandler}} />)
    expect(eventHandler).not.toHaveBeenCalled()
  })

  it('should invoke an event handler on event type change', () => {
    const eventHandler = jest.fn()

    const wrapper = mount(<ActuatorInner handlers={{foo: eventHandler}} />)
    wrapper.setProps({ event: {
      type: 'foo',
      timestamp: 1,
      args: [ 'bar', 1337 ]
    }})

    expect(eventHandler).toHaveBeenCalledTimes(1)
    expect(eventHandler).toHaveBeenCalledWith('bar', 1337)
  })
})
