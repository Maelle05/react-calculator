export const addDisplay = (props) => {
  return {
    type: 'ADD_DISPLAY',
    payload: props
  }
}

export const resultDisplay = (result) => {
  return {
    type: 'RESULT_DISPLAY',
    payload: result
  }
}

export const resetDisplay = () => {
  return {
    type: 'RESET_DISPLAY'
  }
}