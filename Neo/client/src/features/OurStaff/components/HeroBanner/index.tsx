
import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerOurStaff = () => {
   const HeroBannerOurStaff =[
    {
        img:"https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Team-parallax-title-image-001.jpg",
        title:"Our Staff",
        subtitle:"Donec varius semper magna sit amet dignissim"
    }
   ]
  return (
    <div>
        <HeroBanner
      img={HeroBannerOurStaff[0].img}
      title={HeroBannerOurStaff[0].title}
      subtitle={HeroBannerOurStaff[0].subtitle}
    />
      
    </div>
  )
}

export default HeroBannerOurStaff
