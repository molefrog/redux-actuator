import 'raf/polyfill'

import Enzyme, { mount } from 'enzyme'
import React from 'react'
import { createStore as createReduxStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-16'
import 'raf/polyfill'

Enzyme.configure({ adapter: new Adapter() })

import createEngine, { actuate, Actuator } from '../index'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const createStore = () => {
  const engine = createEngine()
  const reducer = combineReducers({ actuator: engine.reducer })
  const store = createReduxStore(reducer)

  return store
}

describe('Actuator component', () => {
  it('catches events on default channel', () => {
    const store = createStore()
    const eventHandler = jest.fn()

    mount(
      <Provider store={store}>
        <Actuator events={{ foo: eventHandler }} />
      </Provider>
    )

    store.dispatch(actuate('foo', 1, 2, 3))
    expect(eventHandler).toHaveBeenCalledWith(1, 2, 3)
  })

  it('catches events triggered several times', () => {
    const store = createStore()
    const eventHandler = jest.fn()

    mount(
      <Provider store={store}>
        <Actuator events={{ foo: eventHandler }} />
      </Provider>
    )

    store.dispatch(actuate('foo'))
    store.dispatch(actuate('foo'))

    expect(eventHandler).toHaveBeenCalledTimes(2)
  })

  it('doesnt handle event dispatched before component render', () => {
    const store = createStore()
    const eventHandler = jest.fn()

    store.dispatch(actuate('foo'))

    return delay(30).then(() => {
      mount(
        <Provider store={store}>
          <Actuator events={{ foo: eventHandler }} />
        </Provider>
      )

      expect(eventHandler).not.toHaveBeenCalled()
    })
  })

  it('should handle event onMount with timestamp younger than deltaError', () => {
    const store = createStore()
    const eventHandler = jest.fn()

    store.dispatch(actuate('baz'))

    return delay(30).then(() => {
      mount(
        <Provider store={store}>
          <Actuator events={{ baz: eventHandler }} deltaError={40} />
        </Provider>
      )

      expect(eventHandler).toHaveBeenCalled()
    })
  })

  it('doesnt handle event onMount with timestamp older than deltaError', () => {
    const store = createStore()
    const eventHandler = jest.fn()

    store.dispatch(actuate('bar'))

    return delay(30).then(() => {
      mount(
        <Provider store={store}>
          <Actuator events={{ bar: eventHandler }} deltaError={25} />
        </Provider>
      )

      expect(eventHandler).not.toHaveBeenCalled()
    })
  })
})
