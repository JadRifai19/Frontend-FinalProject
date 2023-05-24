import React, { useState } from 'react';
import './signup.css';

const SignUpForm = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform signup logic using the form data (firstName, lastName, email, password)
    console.log('Sign up form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic using the form data (email, password)
    console.log('Login form submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return ( 
    <div className="form">
      <ul className="tab-group">
        <li className={`tab ${activeTab === 'signup' ? 'active' : ''}`}>
          <button onClick={() => handleTabChange('signup')}>Sign Up</button>
        </li>
        <li className={`tab ${activeTab === 'login' ? 'active' : ''}`}>
          <button onClick={() => handleTabChange('login')}>Log In</button>
        </li>
      </ul>

      <div className="tab-content">
        <div id="signup" style={{ display: activeTab === 'signup' ? 'block' : 'none' }}>
          <h1>Sign Up for Free</h1>

          <form onSubmit={handleSignUp}>
            <div className="top-row">
              <div className="field-wrap">
                <label>
                  <span className="req"></span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  autoComplete="off"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="field-wrap">
                <label>
                  <span className="req"></span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  autoComplete="off"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="password"
                placeholder="Set A Password"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="button button-block">
              Get Started
            </button>
          </form>
        </div>

        <div id="login" style={{ display: activeTab === 'login' ? 'block' : 'none' }}>
          <h1>Welcome Back!</h1>

          <form onSubmit={handleLogin}>
            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input
                type="password"
                placeholder="Password"
                required
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <p className="forgot">
              <a href="/login">Forgot Password?</a>
            </p>

            <button className="button button-block">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function SignUp() {
  return <SignUpForm />;
}
