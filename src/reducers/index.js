/* eslint no-eval: 0 */
import _ from 'lodash'

const initialState = {
  computeHistory: [],
  result: "",
  currentCompute: ''
}

const Elements = [
  '1', '2', '3', '4',
  '5', '6', '7', '8',
  '9', '0'
]

export default (state = initialState, action) => {
  const newState = _.cloneDeep(state)

  // console.log(action.type, action.value)

  switch (action.type) {
    case 'UPDATE_COMPUTE':
      newState.currentCompute = state.currentCompute + action.value
      newState.result = ""
      return newState
    case 'ADD_OPERATOR':
      if (Elements.indexOf(newState.currentCompute[newState.currentCompute.length - 1]) === -1) {
        return newState
      }
      const value = action.value === 'x' ? '*' : action.value
      newState.currentCompute = state.currentCompute + value
      return newState
    case 'GET_RESULT': {
      if (Elements.indexOf(newState.currentCompute[newState.currentCompute.length - 1]) === -1) {
        return newState
      }

      try {
        newState.result = eval(state.currentCompute)
      } catch (e) {
        newState.result = 'Error'
      }
      newState.currentCompute = initialState.currentCompute
      return newState
    }
    case 'UNDO_INPUT': {
      if (state.currentCompute.length) {
        newState.currentCompute = state.currentCompute.slice(0, -1)
      }
      return newState
    }
    case 'CLEAR_COMPUTE':
      return initialState
    default:
      return state
  }
}
