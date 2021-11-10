import { combineReducers } from 'redux'
import calculReducer from './calcul/calcul.reducer'
import displayReducer from './display/display.reducer'

export const rootReducers = combineReducers({
  calcul: calculReducer,
  display: displayReducer
})