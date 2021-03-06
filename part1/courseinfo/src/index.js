import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  const parts = props.parts
  const listParts = parts.map((part) => 
    <Part key={part.name} part={part} />
  ) 
  return (
    <div>
        {listParts}
    </div>
  )
}

const Part = (props) => {
  return (
    <p> {props.part.name} {props.part.exercises} </p>
  )
}

const Total = (props) => {
  const parts = props.parts
  let total = 0

  parts.forEach(part => {
    total = total + part.exercises
  }) 

  return (
     <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))