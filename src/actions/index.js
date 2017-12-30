export const addOperator = (value) => ({
  type: 'ADD_OPERATOR',
  value: value
})

export const updateInput = (value) => ({
  type: 'UPDATE_INPUT',
  value: value
})


export const getResult = () => ({
  type: 'GET_RESULT'
})

export const resetState = () => ({
  type: 'RESET_STATE'
})
