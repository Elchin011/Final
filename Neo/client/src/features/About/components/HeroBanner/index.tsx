import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const  HeroBannerAbout = () => {
    

    const HeroBannerAbout =[
        {
            img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/About-ust-parallax-title-image-001.jpg",
            title: "About Us",
            subtitle: "Donec varius semper magna sit amet dignissim"
        }
    ]

  return (
    <HeroBanner
      img={HeroBannerAbout[0].img}
      title={HeroBannerAbout[0].title}
      subtitle={HeroBannerAbout[0].subtitle}
    />
  )
}

export default  HeroBannerAbout
