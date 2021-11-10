export const addNumberToCalcul = (props) => {
  return {
    type: 'ADD_NUMBER',
    payload: props
  }
}

export const setOperator = (props) => {
  return {
    type: 'SET_OPERATOR',
    payload: props
  }
}

export const resetCalcul = () => {
  return {
    type: 'RESET_CALCUL'
  }
}

export const updateCalcul = (result) => {
  return {
    type: 'UPDATE_CALCUL',
    payload: result
  }
}