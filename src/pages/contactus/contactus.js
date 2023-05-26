import React from 'react'
import './contactus.css';

export default function contactus() {
  return (
    <div className="sign-up-form-photo">
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form>
        <div className="field-wrap-contact-us-page">
          <label htmlFor="name"></label>
          <input placeholder='Name' type="text" id="name" />
        </div>

        <div className="field-wrap-contact-us-page">
          <label htmlFor="email"></label>
          <input placeholder='Email' type="email" id="email" />
        </div>

        <div className="field-wrap-contact-us-page">
          <label htmlFor="message"></label>
          <textarea placeholder='Message' id="message" rows="6"></textarea>
        </div>

        <button type="submit" className="button button-block">
          Send Message
        </button>
      </form>
    </div>
    </div>
  )
}
