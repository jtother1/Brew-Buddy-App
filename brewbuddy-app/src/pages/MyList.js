import React from "react";
import BreweryResult from '../components/BreweryResult';

export default class MyList extends React.Component {
  render() {
    const { savedBreweries, toggleSave } = this.props;
    return (
      <div>
        <h3>My List</h3>
        <div className="results-container">
          {savedBreweries.map((brew) => {
            return <BreweryResult key={brew.id} saved={true} brewery={brew} toggleSave={() => toggleSave(brew)}/>;
          })}
        </div>
      </div>
    );
  }
}