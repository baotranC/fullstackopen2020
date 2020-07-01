import React from 'react'

const DisplayCountries = ({countriesToShow}) => {
    // console.log(countriesToShow)

    const lenCountries = countriesToShow.length 

    if(lenCountries > 10){
        return <div>Too many matches, specify another filter</div>
    } else if (lenCountries <= 10 && lenCountries > 1){
        return(
            <ul>
                {countriesToShow.map(country => <li key={country.alpha2Code}>{country.name}</li>)}
            </ul>
        )
    } else if (lenCountries === 1){
        const country = countriesToShow[0]

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
    } else {
        return <div>No country matches this filter</div>
    } 
}

export default DisplayCountries

    