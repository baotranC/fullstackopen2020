import React from 'react'

const Total = (props) => {

  const parts = props.course.parts

  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return(
    <b>Total of {total} exercises</b>
  )
}

export default Total