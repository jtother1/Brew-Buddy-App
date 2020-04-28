import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";

function App() {
  return (
    <div className= 'App'>
      <nav class="nav">
        <Nav />
      </nav>
      <SearchForm />
    </div>
  );
}

export default App;
