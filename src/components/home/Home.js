import React from "react";
import "./home.css";
import image from "../../assets/images/home.png";
import friends from "../../assets/images/friends.png";
import village from "../../assets/images/village.png";
import bulb from "../../assets/images/bulb.png";
import share from "../../assets/images/share.png";
import heart from "../../assets/images/heart.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-content">
          <div className="left">
            <h1>
              Who is An <br /> <span className="excel">Excellent</span> Techie?
            </h1>
            <p>
              Share and bond over frustrations, rejections, imbalance and
              successes as a Techie, We create a{" "}
              <span className="bold">SAFE SPACE</span> for you where you can
              unburden, get the right mentorship, and most importantly{" "}
              <span className="bold">DO YOU!</span>
            </p>
            <a href="https://forms.gle/ecgA8btSVCYhAHkM6" className="join">
              Join the Community{" "}
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
        </div>

        <div className="why-tech">
          <div className="left">
            <img src={friends} alt="friends" />
          </div>
          <div className="right">
            <h3>Why techYOUnity?</h3>
            <h1>
              <span className="excel">Improved</span> Learning <br /> and
              guidiance
            </h1>
            <p>
              We are focused on providing you with enough opportunities to grow
              in Tech while supporting you the best way we can as a community.
            </p>
          </div>
        </div>
      </div>

      <div className="growth">
        <div className="growth-content">
          <div className="content">
            <div className="left">
              <h1>
                Your <span className="excel">growth</span> is our concern
              </h1>
              <p>
                We are focused on providing you with enough resources and
                support to grow as a techie in your respective field.
              </p>
            </div>
            <div className="right">
              <div className="box one">
                <h3>
                  <span>Village</span>
                  <img src={village} alt="village" />
                </h3>
                <p>
                  We like to call ourselves a village, because we are a small
                  <span className="community"> COMMUNITY</span> getting through
                  to techies one techie at a time.
                </p>
              </div>
              <div className="box two">
                <h3>
                  <span>Friendship</span>
                  <img src={heart} alt="heart" />
                </h3>
                <p>
                  We create fun activitities away from our Laptop and
                  workspaces.
                </p>
              </div>
              <div className="box three">
                <h3>
                  <span>Mentorship</span>
                  <img src={bulb} alt="bulb" />
                </h3>
                <p>
                  We provide with SOLID mentorship, mentors who would who would
                  give you excellent learning structures for your growth.
                </p>
              </div>
              <div className="box four">
                <h3>
                  <span>Networking</span>
                  <img src={share} alt="share" />
                </h3>
                <p>
                  We build professional Networking opportunities for all
                  techies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="impact">
        <h2>How we plan to create impact</h2>
        <div className="impact-content">
          <div className="box">
            <h3 className="h3">Trainings</h3>
            <p className="p">
              We provide you with great self development/ self branding courses
              and materials that would prepare you for the jorney ahead, & help
              you navigate through the journey.
            </p>
          </div>
          <div className="box">
            <h3 className="h3">Community</h3>
            <p className="p">
              We have a community where we all gather, shsare ideas, build
              friendship, learn from one to another and as much as possible stay
              sane.
            </p>
          </div>
          <div className="box">
            <h3 className="h3">Partnership & Sponsorship</h3>
            <p className="p">
              You can be part of this great journey by sponsoring our events
              (making sure the members of our community have all they need to be
              excellent techies).
            </p>
          </div>
        </div>
      </div>

      <div className="partner">
        <div className="partner-content">
          <div className="left">
            <h1>
              Partner with <br /> techYOUnity.
            </h1>
          </div>
          <div className="right">
            <p>
              You can be a part of this movement by being a partner, mentor or
              being part of the community.
            </p>
            <a href="https://www.getrevue.co/profile/tech_younity" className="join become">
              Become a partner{" "}
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
