import _ from 'lodash'

const initialState = {
  tmp: null,
  input: '',
  sign: null,
  history: []
}

export default (state = initialState, action) => {
  const newState = _.cloneDeep(state)
  switch (action.type) {
    case 'UPDATE_INPUT':
      newState.input = state.input + action.value
      return newState
    case 'ADD_OPERATOR':
      newState.input = ''
      newState.sign = action.value
      newState.tmp = parseFloat(state.input, 10) || 0

      if (!state.input.length && state.tmp && state.sign) {
        newState.tmp = state.tmp
      }
      return newState
    case 'GET_RESULT': {
      let input = parseFloat(state.input, 10)
      if (!input && input !== 0) { input = state.tmp }

      newState.history.push(`${state.tmp} ${state.sign} ${input}`)
      switch (state.sign) {
        case '+': {
          newState.input = state.tmp + input
          break
        }
        case '-': {
          newState.input = state.tmp - input
          break
        }
        case 'x': {
          newState.input = state.tmp * input
          break
        }
        case '/': {
          newState.input = state.tmp / input
          break
        }
        default:
      }
      return newState
    }
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}
