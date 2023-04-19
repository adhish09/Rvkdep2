import React from 'react'

import IntroSection from './intro/Intro'
import ContactSection from './contact-section/ContactSection'
import MapSection from './map/Map' // import the map here


import './Contact.css'

const location = {
  address: ' Raj Vijay Kender Chattarpur, chandanhula New delhi -110074',
  lat: 28.437260,
  lng: 77.200610,
} // our location object from earlier

const App = () => (
  <div className="App" >
    <IntroSection />
    <ContactSection />
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
  </div>
)

export default App