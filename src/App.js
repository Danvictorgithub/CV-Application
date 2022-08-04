import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
class App extends Component {
  constructor() {
    super();
  }
  render() {
    return(
      <div className="container">
        <Navbar />
        <Form />
      </div>
    )
  }
}

export default App;
