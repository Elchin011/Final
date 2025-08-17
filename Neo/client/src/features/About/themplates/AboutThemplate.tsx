import React from 'react'
import HeroBanner from '../../common/HeroBanner'
import ContactUs from '../components/ContactUs'
import RutineSec from '../components/RutineSec'
import Services from '@/features/common/Services/incex'
import HeroBannerAbout from '../components/HeroBanner'


const AboutTemplate = () => {
  return (
    <div>
      <HeroBannerAbout/>
      <ContactUs/>
      <RutineSec/>
      <Services/>
    </div>
  )
}

export default AboutTemplate
