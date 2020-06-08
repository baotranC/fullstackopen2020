import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Anecdote = ({anecdotes, points}) => (
  <div>
    <h3>{anecdotes}</h3>
    <h3>has {points} votes</h3>
  </div>
)

const App = ({anecdotes}) => {
  const [state, setState] = useState({
    selected: 0,
    points: [0, 0, 0, 0, 0, 0],
    indexMaxPoints: 0
  })

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    
    const newState = {
      ...state,
      selected: random
    }
      setState(newState)
    }

  const handleVoteClick = () => {
    const copy = [...state.points]
    copy[state.selected] += 1

    let indexMax = state.indexMaxPoints
    const oldMaxVote = state.points[indexMax]
    const currentVote = copy[state.selected]

    if (currentVote > oldMaxVote){
      indexMax = state.selected
    }

    const newState = {
      ...state,
      points: copy,
      indexMaxPoints: indexMax
    }
    setState(newState)
  } 

  return (
    <div>
      <Anecdote anecdotes={anecdotes[state.selected]} points={state.points[state.selected]}/> 
      <Button onClick={handleVoteClick} text = 'vote'/>
      <Button onClick={handleAnecdoteClick} text='next anecdote'/>
      <Anecdote anecdotes={anecdotes[state.indexMaxPoints]} points={state.points[state.indexMaxPoints]}/> 
    </div>
  ) 
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)