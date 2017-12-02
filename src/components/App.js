import React, { Component } from 'react'
import { Main } from './main'
import './App.css'
const logo = require('../assets/logo.png')

class App extends Component {
  render() {
    return ( 
       <Main className={"main"} />
    );
  }
}

export default App;
