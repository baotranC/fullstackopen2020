import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Person from './components/Person'
import axios from 'axios'

const App = () => {
  // const [ persons, setPersons ] = useState([
  //   { name: 'Arto Hellas', number: '040-123456' },
  //   { name: 'Ada Lovelace', number: '39-44-5323523' },
  //   { name: 'Dan Abramov', number: '12-43-234345' },
  //   { name: 'Mary Poppendieck', number: '39-23-6423122' }
  // ]) 
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const hook = () => {
    const eventHandler = response => {
      setPersons(response.data)
    }
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }
  useEffect(hook, [])

  const contactToShow = (newFilter.trim() === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.trim().toLowerCase())) 
  
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
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filter = event.target.value
    // console.log(filter)
    setNewFilter(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
    
      <h2>add a new</h2>
      <PersonForm addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Person contactToShow={contactToShow}/>
    </div>
  )
}

export default App