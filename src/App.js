import React, { Component } from 'react';
import './App.css';
import testlib from '../../lib/testlib'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Testing some changes {testlib()}</h2>
        </div>
      </div>
    );
  }
}

export default App;
