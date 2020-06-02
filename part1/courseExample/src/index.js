import React from 'react';
import ReactDOM from 'react-dom';

//Hello is a React component
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
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

const App = () => {
  console.log('Use for debugging')

  const name = 'Peter'
  const age = 10


  return (
    //Because the root element is stipulated, use fragment
    <> 
      <h1>Grettings</h1> 
      <Hello name="Maya" age={25+10}/>
      <Hello name={name} age={age}/>
      <Footer/>

      <br/>

      <ReturnRootElement/>
      <ReturnArray/>
    </> 
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
