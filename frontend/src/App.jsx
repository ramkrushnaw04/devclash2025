
import AboutUs from "../components/AboutUs"
import EventDetails from "../components/EventDetails"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Prizes from "../components/Prizes"
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
        <Prizes />
        <EventDetails />
        <Team />
        <Footer />
    </div>
  )
}

export default App
