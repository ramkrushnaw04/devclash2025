
import AboutUs from "../components/aboutUs"
import EventDetails from "../components/eventDetails"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Prices from "../components/prices"
import Schedule from "../components/schedule"
import Team from "../components/team"
import Tracks from "../components/tracks"


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
