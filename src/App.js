import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  // loads when the app load
  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <Navbar /* title='Github Finder' icon='fab fa-github'*/ />
        <div className='container '>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
