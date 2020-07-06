import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

  const personsToShow = (newFilter.trim() === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.trim().toLowerCase())) 


  /* Longer version
    const hook = () => {
    const eventHandler = response => {
      setPersons(response.data)
    }
    const promise = axios.get('http://localhost:3001/persons')
    promise.then(eventHandler)
  }
  useEffect(hook, [])*/
 
  const addPerson = (event) =>{
    event.preventDefault()

    const newPersonName = newName.trim()
    const isPersonInPhonebook = persons.find(person => (person.name === newPersonName)) ? true : false
    
    const newPersonNumber = newNumber.trim()

    if(isPersonInPhonebook){
      alert(`${newPersonName} is already added to phonebook`)
    } else if(newPersonName === '' || newPersonNumber === ''){
      alert(`One of the fields is missing`)
    } else {
      const person = {
        name: newPersonName,
        number: newPersonNumber
      }

      personService
      .create(person)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const filter = event.target.value
    setNewFilter(filter)
  }

  const removePerson = (id) => {
    const personToRemove = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${personToRemove.name}?`)) { 
      personService
      .remove(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
       })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
    
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App