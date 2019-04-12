import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Content from './components/Content.js';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {

    return ( 
      <div>
        <Nav />
        <Content />
      </div>
    )
  }
}

export default App;