import _ from 'lodash'

const initialState = {
  tmp: null,
  input: '',
  sign: null,
  history: []
}

export default (state = initialState, action) => {
  console.log(action.type)
  const newState = _.cloneDeep(state)
  switch (action.type) {
    case 'UPDATE_INPUT':
      newState.input = state.input + action.value
      return newState
    case 'ADD_OPERATOR':
      newState.input = ''
      if (action.value === '*') {
        newState.sign = 'x'
      } else {
        newState.sign = action.value
      }

      if (state.input.length && state.tmp) {
        newState.input = ''
      } else {
        newState.tmp = parseFloat(state.input, 10) || 0
      }

      if (!state.input.length && state.tmp && state.sign) {
        newState.tmp = state.tmp
      }
      return newState
    case 'GET_RESULT': {
      const input = parseFloat(state.input, 10)
      if ((!input && input !== 0) || !state.tmp || !state.sign) {
        return state
      }

      newState.history.push(`${state.tmp} ${state.sign} ${input}`)
      newState.input = ''
      newState.sign = ''

      switch (state.sign) {
        case '+': {
          newState.tmp = state.tmp + input
          break
        }
        case '-': {
          newState.tmp = state.tmp - input
          break
        }
        case 'x': {
          newState.tmp = state.tmp * input
          break
        }
        case '/': {
          newState.tmp = state.tmp / input
          break
        }
        default:
      }
      return newState
    }
    case 'UNDO_INPUT': {
      if (state.input.length) {
        newState.input = state.input.slice(0, -1)
      }
      return newState
    }
    case 'RESET_STATE':
      return initialState
    default:
      return state
  }
}
