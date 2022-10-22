import React from 'react'
import Footer from '../components/footer/Footer'
import Home from '../components/home/Home'
import Nav from '../components/navbar/Nav'

const HomePage = () => {
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
            <Nav home='active' id='nav' />
            <Home />
            <Footer />
        </>
    )
}

export default HomePage
