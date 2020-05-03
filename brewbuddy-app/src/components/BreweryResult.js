import React, { Component } from "react";

class BreweryResult extends Component {
    state = {
        saved: true,
        unSaved: false,
    }
    checkhandler() {
        console.log(this.props.brewery.id);
    }
  render() {
    return (
      <div>
        <h3>{this.props.brewery.name}</h3>
        <p>Brewery Type: {this.props.brewery.brewery_type}</p>
    <p>{this.props.brewery.city}, {this.props.brewery.state}</p>
    <p>{this.props.brewery.street}</p>
    <p>{this.props.brewery.website_url}</p>
        <input onChange={this.checkhandler.bind(this)} type="checkbox" Checked={this.state.saved} unchecked={this.state.unSaved}/>
      </div>
    );
  }
}

export default BreweryResult;
