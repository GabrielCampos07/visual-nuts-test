import axios from "axios"

async function getCountries() {

    let _res = await axios.get('http://localhost:3000/countries')

    let _data = _res.data;

    return _data
}

export default getCountries