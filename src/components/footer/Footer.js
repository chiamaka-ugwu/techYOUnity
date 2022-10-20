import React from "react";
import "../navbar/nav.css";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="links">
            <Link to="/">Join Us</Link>
            <Link to="/">Partner with us</Link>
            <Link to="/">Donate</Link>
            <Link to="/">Contact Us</Link>
          </ul>
          <div className="socials">
            <a href="https://twitter.com/tech_YOUnity?t=Kd9afI0pI4zz_QUwu5AmYw&s=08">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/techyounity-making-an-excellent-techie-45a769252">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
            <a href="https://instagram.com/techyounity?igshid=YmMyMTA2M2Y=">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faFacebook} className="icon2" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
