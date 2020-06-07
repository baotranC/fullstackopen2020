import React, { useState } from 'react'
import ReactDOM from 'react-dom';

const Reminder = () => {
  return (
    <div> 
      <h2>Reminder</h2>
      <p>1) Do Not Define Components Within Components</p>
      <p>2) It is forbidden in React to mutate state directly, changing state has to always be done by setting the state to a new object</p>
    </div>

  )
}

 // 3) Conditional rendering
 const History = (props) => {
  if (props.allClicks2.length === 0){
    return (
      <div>
        The app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      Button press history: {props.allClicks2.join('-')}
    </div>
  )
}

const Display = props => <div>{props.value}</div>

const Button = (props) => {
  //4.1) Debugging, the second line is better than the first one 

  // console.log('L1_props value is ' + props)          //props value is [Object object]
  // console.log('L2_props value is', props)            //{text: "Left/Right", onClick: ƒ}
  const { onClick, text } = props

  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = (props) => {
  // 1) Complex state
  const [clicks1, setClicks1] = useState({
    left: 0, right: 0
  })

  const handleLeftClick1 = () => {
    const newClick1 = {
      ...clicks1, //creates a new object that has copies of all of the properties of the clicks object
      left: clicks1.left + 1
    }
    setClicks1(newClick1)
  }
  const handleRightClick1 = () => {
    const newClick1 = {
      ...clicks1,
      right: clicks1.right + 1
    }
    setClicks1(newClick1)
  }

  // Let's add a piece of state to our application containing an array 
  // allClicks that remembers every click that has occurred in the application.
  // 2) Handling arrays
  const [left2, setLeft2] = useState(0)
  const [rigth2, setRight2] = useState(0)
  const [allClicks2, setAll2] = useState([])

  const handleLeftClick2 = () => {
    setAll2(allClicks2.concat('L'))
    setLeft2(left2 + 1)
  }

  const handleRightClick2 = () => {
    setAll2(allClicks2.concat('R'))
    setRight2(rigth2 + 1)
  }

 

  //4.2) Debugging
  //debugger
  //4.3) Debugging
  // adding break points in the Sources tab

  //5) Function that returns a function
  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
      return handler
  }

  const [value1, setValue1] = useState(10)
  const [value2, setValue2] = useState(10)

  const setToValue1 = (newValue) => () => {
    setValue1(newValue)
  }
  const setToValue2 = (newValue) => {
    setValue2(newValue)
  }
  
  return (
    <div>
      <Reminder/>
      
      <h2>Complex state</h2>
      <div>
        {clicks1.left}
        <button onClick={handleLeftClick1}>left</button>
        <button onClick={handleRightClick1}>right</button>
        {clicks1.right}
      </div>

      <br/>
      <h2>Handling arrays</h2>
      <div>
        {left2}
        <button onClick={handleLeftClick2}>Left</button>
        <button onClick={handleRightClick2}>Right</button> 
        {rigth2}
        <p>{allClicks2.join('-')}</p>

        <br/>
        <h2>Conditional rendering</h2>
        <h3>Small and reusable React component</h3>
        <History allClicks2 = {allClicks2}/>
        <Button onClick={handleLeftClick2} text='Left'/>
        <Button onClick={handleRightClick2} text='Rigth'/>
      </div>
      <div>
        <br/>
        <h2>Function that returns a function</h2>
        <div>Check the console</div>
        <button onClick={hello('worl')}>Button</button>
        <button onClick={hello('react')}>button</button>
        <button onClick={hello('function')}>button</button>
      </div>
      <div>
        <br/>
        {value1}
        <br/>
        <button onClick={setToValue1(1000)}>thousand</button>
        <button onClick={setToValue1(0)}>reset</button>
        <button onClick={setToValue1(value1 + 1)}>increment</button>

        <br/>
        {value2}
        <br/>
        <button onClick={() => setToValue2(1000)}>thousand</button>
        <button onClick={() => setToValue2(0)}>reset</button>
        <button onClick={() => setToValue2(value2 + 1)}>increment</button>
      </div>

      <div>
        <br/>
        <h2>Do Not Define Components Within Components</h2>

        <Display value={value2}/>
        <Button onClick={() => setToValue2(1000)} text='thousand'/>
        <Button onClick={() => setToValue2(0)} text='reset'/>
        <Button onClick={() => setToValue2(value2 + 1)} text='increment'/>
      </div>
    </div>

  )
}


ReactDOM.render(<App />, document.getElementById('root'));

