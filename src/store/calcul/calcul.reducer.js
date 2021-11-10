const initialState = {
  firstPart: "",
  operator: "",
  secondePart: ""
}

export default function calculReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NUMBER': {
      if(state.operator === ""){
        return {
          //Copy the entire state object
          ...state,
          firstPart: state.firstPart + action.payload.add
        }
      }else{
        return {
          //Copy the entire state object
          ...state,
          secondePart: state.secondePart + action.payload.add
        }
      }
    }
    case 'SET_OPERATOR': {
      return {
        //Copy the entire state object
        ...state,
        operator: action.payload.operator
      }
    }
    case 'RESET_CALCUL': {
      return {
        firstPart: "",
        operator: "",
        secondePart: ""
      }
    }
    case 'UPDATE_CALCUL': {
      return {
        firstPart: action.payload.result,
        operator: "",
        secondePart: ""
      }
    }
    default:
      return state
  }
}