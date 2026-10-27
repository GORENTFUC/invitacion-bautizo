import Hero from './components/sections/Hero/Hero'
import MusicPlayer from './components/ui/MusicPlayer/MusicPlayer'
import OurStory from './components/sections/OurStory/OurStory'
import Baptism from './components/sections/Baptism/Baptism'
import Birthday from './components/sections/Birthday/Birthday'
import Gallery from './components/sections/Gallery/Gallery'
import Countdown from './components/sections/Countdown/Countdown'
import GuestDetails from './components/sections/GuestDetails/GuestDetails'
import Footer from './components/sections/Footer/Footer'

function App() {
  return (
    <>
      <MusicPlayer />
      <Hero nextSectionId="nuestra-historia" />
      <main>
        <OurStory />
        <Baptism />
        <Birthday />
        <Gallery />
        <Countdown />
        <GuestDetails />
      </main>
      <Footer />
    </>
  )
}

export default App
