import React from 'react'

const DisplayCountry = ({country}) => {
    console.log('=> ',country)
    return(
        <div>
            <h1>{country.name}</h1>
            capital {country.capital}<br/>
            population {country.population}
        
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.iso639_1}>{language.name}</li>)}
            </ul>
            <img 
                src={country.flag} 
                alt='flag'
                width="200" 
                height="100"
                />
        </div>
    )
}

export default DisplayCountry