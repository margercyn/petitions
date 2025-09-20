// src/footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter,
     FaLinkedinIn, FaInstagram, FaYoutube, 
     FaPinterestP, FaSkype, FaRss } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Логотип */}
        <div className="footer-logo">
        </div>

        {/* Соцсети */}
        <div className="footer-socials">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaPinterestP /></a>
          <a href="#"><FaSkype /></a>
          <a href="#"><FaRss /></a>
        </div>
      </div>

      <div className="footer-main">
        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">List Layout</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>3015 Grand Ave, Coconut Grove,<br/> Merrick Way, FL 12345</p>
          <p>📞 +123-456-789</p>
          <p>✉ sales@example.com</p>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Remain Updated</h4>
          <form className="footer-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
