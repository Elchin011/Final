import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerWhoWeAre = () => {

    const HeroBannerWhoWeAre = {
        img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/inner-who-we-are-title-img-01.jpg",
        title: "Who We Are",
        subtitle: "Donec varius semper magna sit amet dignissim"
    }

  return (
    <div>
        <HeroBanner
          img={HeroBannerWhoWeAre.img}
          title={HeroBannerWhoWeAre.title}
          subtitle={HeroBannerWhoWeAre.subtitle}
        />
    </div>
  )
}

export default HeroBannerWhoWeAre
