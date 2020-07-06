import React, { useState, useEffect } from 'react'
import './index.css'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'

import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ successMessage, setSuccessMessage ] = useState(null)

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
    const personInPhonebook = persons.find(person => (person.name === newPersonName))
    const newPersonNumber = newNumber.trim()

    const person = {
      name: newPersonName,
      number: newPersonNumber
    }

    if(newPersonName === '' || newPersonNumber === ''){
      alert(`One of the fields is missing`)
    } 
    else if(personInPhonebook){
      if (window.confirm(`${personInPhonebook.name} is already added to phonebook, replace the old number with a new one?`)) { 
        personService
        .update(personInPhonebook.id, person)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== personInPhonebook.id ? person : returnedPerson))
          
          setNewName('')
          setNewNumber('')
         })
      }
    } else {
      personService
      .create(person)
      .then(returnedPerson => {

        setSuccessMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => setSuccessMessage(null), 5000)


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
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
       })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage}/>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
    
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} removePerson={removePerson}/>
    </div>
  )
}

export default App