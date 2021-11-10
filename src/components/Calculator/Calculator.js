import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDisplay , resultDisplay, resetDisplay} from '../../store/display/display.action'
import { addNumberToCalcul, setOperator, resetCalcul, updateCalcul } from '../../store/calcul/calcul.action'
import './Calculator.scss'

export default function Calculator() {
  const dispatch = useDispatch();
  const display = useSelector(state => state.display.currentDisplay)
  const firstPart = useSelector(state => state.calcul.firstPart)
  const operatorIsSet = useSelector(state => state.calcul.operator)
  const secondePart = useSelector(state => state.calcul.secondePart)

  const handelNumberClick = (num) => {
    dispatch(addDisplay({ add: num }))
    dispatch(addNumberToCalcul({ add: num }))
  }

  const handelOperatorClick = (operator) => {
    if(operatorIsSet === "" && firstPart !== ""){
      dispatch(setOperator({ operator: operator }))
      switch (operator) {
        case '*':
            dispatch(addDisplay({ add: " x " })) 
            break;
        default:
          dispatch(addDisplay({ add: ` ${operator} ` }))
          break;
      }
    }else{
      if (firstPart === "") {
        alert('Entrer tout d\'abord un nombre')
      } else {
        alert('Vous avez deja choisi un operateur')
      }
    }
  }

  const goCalcul = () => {
    if(firstPart !== "" && operatorIsSet !== "" && secondePart !== ""){
      let result
      switch (operatorIsSet) {
        case '*' :
          result = Number(firstPart) * Number(secondePart)
          break;
        case '+' :
          result = Number(firstPart) + Number(secondePart)
          break;
        case '-' :
          result = Number(firstPart) - Number(secondePart)
          break;
      
        default:
          break;
      }
      
      dispatch(updateCalcul({ result }))
      dispatch(resultDisplay({ result }))
    }else{
      alert('Tous les éléments du calcul ne sont pas present')
    }
  }

  const goReset = () => {
    dispatch(resetCalcul())
    dispatch(resetDisplay())
  }

  return (
    <div className="Calculator">
      <h1>Calculatrice</h1>
      <h3>TI-83 Premium CE</h3>
      <div className="Calculator_body">
        <div className='Calculator_body_screen'>
          <span id='Calculator_display'>{display}</span>
        </div>
        <div className='Calculator_body_keys'>
          <div className='Calculator_body_keys_number'>
            <button onClick={() => handelNumberClick('9')} >9</button>
            <button onClick={() => handelNumberClick('8')} >8</button>
            <button onClick={() => handelNumberClick('7')} >7</button>
            <button onClick={() => handelNumberClick('6')} >6</button>
            <button onClick={() => handelNumberClick('5')} >5</button>
            <button onClick={() => handelNumberClick('4')} >4</button>
            <button onClick={() => handelNumberClick('3')} >3</button>
            <button onClick={() => handelNumberClick('2')} >2</button>
            <button onClick={() => handelNumberClick('1')} >1</button>
            <button onClick={() => handelNumberClick('0')} >0</button>
          </div>
          <div className='Calculator_body_keys_operator'>
            <button onClick={() => handelOperatorClick('+')} >+</button>
            <button onClick={() => handelOperatorClick('-')} >-</button>
            <button onClick={() => handelOperatorClick('*')}>x</button>
            <button onClick={() => goCalcul()} >Enter</button>
            <button onClick={() => goReset()} >Supr</button>
          </div>
        </div>
      </div>
    </div>
  )
}
