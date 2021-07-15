import { useState, useEffect, useLayoutEffect, useContext } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { CallForPapers } from './components/CallFP'
import { About } from './components/about'
import { Tracks } from './components/tracks'
import { Speakers } from './components/Speakers'
import { Contact } from './components/contact'

import SmoothScroll from 'smooth-scroll'

import JsonData from './data/data.json'
import { LoadStatus } from './context';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

export default function Landing(props) {
  const { user, landingPageData, myUser } = props
  const loading = useContext(LoadStatus)

  useEffect(() => {
    if (loading && loading.status) setTimeout(() => {
      loading.change(false)
    }, 1000);
  }, [])


  return (
    <div style={ {
      overflow: loading.status ? 'hidden' : 'auto',
      display: 'block',
      height: loading.status ? '100%' : 'auto'
    } } >
      <Navigation data={ landingPageData.Call } />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Speakers data={landingPageData.Team} />
      <Tracks data={ landingPageData.Services } />
      <CallForPapers data={ landingPageData.Call } />
      <Speakers id="Partnership" title="Sponsors" data={landingPageData.Partner} />
      <Speakers id="Group" title="Participants User Groups" data={landingPageData.Group} />
      <Contact data={landingPageData.Contact} />
    </div>
  )
}