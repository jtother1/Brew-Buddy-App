import axios from 'axios';

const breweryApi = axios.create({
    baseURL: 'https://api.openbrewerydb.org/breweries'
})
export default {
    getSearchResults(query) {
        return breweryApi.get(`/search${query}`)
    }
}