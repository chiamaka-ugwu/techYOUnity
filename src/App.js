import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import EventPage from "./pages/EventPage";
import HomePage from "./pages/HomePage";


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/events" element={<EventPage />} />

                </Routes>
            </Router>
        </>
    );
}

export default App;
