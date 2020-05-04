import React from "react";
import { Redirect } from "react-router";

class SearchForm extends React.Component {
  state = {
    searchSuggestions: [],
    searchString: "",
    goToResults: false,
  };
  //when the searchstring changes filter the breweries
  handleInput(e) {
    const searchString = e.target.value;
    this.setState({ searchString });
  }

  render() {
    if (this.state.goToResults) {
      return (
        //this will always be the default url...and this is how brewerydb uses it
        <Redirect
          to={`/results?query=${this.state.searchString}&per_page=20&page=1`}
        />
      );
    }
    return (
      <form className="form-horizontal">
        <input
          placeholder="" //search area where you type
          type="text"
          onChange={this.handleInput.bind(this)}
          value={this.state.searchString}
        />
        <button
          onClick={() => this.setState({ goToResults: true })}
          type="submit"
        >
          Search
        </button>
        <p>{this.state.searchString}</p>
        <ul>
          {this.state.searchSuggestions.map((suggestion) => {//gets the info for search
            return <li key={suggestion.id}>{suggestion.name}</li>;
          })}
        </ul>
      </form>
    );
  }
}

export default SearchForm;
