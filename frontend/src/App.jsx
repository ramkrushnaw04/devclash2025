
import AboutUs from "../components/AboutUs"
import EventDetails from "../components/EventDetails"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Prizes from "../components/Prizes"
import Schedule from "../components/Schedule"
import Team from "../components/Team"
import Tracks from "../components/Tracks"
import SplashCursor from "../components/SplashCursor"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        {/* <SplashCursor  /> */}
                        <Navbar isMain={true} />
                        <Hero />
                        <Tracks />
                        <Schedule />
                        <Prizes />
                        <EventDetails />
                        <AboutUs />
                        {/* <Team />x */}
                        <Footer />
                    </>
                } />
                <Route path="/team" element={
                    <>
                        <Navbar isMain={false} />
                        <Team />
                    </>
                } />
            </Routes>
        </BrowserRouter>


    )
}

export default App
