
import React from 'react'
import HeroBannerContactUs from '../components/HeroBanner'
import Contact from '../components/Contact'
import Visit from '../components/Visit'
import ContactServices from '../components/Services'

const ContactUsThemplate = () => {
  return (
    <div>
      <HeroBannerContactUs/>
      <Contact/>
      <Visit/>
      <ContactServices/>
    </div>
  )
}

export default ContactUsThemplate
