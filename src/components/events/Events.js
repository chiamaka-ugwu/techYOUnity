import React from "react";
import "./events.css";
import friends from "../../assets/images/people.png";
import pic from "../../assets/images/event.png";
import event from "../../assets/images/pic.png";
import {
  faArrowRightLong,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Events = () => {
  return (
    <>
      <div className="home">
        <div className="event-cont1">
          <h2 className="no-story">
            No Stories here,
            <span className="excel"> Only real life stories</span>
          </h2>
          <p className="event-p">
            We know you cannot wait for our next event, and we also cannot wait
            to have you
          </p>
          <div className="img-cont1">
            <img src={friends} alt="friends" />
          </div>
        </div>
        <div className="event-cont1 event-cont2">
          <h2 className="no-story upcoming">Upcoming Events</h2>
          <div className="event-boxes">
            <div className="event-box">
              <div className="date">
                <h3>
                  22<span className="nd">nd</span>
                </h3>
                <h2>Oct.</h2>
              </div>
              <div className="img">
                <img src={pic} alt="event" />
              </div>
              <div className="texts">
                <h3 className="tech">TechYOUnity Launch</h3>
                <p className="harvoxx">
                  <FontAwesomeIcon icon={faLocationDot} className='location' />
                  Harvoxx Tech Hub
                </p>
                <p className="reg">
                  We know you cannot wait for our next event, and we also cannot
                  wait to have you
                </p>
                <a href="" className="join regt">
                  Register
                  <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
                </a>
              </div>
            </div>
            <div className="event-box">
              <div className="date">
                <h3>
                  22<span className="nd">nd</span>
                </h3>
                <h2>Oct.</h2>
              </div>
              <div className="img">
                <img src={pic} alt="event" />
              </div>
              <div className="texts">
                <h3 className="tech">TechYOUnity Launch</h3>
                <p className="harvoxx">
                  <FontAwesomeIcon icon={faLocationDot} className='location' />
                  Harvoxx Tech Hub
                </p>
                <p className="reg">
                  We know you cannot wait for our next event, and we also cannot
                  wait to have you
                </p>
                <a href="" className="join regt">
                  Register
                  <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="updates">
        <h3>Don't miss any events</h3>
        <h1>Stay up to date</h1>
        <p>Subscribe to our newsletter to receive event updates</p>
        <form className="update-form">
          <input type="text" placeholder="Enter your email address" />
          <button type="submit" className="join become click">
            Click to Subscribe
            <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
          </button>
        </form>
      </div>
      <div className="past">
        <h1>Past Events</h1>
        <div className="past-events">
          <div className="past-box">
            <div className="img">
              <img src={event} alt="event" />
            </div>
            <div className="event-date">
              <h3>
                22<span className="nd">nd</span>
              </h3>
              <h2>Oct.</h2>
            </div>
            <h3 className="past-h3">TechYOUnity Launch</h3>
            <p className="past-p">
              We provide you with great self development/ self branding courses
              and materials that would prepare you for the jorney ahead, & help
              you navigate through the journey.
            </p>
            <a href="" className="join">
              View Gallery
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
          <div className="past-box">
            <div className="img">
              <img src={event} alt="event" />
            </div>
            <div className="event-date">
              <h3>
                22<span className="nd">nd</span>
              </h3>
              <h2>Oct.</h2>
            </div>
            <h3 className="past-h3">TechYOUnity Launch</h3>
            <p className="past-p">
              We provide you with great self development/ self branding courses
              and materials that would prepare you for the jorney ahead, & help
              you navigate through the journey.
            </p>
            <a href="" className="join">
              View Gallery
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
          <div className="past-box">
            <div className="img">
              <img src={event} alt="event" />
            </div>
            <div className="event-date">
              <h3>
                22<span className="nd">nd</span>
              </h3>
              <h2>Oct.</h2>
            </div>
            <h3 className="past-h3">TechYOUnity Launch</h3>
            <p className="past-p">
              We provide you with great self development/ self branding courses
              and materials that would prepare you for the jorney ahead, & help
              you navigate through the journey.
            </p>
            <a href="" className="join">
              View Gallery
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
