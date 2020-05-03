import React, { Component } from "react";
import queryString from "query-string";
import SearchForm from "../components/SearchForm";
import BreweryResult from "../components/BreweryResult";
import breweryApi from '../BreweryApi';

class Results extends Component {
  state = {
    breweries: [],
  };
  componentWillMount() {
    const parsed = queryString.parse(window.location.search);
    console.log(parsed);
    //get query and page from query perams after ?
    const query = window.location.search; //stripping ?q= off searchstring

    //make a fetch request when page loads
    // fetch(`https://api.openbrewerydb.org/breweries/search${query}`)
    breweryApi.getSearchResults(query).then(response => {
        const breweries = response.data
        this.setState({breweries: breweries});
    })

  }
  render() {
    return (
      <div>
        <SearchForm />
        <h1>Results</h1>
        <div className="results-container">
          {this.state.breweries.map((brew) => {
            return <BreweryResult key={brew.id} brewery={brew} />;
          })}
        </div>
        
      </div>
    );
  }
}

export default Results;
