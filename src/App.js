import React from 'react';
import Navbar from './components/NavBar/NavBar.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/home.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
}

export default App;