import React from "react";
import Events from "../components/events/Events";
import Footer from '../components/footer/Footer'
import Nav from '../components/navbar/Nav'


const EventPage = () => {
  window.scroll(0, 0);
  window.onscroll = () => {
    const top = window.scrollY;
    if (top >= 50) {
      document.getElementById("nav").classList = "nav nav2";
    } else {
      document.getElementById("nav").classList = "nav";
    }
  };

  return (
    <>
      <Nav events="active" id="nav" />
      <Events />
      <Footer />
    </>
  );
};

export default EventPage;
