import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar.js";
import "./App.css";
import Home from "./pages/home/home.js";
import Footer from "./components/footer/footer.js";
import Shopping from "./pages/shopping/shopping.js";
import SignUp from './pages/signup/signup.js';
import TeamTraining from './pages/teamtraining/teamtraining.js';
import PrivateTraining from './pages/privatetraining/privatetraining.js';
import ContactUs from './pages/contactus/contactus.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teamtraining" element={<TeamTraining />} />
        <Route path="/privatetraining" element={<PrivateTraining />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
