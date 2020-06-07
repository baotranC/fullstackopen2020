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

  const sum = () => {
    const sum = good + neutral + bad

    return (
      sum
    )
  }

  const average = () => {
    let average = (good * 1 + neutral * 0 + bad * -1)/ (sum())
      
    // This can only be true if the value is NaN
    if(average !== average){
      average = 0
    }
    return (
      average
    )
  }

  const percentPositive = () => {
    let percentPositive = (good * 1) / (sum())

    // This can only be true if the value is NaN
    if(percentPositive !== percentPositive){
      percentPositive = 0
    }
    return (
      percentPositive
    )
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
        <Display text='all' value={sum()}/>
        <Display text='average' value={average()}/>
        <Display text='positive' value={percentPositive()+' %'}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)