import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Header = ({value}) => (
  <h1>{value}</h1>
)

const Display = ({text, value})=>(
<div>{text} {value}</div>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  } 

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <Header value = 'give feedback'/>
        <Button onClick={handleGoodClick} text={'good'}></Button>
        <Button onClick={handleNeutralClick} text={'neutral'}></Button>
        <Button onClick={handleBadClick} text={'bad'}></Button>
      </div>
      <div>
        <Header value = 'statistics'/>
        <Display text='good' value={good}/>
        <Display text='neutral' value={neutral}/>
        <Display text='bad' value={bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)