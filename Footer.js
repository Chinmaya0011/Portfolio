import React from 'react';
import './Footer.css';

import facebookIcon from './fb.jpg'; 
import instagramIcon from './instagram.jpg'; 
import emailIcon from './mail.jpg'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="feedback-form">
        <h3>Contact Us</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="mailto:example@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <div className="contact-me">
          <p>Contact Me</p>
          <p>Name: Chinmay Kumar Mishra</p>
          <p>Email: imchinu17@gmail.com</p>
          <p>Phone: 7077835119</p>
          <p>Address: Bhubaneswar, Odisha</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
