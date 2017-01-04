import { mount } from 'enzyme'
import React from 'react'
import { createStore as createReduxStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import createEngine, { actuate, Actuator } from '../index'

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
        <Actuator events={{foo: eventHandler}} />
      </Provider>)

    store.dispatch(actuate('default', 'foo', 1, 2, 3))
    expect(eventHandler).toHaveBeenCalledWith(1, 2, 3)
  })

  it('catches events triggered several times', () => {
    const store = createStore()
    const eventHandler = jest.fn()

    mount(
      <Provider store={store}>
        <Actuator events={{foo: eventHandler}} />
      </Provider>)

    store.dispatch(actuate('default', 'foo'))
    store.dispatch(actuate('default', 'foo'))

    expect(eventHandler).toHaveBeenCalledTimes(2)
  })
})
