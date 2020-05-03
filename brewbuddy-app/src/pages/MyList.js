import React from "react";

export default class MyList extends React.Component {
  render() {
    const { brewery, savedBreweries, toggleSave } = this.props;
    return (
      <div>
        <h3>{savedBreweries}</h3>
        <input type="checkbox" checked={savedBreweries} onChange={toggleSave} />
      </div>
    );
  }
}