import React, { useState } from "react";
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
import ShoppingCart from './components/shoppingcart/shoppingcart';
import Training from "./pages/training/training.js";

function App() {
  const [shoppingcart, setshoppingcart] = useState([]);

  return (
    <Router>
      <Navbar shoppingcart={shoppingcart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping shoppingcart={ShoppingCart} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/teamtraining" element={<TeamTraining />} />
        <Route path="/privatetraining" element={<PrivateTraining />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='/training' element={<Training />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
