import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import MyList from "./pages/MyList";
import Home from "./pages/Home";
import Results from "./pages/Results";



class App extends React.Component {
  state = {
    savedBreweries: [],
  };
//want a function to run when the app starts
componentDidMount() {
  //check local storage for saved breweries
  const localStorageBreweries = localStorage.getItem('breweries')
  if (localStorageBreweries){
    //turns local storage breweries back into an array
    const savedBreweries = JSON.parse(localStorageBreweries)
    this.setState({savedBreweries})
  }

}
toggleSave(brewery) {
  const savedBreweriesIds = this.state.savedBreweries.map(brew => {
    return brew.id
  }) 
  if (savedBreweriesIds.includes(brewery.id)) {
    const filteredBreweries = this.state.savedBreweries.filter(brew => {
      return brew.id !== brewery.id
      
    })
    //puts items in storage/my list
    this.setState({savedBreweries: filteredBreweries})
    localStorage.setItem('breweries', JSON.stringify(filteredBreweries))

  } else {
    const breweries = [...this.state.savedBreweries,brewery]
    this.setState({savedBreweries: breweries})
    localStorage.setItem('breweries', JSON.stringify(breweries))
  }
}
  render() {
    const { savedBreweries } = this.state;
    
    return (
      <div className="App">
        <Router>
          <nav className="nav">
            <Nav />
          </nav>
          <Switch>
            <Route exact path="/">
              <Home 
              savedBreweries={savedBreweries}
              toggleSave={this.toggleSave.bind(this)}/>
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/mylist">
              <MyList 
              savedBreweries={savedBreweries}
              toggleSave={this.toggleSave.bind(this)}/>
            </Route>

            <Route path="/results">
              <Results 
              savedBreweries={savedBreweries}
              toggleSave={this.toggleSave.bind(this)}/>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
