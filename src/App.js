// src/App.js
import React from 'react';
import { BrowserRouter as Router,} from 'react-router-dom';
import Navbar from './components/Navbar';
import Path from './Path';

function App() {
  return (
    <Router>
      <Navbar />
     <Path/>
    </Router>
  );
}

export default App;
