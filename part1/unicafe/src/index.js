import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Header = ({value}) => (
  <h1>{value}</h1>
)

const Statistic = ({text, value})=>(
<div>{text} {value}</div>
)

const Statistics = ({good, neutral, bad, allClicks}) => {
  const sum = () => {
    const sum = good + neutral + bad

    return (
      sum
    )
  }

  const average = () => {
    let average = (good * 1 + neutral * 0 + bad * -1)/ (sum())
      
    if(isNaN(average)){
      average = 0
    }
    return (
      average
    )
  }

  const percentPositive = () => {
    let percentPositive = (good * 1) / (sum()) * 100

    if(isNaN(percentPositive)){
      percentPositive = 0
    }
    return (
      percentPositive
    )
  }

  if(allClicks.length === 0){
    return (
      <div>
        <div>No feedback given</div>
      </div>)
  }

  return (
    <div>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>  
      <Statistic text='all' value={sum()}/>
      <Statistic text='average' value={average()}/>
      <Statistic text='positive' value={percentPositive()+' %'}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setAll(allClicks.concat('G'))
    setGood(good + 1)
  } 

  const handleNeutralClick = () => {
    setAll(allClicks.concat('N'))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat('B'))
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <Header value = 'give feedback'/>
        <Button onClick={handleGoodClick} text={'good'}></Button>
        <Button onClick={handleNeutralClick} text={'neutral'}></Button>
        <Button onClick={handleBadClick} text={'bad'}></Button>
        <Header value = 'statistics'/>
        <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)