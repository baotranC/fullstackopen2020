import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Hello is a React component
// 2.1)const Hello = (props) => {
  // const name = props.name
  // const age = props.age
  //2.2) Destructuring
const Hello = ({name, age})=>{
  //2.3)
  // const {name, age} = props
  
  //3.1 function
  // const bornYear = () => {
  //   return new Date().getFullYear() - age
  // } 
  //3.2    
  const bornYear = () => new Date().getFullYear()

  return (
    <div>
      <p>Hello {name}, you are {age}</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href="https://github.com/baotranC">Bao</a>
    </div>
  )
}

// 1.2) return things with a root element
const ReturnRootElement = () => {
  return [
    <div>
      <h2>Example 1.1</h2>
      <p>Return with a root element</p>
    </div>
  ]
}

// 1.2) return things with an array
const ReturnArray = () => {
  return [
      <h2>Example 1.2</h2>,
      <p>Return with a array</p>
  ]
}


const Display = ({ counter3 }) => <div>{counter3}</div>
  

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
    )
}

const App = (props) => {
  console.log('Use for debugging')

  const name = 'Peter'
  const age = 10
  //4.1 const {counter} = props
  //4.2
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [counter3, setCounter3] = useState(0)
  // The counter variable is assigned the initial value of state which is zero. 
  // The variable setCounter is assigned to a function that will be used to modify the state.

  setTimeout(
    () => setCounter(counter + 1), 
    1000
  )

  const increaseByOne2 = () => setCounter2(counter2 + 1)
  const resetToZero2 = () => setCounter2(0)

  const increaseByOne3 = () => setCounter3(counter3 + 1)
  const decreaseByOne3 = () => setCounter3(counter3 - 1)
  const resetToZero3 = () => setCounter3(0)
  //5.1  Event handling
  // const handleClick = () => {
  //   console.log('clicked')
  // }


  return (
    //Because the root element is stipulated, use fragment
    <> 
      <h1>Grettings</h1> 
      <Hello name="Maya" age={25+10}/>
      <Hello name={name} age={age}/>
      <Footer/>
      <br/> 
      <div>{counter}</div>
      <br/>
      {/* 5.1 */}
      {/* <button onClick={handleClick}>Add</button> */}
      {/* 5.2 */}
      {/* <button onClick={() =>  console.log('clicked')} >Add</button> */}

      {/* 5.3 */}
      {/* 6.1 Not separate the event handlers into separate functions*/}
      {/* <button onClick = {() => setCounter2(counter2 + 1)}>Add</button>
      <button onClick = {() => setCounter2(0)}>Reset</button> */}
      {/* 6.2 Separate the event handlers into separate functions*/}
      <button onClick = {increaseByOne2}>Add</button>
      <button onClick = {resetToZero2}>Reset</button>
      <div>{counter2}</div>

      {/* Lift the state up in the component hierarchy */}
      {/* write React components that are small and reusable */}
      {/* New component Button and Display */}
      <br/>
      <Button handleClick={increaseByOne3} text='Plus'/> 
      <Button handleClick={decreaseByOne3} text = 'Minus'/>
      <Button handleClick={resetToZero3} text = 'Reset'/>
      <Display counter3={counter3}/>

      <br/>
      <ReturnRootElement/>
      <ReturnArray/>
    </> 
  )
}

//4.1) Page re-rendering
// let counter = 1

// const refresh = () => {
//   ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))
// }
// // Making repeated calls to the ReactDOM.render method is not the recommended way to re-render components

// setInterval(()=> {
//   refresh()
//   counter +=1
// }, 1000)
ReactDOM.render(<App/>, document.getElementById('root'))