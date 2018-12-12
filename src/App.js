import React, { Component } from 'react';
import './App.css';
import Content from './components/Content.js';
import './index.css';
import Snow from './components/Snow.js';
import Projects from './components/Projects.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: false
    }
  }
  
  render() {
    
const handleClick = (e) => {
        e.preventDefault();
        if (this.state.projects === false) {
          this.setState({
            projects: true
          })
        } else {
          this.setState({
            projects: false
          })
        }
      }

      // this.handleClick.bind(this)
    return ( 
      <>
        <Snow />
        {this.state.projects === false ? <Content handleClick={handleClick} /> : <Projects handleClick={handleClick}/>}
      </>
    )
  }
}

export default App;