
import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerMeetTheDoctor = () => {
   const HeroBannerMeetTheDoctor =[
    {
        img:"https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/inner-meet-the-doctor-img-01.jpg",
        title:"Meet The Doctor",
        subtitle:"Donec varius semper magna sit amet dignissim"
    }
   ]
  return (
    <div>
        <HeroBanner
      img={HeroBannerMeetTheDoctor[0].img}
      title={HeroBannerMeetTheDoctor[0].title}
      subtitle={HeroBannerMeetTheDoctor[0].subtitle}
    />
      
    </div>
  )
}

export default HeroBannerMeetTheDoctor
