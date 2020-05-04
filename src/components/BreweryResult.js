import React, { Component } from "react";

class BreweryResult extends Component {
  render() {
    //just makes things clearer by eliminating this.props
    const { brewery, saved, toggleSave } = this.props;
    //all the info displayed in search results
    return (
      <div>
        <h3>{brewery.name}</h3>
        <p>Brewery Type: {brewery.brewery_type}</p>
        <p>Address: {brewery.street}</p>
        <p>
          {brewery.city}, {brewery.state}
        </p>
        <p>{brewery.website_url}</p>
        <input onChange={toggleSave} type="checkbox" checked={saved} />
      </div>
    );
  }
}

export default BreweryResult;
