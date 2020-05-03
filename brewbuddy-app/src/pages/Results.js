import React, { Component } from "react";
import queryString from "query-string";
import SearchForm from "../components/SearchForm";
import BreweryResult from "../components/BreweryResult";
import breweryApi from "../BreweryApi";
import { Redirect } from "react-router-dom";

class Results extends Component {
  state = {
    breweries: [],
    page: 1,
    searchTerm: "",
    redirectTo: "",
  };
  goToNextPage() {
    // to={`/results?query=${this.state.searchTerm}&per_page=20&page=${this.state.page+1}`}>Next Page
    const query = `?query=${this.state.searchTerm}&per_page=20&page=${
        this.state.page + 1
      }`
    const url = `/results${query}`;
    this.setState({ redirectTo: url });
    this.getSearchResults(query)
  }
  getSearchResults(query) {
    

    //make a fetch request when page loads
    // fetch(`https://api.openbrewerydb.org/breweries/search${query}`)
    breweryApi.getSearchResults(query).then((response) => {
      const breweries = response.data;
      this.setState({ breweries: breweries });
    });

  }

  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    console.log('COMPONENT MOUNTED');
    console.log(parsed);
    this.setState({ page: parseInt(parsed.page), searchTerm: parsed.query });
    //get query and page from query perams after ?
    const query = window.location.search; //stripping ?q= off searchstring
    this.getSearchResults(query)
    
  }
  render() {
    const { savedBreweries, toggleSave } = this.props;
    const savedIds = savedBreweries.map((brewery) => {
      return brewery.id;
    });
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return (
      <div>
        <SearchForm />
        <h1>Results</h1>
        <div className="results-container">
          {this.state.breweries.map((brew) => {
            const isSaved = savedIds.includes(brew.id);
            return (
              <BreweryResult
                key={brew.id}
                brewery={brew}
                saved={isSaved}
                toggleSave={() => toggleSave(brew)}
              />
            );
          })}
        </div>
        <button onClick={this.goToNextPage.bind(this)}>Go to Next Page</button>
      </div>
    );
  }
}

export default Results;
