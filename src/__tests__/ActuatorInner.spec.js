import 'raf/polyfill'

import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ActuatorInner from '../components/ActuatorInner'

Enzyme.configure({ adapter: new Adapter() })

describe('ActuatorInner component', () => {
  it('should not trigger any events on mount', () => {
    const eventHandler = jest.fn()

    mount(<ActuatorInner handler={eventHandler} />)
    expect(eventHandler).not.toHaveBeenCalled()
  })

  it('should invoke an event handler on event type change', () => {
    const eventHandler = jest.fn()

    const wrapper = mount(<ActuatorInner handler={eventHandler} />)
    wrapper.setProps({
      event: {
        timestamp: 1,
        args: ['bar', 1337]
      }
    })

    expect(eventHandler).toHaveBeenCalledTimes(1)
    expect(eventHandler).toHaveBeenCalledWith('bar', 1337)
  })
})
