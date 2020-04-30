import React, { Component } from "react";
import SearchForm from '../components/SearchForm';

class Home extends Component {
    render(){
        return(
            <div>
                <SearchForm />
          <h2>Welcome to Brew-Buddy</h2>
          <p>
            Please feel free to search for breweries by type, name, state, and
            city. When search is made you can save breweries to "My List" so the
            next time you want to explore a new brew you will have a plan.
          </p>
        </div>

        );
    }
}

export default Home;
