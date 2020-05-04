import axios from 'axios';
const breweryApi = axios.create({
    //Axios creates reusable instances with baseUrl
    baseURL: 'https://api.openbrewerydb.org/breweries'
})
export default {
    getSearchResults(query) {
        //query what will be displayed in url
        return breweryApi.get(`/search${query}`)
    }
}