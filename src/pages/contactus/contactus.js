import React from 'react'
import './contactus.css';

export default function contactus() {
  return (
    <div className='contact-us'>
      <div class="cont">
  <h1>
    <span class="red-contact-us">C</span> 
     ontact 
    <span class="red-contact-us">U</span>
    s
  </h1>
  <div class="contact">

    <input type="text" 
           class="c1"
           placeholder="First name *" />

    <input type="text"
           class="c2"
           placeholder="Last name *" />

    <input type="email"
           class="c3"
           placeholder="Email address *" />

    <textarea class="c4"
              placeholder="Message" ></textarea>

    <button className='btnnav' > send </button>

  </div>
</div>
    </div>
  )
}
