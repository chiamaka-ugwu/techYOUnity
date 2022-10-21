import React from 'react'
import AboutUs from '../components/about/AboutUs'
import Nav from '../components/navbar/Nav'
import Story from '../components/story/Story'

const AboutPage = () => {
    return (
        <>
            <Nav about='active'  />
            <AboutUs />
            <Story />
        </>
    )
}

export default AboutPage
