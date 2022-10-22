import React from "react";
import "./events.css";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../assets/images/pic1.png";
import image2 from "../../assets/images/pic2.png";

const Events = () => {
  return (
    <>
      <div className="home events">
        <div className="event-cont cont1">
          <div className="right">
            <img src={image} alt="image" />
          </div>
          <div className="left">
            <h3>Our Events</h3>
            <h1>Connect with people like you.</h1>
            <p>
              It is no new knowledge, that techies find it difficult to connect
              with people from other industries because of the nature of their
              Job. Well, this is the perfect opportunity to connect with people
              like you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5jAgSXzPiyoVU5H0vt2D6cjZ8loSrSJ2QXP6n0mE8NmeS-g/viewform"
              className="join"
            >
              Join the Community{" "}
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
        </div>

        <div className="event-cont cont2">
          <div className="left">
            <h1>
              No Stories here, <br />{" "}
              <span className="excel">Only real life stories</span>
            </h1>
            <h3>Our Events</h3>
            <p>
                We know you cannot wait for our next event, and we also cannot wait to have you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc5jAgSXzPiyoVU5H0vt2D6cjZ8loSrSJ2QXP6n0mE8NmeS-g/viewform"
              className="join"
            >
              Join the Community{" "}
              <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
            </a>
          </div>
          <div className="right right-cont">
            <img src={image2} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
