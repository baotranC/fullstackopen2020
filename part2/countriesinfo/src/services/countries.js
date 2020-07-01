import axios from 'axios'

const apiCountries = 'https://restcountries.eu/rest/v2/all'

const getAllCountries = () => {
    const req = axios.get(apiCountries)
    return req.then(res => res.data)
  }
  
  export default { getAllCountries }