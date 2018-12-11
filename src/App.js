import React, { Component } from 'react';
import './App.css';
import Content from './components/Content.js';
import './index.css';
import Snow from './components/Snow.js';
import Projects from './components/Projects.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = false;
  }

  // get state to change between true and false when project link is clicked and have a ternery to display projects instead of content if true
  
  render() {

    return ( 
      <>
        <Snow />
        <Content />
        <Projects />
      </>
    );
  }
}

export default App;