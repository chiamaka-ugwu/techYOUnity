import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../assets/images/img1.png";
import "./about.css";
import friends from "../../assets/images/people.png";

const AboutUs = () => {
  return (
    <>
      <div className="home home2">
        <div className="home-content about">
          <div className="left">
            <h1>
              Genuiness comes
              <br /> <span className="excel">in different shades</span>
            </h1>
            <p>
              If you are tired of being comfortable, If you lack confidence in
              your future as a techie. If you are done lagging behind others...
              stop worrying inside TechYOUnity. Your geuniness will grow by
              connecting with growth minded, passionate people. It's your
              community. <span className="bold">Are you ready for growth?</span>
            </p>
            <a href="https://forms.gle/WiPf4xBCid5SrN9eA" className="join">
              Join the Community{" "}
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
          <div className="right">
            <img src={image} alt="image" />
          </div>
        </div>
      </div>

      <div className="about-us">
        <div className="about-content">
          <h3>About Us</h3>
          <h2>
            Our Differences <br className="br" />
            <span className="excel">makes us stronger</span>
          </h2>
          <p>
            The Notion of Tech being the easy way out has put many people in
            situations beyond their control as the gap between starting out in
            tech and becoming successful in Tech is very wide. In between this
            gap comes a lot of confusion, sacrifices, misconceptions, obstacles,
            principles to be learned, fears, perseverance, setbacks, unlearning,
            learning and relearning, etc. <br /> <br />
            But don't panic, techYOUnity has been designed to bridge the gap. We
            are set up to be a pillar that you can lean on as you embark on the
            journey to be an EXCELLENT TECHIE. Join our vehicle, we would drive
            you through the potholes and roadblocks to take you to the land of
            EXCELLENT TECHIES.
          </p>
        </div>
      </div>
      <div className="img-cont">
        <img src={friends} alt="friends" />
      </div>
    </>
  );
};

export default AboutUs;
