
import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerContactUs = () => {
   const HeroBannerContactUs =[
    {
        img:"https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/contact-parallax-title-image-1.jpg",
        title:"Contact Us",
        subtitle:"Donec varius semper magna sit amet dignissim"
    }
   ]
  return (
    <div>
        <HeroBanner
      img={HeroBannerContactUs[0].img}
      title={HeroBannerContactUs[0].title}
      subtitle={HeroBannerContactUs[0].subtitle}
    />
      
    </div>
  )
}

export default HeroBannerContactUs
