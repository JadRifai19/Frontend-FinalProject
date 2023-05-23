import React, { useState } from 'react';
import './signup.css';

const SignUpForm = () => {
  const [activeTab, setActiveTab] = useState('signup');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
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

          <form action="/" method="post">
            <div className="top-row">
              <div className="field-wrap">
                <label>
                  <span className="req"></span>
                </label>
                <input type="text" placeholder="First Name" required autoComplete="off" />
              </div>

              <div className="field-wrap">
                <label>
                  <span className="req"></span>
                </label>
                <input type="text" placeholder="Last Name" required autoComplete="off" />
              </div>
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input type="email" placeholder="Email Address" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input type="password" placeholder="Set A Password" required autoComplete="off" />
            </div>

            <button type="submit" className="button button-block">
              Get Started
            </button>
          </form>
        </div>

        <div id="login" style={{ display: activeTab === 'login' ? 'block' : 'none' }}>
          <h1>Welcome Back!</h1>

          <form action="/" method="post">
            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input type="email" placeholder="Email Address" required autoComplete="off" />
            </div>

            <div className="field-wrap">
              <label>
                <span className="req"></span>
              </label>
              <input type="password" placeholder="Password" required autoComplete="off" />
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
