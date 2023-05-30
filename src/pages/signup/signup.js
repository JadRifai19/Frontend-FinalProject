import axios from "axios";
import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const navigate = useNavigate()

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  })

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleRegisterChange = (e) => {
    const value = e.target.value;
    setRegister({ ...register, [e.target.name]: value });
  };

  const handleLoginChange = (e) => {
    const value = e.target.value;
    setLogin({ ...login, [e.target.name]: value });
  }
  const handleSignup = async (e) => {
    e.preventDefault();
    const registerForm = {
      username: register.username,
      email: register.email,
      password: register.password,
    };
 
    try {
      const response = await axios.post(
        "http://localhost:5000/User/users",
        registerForm
      );
      console.log(response)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const loginform = {
      email: login.email,
      password: login.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/User/users/login",
        loginform
      );

      console.log(response)
      navigate('/')
    } catch (e) {
      console.log(e)
    }
  };
  return (
      <div className="sign-up-form-photo">
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${activeTab === "signup" ? "active" : ""}`}>
          <button onClick={() => handleTabChange("signup")}>Sign Up</button>
        </li>
        <li className={`tab ${activeTab === "login" ? "active" : ""}`}>
          <button onClick={() => handleTabChange("login")}>Log In</button>
        </li>
      </ul>

      <div className="tab-content">
        <div
          id="signup"
          style={{ display: activeTab === "signup" ? "block" : "none" }}
        >
          <h1>Sign Up for Free</h1>

          <form onSubmit={handleSignup}>
            <div className="top-row">
              <div className="field-wrap">
                <label>
                  <span className="req"></span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  required
                  autoComplete="off"
                  onChange={handleRegisterChange}
                />
              </div>
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                autoComplete="off"
                onChange={handleRegisterChange}
              />
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="password"
                name="password" 
                placeholder="Set A Password"
                required
                autoComplete="off"
                onChange={handleRegisterChange}

              />
            </div>

            <button type="submit" className="button button-block">
              Get Started
            </button>
          </form>
        </div>

        <div
          id="login"
          style={{ display: activeTab === "login" ? "block" : "none" }}
        >
          <h1>Welcome Back!</h1>

          <form onSubmit={handleLogin}>
            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                autoComplete="off"
                onChange={handleLoginChange}
              />
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="off"
                onChange={handleLoginChange}
              />
            </div>
            <button className="button button-block" type="submit">Log In</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default function SignUp() {
  return <SignUpForm />;
}
