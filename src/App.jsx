import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Tracks } from './components/tracks'
import { Speakers } from './components/Speakers'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Speakers data={landingPageData.Team} />
      <Tracks data={landingPageData.Services} />
      <Speakers title="Partnership" description="Some of our sponsors who made this possible" data={landingPageData.Partner} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
