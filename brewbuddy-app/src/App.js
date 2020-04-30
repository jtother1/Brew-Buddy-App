import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import About from "./pages/About";
import MyList from "./pages/MyList";
import Home from "./pages/Home";
import Results from "./pages/Results";

const BrewURL = "https://api.openbrewerydb.org/breweries";

class App extends React.Component {
  state = {
    name: " ",
    brewery_type: " ",
    city: " ",
    state: " ",
    breweries: [],
  };
  componentDidMount() {
    // const brewery = this.props.match.params.id.name;
    const url = `${BrewURL}/`;

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
  }
  render() {
    return (
      <div className="App">
        <Router>
          <nav className="nav">
            <Nav />
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/about" component={About} />

            <Route path="/mylist" component={MyList} />
            <Route path="/results" component={Results}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
