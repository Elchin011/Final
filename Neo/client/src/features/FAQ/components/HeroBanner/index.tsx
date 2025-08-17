
import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerFAQ = () => {
   const HeroBannerFAQ =[
    {
        img:"https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/faq-parallax-title-image-01.jpg",
        title:"FAQ Page",
        subtitle:"Donec varius semper magna sit amet dignissim"
    }
   ]
  return (
    <div>
        <HeroBanner
      img={HeroBannerFAQ[0].img}
      title={HeroBannerFAQ[0].title}
      subtitle={HeroBannerFAQ[0].subtitle}
    />
      
    </div>
  )
}

export default HeroBannerFAQ
