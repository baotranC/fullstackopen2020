import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
    { name: 'Coco Chanel' }
  ]) 
  const [ newName, setNewName ] = useState('')



  const addPerson = (event) =>{
    event.preventDefault()

    const newPersonName = newName.trim()
    const isPersonInPhonebook = persons.find(person => (person.name === newPersonName)) ? true : false
    
    if(isPersonInPhonebook){
      alert(`${newPersonName} is already added to phonebook`)
    } else {
      const person = {
        name: newPersonName
      }
      
      setPersons(persons.concat(person))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange = {handleNameChange}  
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </div>
  )
}

export default App