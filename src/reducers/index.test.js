import expect from 'expect'
import Reducer from './index'

/* global it, describe */
describe('Import Reducer', () => {
  it('should correctly import reducer', () => {
    expect(Reducer).not.toBe(null)
  })

  it('should return the initial state', () => {
    expect(Reducer(undefined, {})).toEqual({
      currentCompute: '',
      result: '',
      monkeyFunction: null
    })
  })
})

describe('Compute Actions', () => {
  let state = Reducer(undefined, {})
  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '2'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('2')
  })

  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '3'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23')
  })

  it('should add the operator to the current compute', () => {
    const updateCompute = {
      type: 'ADD_OPERATOR',
      value: '+'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+')
  })

  it('should not add add the operator twice to the current compute', () => {
    const updateCompute = {
      type: 'ADD_OPERATOR',
      value: '+'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+')
  })

  it('should not add a wrong operator', () => {
    const updateCompute = {
      type: 'ADD_OPERATOR',
      value: 'f'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+')
  })

  it('should not update compute with a wrong value', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: 'f'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+')
  })

  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '9'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+9')
  })

  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '0'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+90')
  })

  it('should remove the last value in current compute', () => {
    const updateCompute = {
      type: 'UNDO_INPUT'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('23+9')
  })

  it('should compute the calcul', () => {
    const updateCompute = {
      type: 'GET_RESULT'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('')
    expect(state.result).toEqual(32)
  })

  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '1'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('1')
  })

  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '4'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('14')
  })

  it('should add the operator to the current compute', () => {
    const updateCompute = {
      type: 'ADD_OPERATOR',
      value: '/'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('14/')
  })

  it('should handle add the value to the current compute', () => {
    const updateCompute = {
      type: 'UPDATE_COMPUTE',
      value: '0'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('14/0')
  })

  it('should return an error', () => {
    const updateCompute = {
      type: 'GET_RESULT'
    }
    state = Reducer(state, updateCompute)
    expect(state.currentCompute).toEqual('')
    expect(state.result).toEqual('error')
  })
})
