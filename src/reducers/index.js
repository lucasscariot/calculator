/* eslint no-eval: 0 */
import _ from 'lodash'

const initialState = {
  result: '',
  currentCompute: '',
  completedCompute: '',
  monkeyFunction: null
}

const Elements = [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
]

export default (state = initialState, action) => {
  const newState = _.cloneDeep(state)
  const lastComputeElement = newState.currentCompute[newState.currentCompute.length - 1]

  switch (action.type) {
    case 'UPDATE_COMPUTE': {
      if (state.result) {
        newState.completedCompute = ''
      }
      if (Elements.indexOf(action.value) === -1) {
        return newState
      }
      newState.currentCompute = state.currentCompute + action.value
      newState.result = ''
      return newState
    }
    case 'ADD_OPERATOR': {
      if (action.value === '-' && lastComputeElement !== '-') {
        newState.currentCompute = state.currentCompute + action.value
        return newState
      }
      if (Elements.indexOf(lastComputeElement) === -1) {
        return newState
      }
      const value = action.value === 'x' ? '*' : action.value
      newState.currentCompute = state.currentCompute + value
      return newState
    }
    case 'GET_RESULT': {
      if (Elements.indexOf(lastComputeElement) === -1) {
        return newState
      }

      try {
        newState.result = eval(state.currentCompute)
      } catch (e) {
        newState.result = 'error'
      }
      if (newState.result === Infinity) { newState.result = 'error' }
      newState.completedCompute = state.currentCompute
      newState.currentCompute = initialState.currentCompute
      return newState
    }
    case 'UNDO_INPUT': {
      if (state.currentCompute.length) {
        newState.currentCompute = state.currentCompute.slice(0, -1)
      }
      return newState
    }
    case 'UNLEASH_MONKEYS': {
      newState.monkeyFunction = action.value
      return newState
    }
    case 'ENCLOSE_MONKEYS': {
      newState.monkeyFunction = null
      return newState
    }
    case 'CLEAR_COMPUTE': {
      const cleanState = _.cloneDeep(initialState)
      cleanState.monkeyFunction = state.monkeyFunction
      return cleanState
    }
    default:
      return state
  }
}
