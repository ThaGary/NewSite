import React, { Component } from 'react';
import './App.css';
import Content from './components/Content.js';
import './index.css';
import Snow from './components/Snow.js';


class App extends Component {
  render() {

    return ( 
      <>
        <Snow />
        <Content />
      </>
    );
  }
}

export default App;