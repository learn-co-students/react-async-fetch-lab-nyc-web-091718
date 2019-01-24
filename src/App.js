import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json)
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }

}

export default App;
