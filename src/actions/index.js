export const addOperator = value => ({
  type: 'ADD_OPERATOR',
  value
})

export const updateCompute = value => ({
  type: 'UPDATE_COMPUTE',
  value
})

export const unleashMonkeys = value => ({
  type: 'UNLEASH_MONKEYS',
  value
})

export const encloseMonkeys = () => ({
  type: 'ENCLOSE_MONKEYS'
})

export const getResult = () => ({
  type: 'GET_RESULT'
})

export const undoInput = () => ({
  type: 'UNDO_INPUT'
})

export const clearCompute = () => ({
  type: 'CLEAR_COMPUTE'
})
