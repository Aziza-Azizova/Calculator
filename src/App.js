import React, { useState } from 'react'
import "./App.css";

function App() {
  const [condition, setCondition] = useState("");

    const add_operator = (num) =>{
        if(condition[0] === undefined || condition[0] === "-") setCondition("")
        else setCondition(condition.concat(num.target.name));
    }

    const subtract_operator = (num) =>{
        if(condition[0] === undefined || condition[0] === "-") setCondition("")
        else setCondition(condition.concat(num.target.name));
    }

    const multiply_operator = (num) =>{
        if(condition[0] === undefined || condition[0] === "-") setCondition("")
        else setCondition(condition.concat(num.target.name));
    }

    const divide_operator = (num) =>{
        if(condition[0] === undefined || condition[0] === "-") setCondition("")
        else setCondition(condition.concat(num.target.name));
    }
    const equal_operator = (num) =>{
      setCondition(eval(condition).toString())
    }
    const click = (num)=>{
      setCondition(condition.concat(num.target.name))
    }
    function clear(){
      setCondition("")
    }
  return (
    <div className='calculator-body'>
      <div className='show_ans'>
          <input  placeholder='0' value={condition} id='show_ans' type="text"/>
      </div>
      <div className="button">
        


        <button name="1" onClick={click}>1</button>
        <button name="2" onClick={click}>2</button>
        <button name="3" onClick={click}>3</button>
        <button name="C" onClick={clear}>Clear</button><br/>


        <button name="4" onClick={click}>4</button>
        <button name="5" onClick={click}>5</button>
        <button name="6" onClick={click}>6</button>
        <button name="-" onClick={subtract_operator}>-</button><br/>

        <button name="7" onClick={click}>7</button>
        <button name="8" onClick={click}>8</button>
        <button name="9" onClick={click}>9</button>
        <button name="*" onClick={multiply_operator}>x</button><br/>

        <button name="0" onClick={click}>0</button>
        <button name="=" onClick={equal_operator}>=</button>
        <button name="/" onClick={divide_operator}>÷</button>
        <button name="+" onClick={add_operator}>+</button>
        <br/>

      </div>
    </div>
  )
}

export default App