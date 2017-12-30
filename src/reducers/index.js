const initialState = {
  input: ""
}

export default (state = initialState, action) => {
  console.log(action.type, action.value);
  switch (action.type) {
    case 'ADD_OPERATOR':
      return {
        input: state.input + action.value
      }
    default:
      return state
  }
}
