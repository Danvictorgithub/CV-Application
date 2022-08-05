import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import CVPaper from './components/CVPaper';
class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      personalInfoFetch: [],
      personalInfo: {
        fName:'',
        lName:'',
        email:'',
        pNumber:'',
        residence:''
      },
    }
  }
  async handleChange(e) {
    await this.setState({
      personalInfo:{...this.state.personalInfo,[e.target.id]: e.target.value}
    });
    await console.log(this.state.personalInfo);
  }
  render() {
    const {handleChange} = this;
    const {fName, lName, email, pNumber,residence} = this.state.personalInfo;
    return(
      <div className="container">
        <Navbar />
        <Form firstName={handleChange} lastName={handleChange} email={handleChange} residence={handleChange} number={handleChange}/>
        <CVPaper Name={`${fName} ${lName}`} Residence={residence} Email={email} PNumber={pNumber}/>
      </div>
    )
  }
}

export default App;
