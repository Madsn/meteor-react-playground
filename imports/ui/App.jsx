import React, {Component} from 'react';
import Navbar from './navbar/Navbar.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>App component</h1>
      </div>
    );
  }
}
