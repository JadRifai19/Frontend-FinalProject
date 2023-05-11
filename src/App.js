import React from 'react';
import Navbar from './components/NavBar/NavBar.js';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/home.js';
import Footer from './components/footer/footer.js';
import Shopping from './pages/shopping/shopping.js';


function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      {/* <Footer /> */}
      <Shopping />
    </Router>
  );
}

export default App;