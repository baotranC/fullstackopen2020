import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  
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

  const handleFilterChange = (event) => {
    const filter = event.target.value

    console.log(filter)
    setNewFilter(filter)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      
      <form>
        <div>
            filter shown with:
            <input 
              value={newFilter} 
              onChange = {handleFilterChange}  
            />
          </div>
      </form>

      <h2>add a new</h2>
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
        {contactToShow.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App