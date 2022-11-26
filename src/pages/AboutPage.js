import React from "react";
import AboutUs from "../components/about/AboutUs";
import Mission from "../components/mission/Mission";
import Nav from "../components/navbar/Nav";
import Story from "../components/story/Story";
import Footer from "../components/footer/Footer";
import HomeEvents from "../components/events/HomeEvents";

const AboutPage = () => {
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
      <Nav about="active" id="nav" />
      <AboutUs />
      <Story />
      <Mission />
      <HomeEvents />
      <div className="growth">
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
