import React from 'react'
import AboutUs from '../components/about/AboutUs'
import Events from '../components/events/Events'
import Mission from '../components/mission/Mission'
import Nav from '../components/navbar/Nav'
import Story from '../components/story/Story';
import Footer from '../components/footer/Footer';

const AboutPage = () => {
    window.scroll(0, 0)
    window.onscroll = () => {
        const top = window.scrollY;
        if (top >= 50) {
            document.getElementById('nav').classList = 'nav nav2'
        }else{
            document.getElementById('nav').classList = 'nav'

        }
    }
    return (
        <>
            <Nav about='active'  />
            <AboutUs />
            <Story />
            <Mission />
            <Events />
            <Footer />
        </>
    )
}

export default AboutPage
