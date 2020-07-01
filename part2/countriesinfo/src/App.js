import React, {useState, useEffect} from 'react';
import countriesService from './services/countries'
import DisplayCountries from './components/DisplayCountries'

const App = () => {


  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')


  useEffect(
    () => {countriesService.getAllCountries().then(data => {
    setCountries(data)
  } )}, [])
    
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const countriesToShow = countries.filter(country =>country.name.toLowerCase().includes(newFilter.trim().toLowerCase()))
  
  return (
    <div>
      <form>
      <div>find countries
        <input 
          value={newFilter}
          onChange={handleFilterChange}
        />
      </div>
      </form>
      <DisplayCountries countriesToShow = {countriesToShow} />
    </div>
  )
}

export default App;
