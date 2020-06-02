import React from 'react';
import ReactDOM from 'react-dom';

//Header takes care of rendering the name of the course, 
//Content renders the parts and their number of exercises and 
//Total renders the total number of exercises.

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <p> {props.part} {props.exercise} </p>
  )
}

const Total = (props) => {
  return (
     <p>Number of exercises {props.nbEx1 + props.nbEx1 + props.nbEx1}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course}/>

      <Content part={part1} exercice={exercises1}/>
      <Content part={part2} exercice={exercises2}/>
      <Content part={part3} exercice={exercises3}/>

      <Total nbEx1={exercises1} nbEx2={exercises2} nbEx13={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))