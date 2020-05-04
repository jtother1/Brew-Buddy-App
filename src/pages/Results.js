import React, { useState, useEffect } from "react";
import queryStringParser from "query-string";
import SearchForm from "../components/SearchForm";
import BreweryResult from "../components/BreweryResult";
import breweryApi from "../BreweryApi";
import { useHistory, Link } from "react-router-dom";

export default function Results({ savedBreweries, toggleSave }) {
  // Set up two items in state

  // breweries array, and the function to set it
  const [breweries, setBreweries] = useState([]);

  // page number, and the function to set it
  const [pageNumber, setPageNumber] = useState(1);

  // search term
  const [searchTerm, setSearchTerm] = useState("");

  // function that will fetch breweries based off of what is in the query of our URL (?query=texas&page=2)
  function fetchBreweries() {
    const query = window.location.search;
    breweryApi.getSearchResults(query).then((response) => {
      const breweries = response.data;
      setBreweries(breweries);
    });
  }

  // function that initializes the state
  function initializeState() {
    const queryParameters = queryStringParser.parse(window.location.search);
    const { page, query } = queryParameters;

    // example: turns "2" into 2
    // "2" + 1 = "21", 2 + 1 = 3
    const pageInt = parseInt(page);

    setPageNumber(pageInt);
    setSearchTerm(query);
    fetchBreweries();
  }

  // useEffect: Hook from react, runs once when component loads, then whenever a dependency changes
  //useEffect(/* function to run */ , /* array of dependencies */)
  // This runs once when the page loads
  useEffect(() => {
    initializeState();
  }, []);

  // custom useHistory hook from react-router-dom
  // can use this to "listen" for the url to change
  const history = useHistory();

  // Run the initializeState code whenever the URL changes
  history.listen(initializeState);

  // make array of saved ids for checking if a brewery has been saved or not
  const savedIds = savedBreweries.map((brewery) => {
    return brewery.id;
  });

  return (
    <div>
      <SearchForm />
      <h1>Results</h1>
      <div className="results-container">
        {breweries.map((brew) => {
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
      {pageNumber > 1 ? (
        <Link
          to={`/results?query=${searchTerm}&per_page=20&page=${pageNumber - 1}`}
        >
          last
        </Link>
      ) : null}
      {pageNumber}
      <Link
        to={`/results?query=${searchTerm}&per_page=20&page=${pageNumber + 1}`}
      >
        next
      </Link>
    </div>
  );
}
