import React from 'react'

const Total = ({course}) => {

  const parts = course.parts

  const total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return(
    <b>Total of {total} exercises</b>
  )
}

export default Total