import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '00-00-00000000'},
    { name: 'Coco Chanel', number: '11-11-11111111' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addContact = (event) =>{
    event.preventDefault()

    const newContactName = newName.trim()
    const isPersonInPhonebook = persons.find(person => (person.name === newContactName)) ? true : false
    
    const newContactNumber = newNumber.trim()

    if(isPersonInPhonebook){
      alert(`${newContactName} is already added to phonebook`)
    } else if(newContactName === '' || newContactNumber === ''){
      alert(`One of the fields is missing`)
    } else {
      const person = {
        name: newContactName,
        number: newContactNumber
      }
      
      setPersons(persons.concat(person))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: 
          <input 
            value={newName} 
            onChange = {handleNameChange}  
          />
        </div>

        <div>
          number: 
          <input 
            value={newNumber} 
            onChange = {handleNumberChange}  
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
  {persons.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App