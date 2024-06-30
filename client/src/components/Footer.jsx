import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-bottom">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/ashish-singh-294359256"
            target="_blank"
            rel="noreferrer"
          > 
          Ashish Singh </a>
          <a
            href="https://www.linkedin.com/in/bhawani-shankar-sarswat-45921b19b"
            target="_blank"
            rel="noreferrer"
          > 
          |
          Bhawani Shankar Sarswat </a>
          <a
            href="https://www.linkedin.com/in/arpit-singh-689623255/"
            target="_blank"
            rel="noreferrer"
          >
            |
          Arpit Singh
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
};

export default Footer;