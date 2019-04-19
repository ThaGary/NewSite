import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js'
import Content from './components/Content.js';
import Bio from './components/Bio.js';
import './index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Bio: false,
      Home: true
    }
  }
  
  render() {
    const handleClickBio = (e) => {
      e.preventDefault();
      if (this.state.Bio === false && this.state.Home === true) {
        this.setState({
          Bio: true,
          Home: false
        })
      }
    }
    const handleClickHome = (e) => {
      e.preventDefault();
      if (this.state.Bio === true && this.state.Home === false) {
        this.setState({
          Bio: false,
          Home: true
        })
      }
    }

    return ( 
      <div>
        <Nav handleClickBio={handleClickBio} handleClickHome={handleClickHome} />
        {this.state.Bio === false ? <Content /> : <Bio />}
      </div>
    )
  }
}

export default App;