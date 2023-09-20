import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section about">
        <h3>About</h3>
        <p>Your About content goes here.</p>
      </div>

      <div className="footer-section quick-links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bollywood">Bollywood</NavLink>
          </li>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
          <li>
            <NavLink to="/hollywood">Hollywood</NavLink>
          </li>
          <li>
            <NavLink to="/fitness">Fitness</NavLink>
          </li>
          <li>
            <NavLink to="/food">Food</NavLink>
          </li>
         
        </ul>
      </div>

      <div className="footer-section details">
        <h3>Details</h3>
        <p>Your Details content goes here.</p>
      </div>

      <div className="footer-section social-media">
        <h3>Social Media</h3>
        <div>
              <FaFacebook className='icons facebook' />
              <FaTwitter className='icons twitter' />
              <FaInstagram className='icons instagram' />
              <FaYoutube className='icons youtube' />
              <FaGithub className='icons github' />         
            </div>
      </div>
    </div>
  );
};

export default Footer;
