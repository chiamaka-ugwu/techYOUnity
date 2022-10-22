import React from "react";
import './mission.css';

const Mission = () => {
  return (
    <>
      <div className="mission">
        <div className="box">
          <h1>
            Our <span className="excel">Vision</span>
          </h1>
          <p>
            To have more African Techies excel in their Tech journey and live a
            balanced Life.
          </p>
        </div>
        <div className="box">
          <h1>
            Our <span className="excel">Mission</span>
          </h1>
          <p>
            To build a comunity that helps Techies gain balance and become
            excellent through well-tailored community engagements, strategic
            collaborations and programs.
          </p>
        </div>
      </div>
      <div className="values">
        <h1>Our Core<span className="excel">Values</span></h1>
        <div className="val-content">
            <p>Dedication</p>
            <p>Focus</p>
            <p>Commitment</p>
            <p>Team Work</p>
            <p>Consistency</p>
            <p>Collaborative Effort</p>
        </div>
      </div>
    </>
  );
};

export default Mission;
