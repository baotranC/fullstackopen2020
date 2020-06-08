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
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
  const [indexMaxPoints, setIndiceMaxPoints] = useState(0)

  const handleAnecdoteClick = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1

    setPoints(copy)
    indexMax(points)
  } 

  const indexMax = () => {
    const maxIndex = points.indexOf(Math.max(...points));
    
    setIndiceMaxPoints(maxIndex)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes[selected]} points={points[selected]}/> 
      <Button onClick={handleVoteClick} text = 'vote'/>
      <Button onClick={handleAnecdoteClick} text='next anecdote'/>
      <Anecdote anecdotes={anecdotes[indexMaxPoints]} points={points[indexMaxPoints]}/> 
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