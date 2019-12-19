import React from 'react';
import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Routes/>
      </div>
    </Router>
  );
}
export default App;