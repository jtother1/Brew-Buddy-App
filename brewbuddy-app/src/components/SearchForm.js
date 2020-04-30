import React from "react";
import {Redirect} from 'react-router';

class SearchForm extends React.Component {
  state = {
    searchSuggestions:[],
    searchString: "Texas",
    goToResults: false,

  }
  //when the searchstring changes filter the breweries
  handleInput(e) {
    const searchString = e.target.value
    this.setState({searchString})
    // console.log(this.state.searchString);
    // const filteredResults = this.props.breweries.filter(brewery => {
    //   if(brewery.name.toUpperCase().includes(searchString.toUpperCase())){
    //     return true
    //   }
    //   return false
    // })
    // console.log(filteredResults);
    // this.setState({searchSuggestions:filteredResults})
    

  }

  render() {
    if(this.state.goToResults) {
      return <Redirect to={`/results?query=${this.state.searchString}&per_page=20&page=1`}/>
    }
    return (
      <form className="form-horizontal">
        <input placeholder="Search" type="text" onChange={this.handleInput.bind(this)} value={this.state.searchString} />
        <button onClick={() => this.setState({goToResults:true})} type="submit">Search</button>
        <p>{this.state.searchString}</p>
        <ul>
          {this.state.searchSuggestions.map(suggestion => {
            return <li key={suggestion.id}>{suggestion.name}</li>
          })}
        </ul>
      </form>
    );
  }
}

export default SearchForm;
