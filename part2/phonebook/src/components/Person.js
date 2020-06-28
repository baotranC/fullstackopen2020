import React from 'react'

const Person = ({contactToShow}) => {
    return(
        <ul>
            {contactToShow.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
        </ul>
    )
  }
  
export default Person