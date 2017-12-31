export const addOperator = value => ({
  type: 'ADD_OPERATOR',
  value
})

export const updateInput = value => ({
  type: 'UPDATE_INPUT',
  value
})

export const getResult = () => ({
  type: 'GET_RESULT'
})

export const undoInput = () => ({
  type: 'UNDO_INPUT'
})

export const resetState = () => ({
  type: 'RESET_STATE'
})
