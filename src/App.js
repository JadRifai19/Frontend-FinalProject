import React from "react";
import Navbar from "./components/NavBar/NavBar.js";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
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
      {/* <Home /> */}
      {/* <Shopping />  */}
      {/* < TeamTraining /> */}
      {/* <PrivateTraining/> */}
      <ContactUs/>
      {/* <SignUp /> */}
      <Footer /> 
    </Router>
  );
}

export default App;