
import AboutUs from "../components/AboutUs"
import EventDetails from "../components/EventDetails"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Prices from "../components/Prices"
import Schedule from "../components/Schedule"
import Team from "../components/Team"
import Tracks from "../components/Tracks"


function App() {


  return (
    <div className="text-black">
        <Navbar />
        <Hero />
        <AboutUs />
        <Tracks />
        <Schedule />
        <Prices />
        <EventDetails />
        <Team />
        <Footer />
    </div>
  )
}

export default App
