import React from 'react'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import Nav from '../components/navbar/Nav'

const HomePage = () => {
    return (
        <>
            <Nav className='active' />
            <Home />
            <Footer />
        </>
    )
}

export default HomePage
