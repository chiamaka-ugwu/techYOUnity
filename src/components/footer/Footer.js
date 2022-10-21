import React from "react";
import "../navbar/nav.css";
import "./footer.css";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/logo2.png";
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
            <img src={logo} alt="logo" className="logo1" />
            <img src={logo2} alt="logo" className="logo2" />
          </Link>
          <ul className="links">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5jAgSXzPiyoVU5H0vt2D6cjZ8loSrSJ2QXP6n0mE8NmeS-g/viewform">Join Us</a>
            <a href="mailto:techyounity@gmail.com">Partner with us</a>
            <a href="mailto:techyounity@gmail.com">Donate</a>
            <a href="mailto:techyounity@gmail.com">Contact Us</a>
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
            <a href="https://facebook.com/groups/5438774412866822/">
              <FontAwesomeIcon icon={faFacebook} className="icon2" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
