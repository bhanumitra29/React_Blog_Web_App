import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGithub, FaPhone, FaMailBulk} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mainparentfooter'>
    <div className="footer">
      <div className="footer-section social-media">
        <h3>FOLLOW US</h3>
        <div>
              <FaFacebook className='icons facebook' />
              <FaTwitter className='icons twitter' />
              <FaInstagram className='icons instagram' />
              <FaYoutube className='icons youtube' />
              <FaGithub className='icons github' />         
            </div>
      </div>

      <div className="footer-section about">
        <h3>CONTACT US</h3>
        <p><FaPhone /> +91-7969 0011 21</p>
        <p><FaMailBulk /> support@abc1234.com</p>
      </div>
      <div className="footer-section quick-links">
      <h3>Quick Links</h3>
        
        <div className='dividelinks'>
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
          </ul>
          </div>
          <div>
          <ul>
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
      </div>

      

     
    </div>
    {/* <hr className='lasthr1'/> */}
    <div className='policies'>
        <div><p>Copyright©2023</p></div>
        <div>
        <p>Privacy | PolicyRefund | PolicyTerms of Use</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
