import React, { Component } from "react";
import SearchForm from "../components/SearchForm";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h2>Welcome to Brew-Buddy</h2>
        <p>
          Please feel free to search for breweries by type, name, state, and
          city. When search is made you can save breweries to "My List" by clicking a check on the box underneath a result. The
          next time you want to explore a new brew you will have a plan.
        </p>
        <SearchForm />
      <img src="https://media.giphy.com/media/3o85xjSETVG3OpPyx2/giphy.gif"></img>
      </div>
    );
  }
}

export default Home;
