import React, { Component } from 'react';
import queryString from 'query-string';

class Results extends Component {
    componentWillMount(){
        const parsed = queryString.parse(window.location.search);
        console.log(parsed);
        //get query and page from query perams after ?
        const query = window.location.search //stripping ?q= off searchstring

        //make a fetch request when page loads
        // fetch(`https://api.openbrewerydb.org/breweries/search${query}`)
        const url = `https://api.openbrewerydb.org/breweries/search${query}`
        console.log(url);
        fetch(url)
      .then((response) => response.json())
      .then((breweries) => {
        // let newBrewery = response.bpi[name];
        console.log(breweries);
        this.setState({ breweries: breweries });
      })
      .catch((err) => {
        console.error(err);
      });

        //replace texas with query with whatever our query is equal to

        //use backticks and look at searchform.js ex

        //add pages to query
    }
    render(){
        return (
            <h1>Results</h1>
        );
    }
}






export default Results;