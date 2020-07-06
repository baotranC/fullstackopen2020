import React from 'react'
import DisplayCountry from './DisplayCountry'

const DisplayCountries = ({countriesToShow, toggleShow}) => {

    const lenCountries = countriesToShow.length 
    if(lenCountries > 10){
        return <div>Too many matches, specify another filter</div>
    } else if (lenCountries <= 10 && lenCountries > 1){
        
        return(
            <ul>
                {countriesToShow.map(country => <li key={country.alpha2Code}>{country.name} 
                <button onClick={() => toggleShow(country.name)}>show</button> </li>)}
            </ul>
        )
    } else if (lenCountries === 1){
        const country = countriesToShow[0]

        return(
            <DisplayCountry country={country}/>
        )
    } else {
        return <div>No country matches this filter</div>
    } 
}

export default DisplayCountries

    