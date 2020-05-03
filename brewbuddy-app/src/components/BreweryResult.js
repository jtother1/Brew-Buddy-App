import React, { Component } from "react";

class BreweryResult extends Component {
  render() {
    const { brewery, saved, toggleSave } = this.props;
    return (
      <div>
        <h3>{brewery.name}</h3>
        <p>Brewery Type: {brewery.brewery_type}</p>
        <p>
          {brewery.city}, {brewery.state}
        </p>
        <p>{brewery.street}</p>
        <p>{brewery.website_url}</p>
        <input onChange={toggleSave} type="checkbox" checked={saved} />
      </div>
    );
  }
}

export default BreweryResult;
