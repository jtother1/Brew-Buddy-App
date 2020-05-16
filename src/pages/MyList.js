import React from "react";
import BreweryResult from '../components/BreweryResult';

export default class MyList extends React.Component {
  render() {
    const { savedBreweries, toggleSave } = this.props;
    return (
      <div>
        <h2>My List</h2>
        <div className="results-container">
          {savedBreweries.map((brew) => {//maps through the checked and unchecked to see if they are saved('true') then adds them to my list
            return <BreweryResult key={brew.id} saved={true} brewery={brew} toggleSave={() => toggleSave(brew)}/>;//toggle on check or uncheck box
          })}
        </div>
      </div>
    );
  }
}

export default MyList;