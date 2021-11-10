const initialState = {
  currentDisplay: '',
}

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_DISPLAY': {
      return {
        //Copy the entire state object
        ...state,
        currentDisplay: state.currentDisplay + action.payload.add,
      }
    }
    case 'RESULT_DISPLAY': {
      return {
        ...state,
        currentDisplay: action.payload.result,
      }
    }
    case 'RESET_DISPLAY': {
      return {
        ...state,
        currentDisplay: '',
      }
    }
    default:
      return state
  }
}