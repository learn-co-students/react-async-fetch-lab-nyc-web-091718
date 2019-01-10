// import React from 'react';
import React, { Component } from 'react'

class App extends Component {

  state = {
    peopleInSpace: []
  }

  render(){
    return (
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
    </div>
    )
  }

  componentDidMount() {
    // this.fetchAllNames()
      fetch(`http://api.open-notify.org/astros.json`)
      .then(res => res.json())
      .then(data => {this.setState({peopleInSpace:data.people}, () => console.log(data.people))})
  }



}







export default App;

// create your App component here
