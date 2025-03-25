
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

function App() {


  return (
    <div className=" ">
        <SplashCursor  />
        <Navbar />
        <Hero />
        <AboutUs />
        <Tracks />
        <Schedule />
        <Prizes />
        <EventDetails />
        {/* <Team />x */}
        <Footer />
    </div>
  )
}

export default App
