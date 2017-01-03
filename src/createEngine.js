import createReducer from './reducer'

const defaultOptions = {
  mountedAt: 'actuator'
}

const createEngine = (options = {}) => {
  const engine = {
    options: { ...defaultOptions, ...options }
  }

  const reducer = createReducer(engine)

  return { ...engine, reducer }
}

export default createEngine
