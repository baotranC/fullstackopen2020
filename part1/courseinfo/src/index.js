import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part part={props.part1} exercice={props.exercises1} />
        <Part part={props.part2} exercice={props.exercises2} />
        <Part part={props.part3} exercice={props.exercises3} />
    </div>
  )
}

const Part = (props) => {
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

      <Content part1={part1} exercice1={exercises1}/>
      <Content part2={part2} exercice2={exercises2}/>
      <Content part3={part3} exercice3={exercises3}/>

      <Total nbEx1={exercises1} nbEx2={exercises2} nbEx13={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))