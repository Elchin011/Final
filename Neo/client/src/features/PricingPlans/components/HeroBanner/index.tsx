
import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerPricingPlans = () => {
   const HeroBannerPricingPlans =[
    {
        img:"https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/pricing-plan-parallax-title-image-001.jpg",
        title:"Pricing Plans",
        subtitle:"Donec varius semper magna sit amet dignissim"
    }
   ]
  return (
    <div>
        <HeroBanner
      img={HeroBannerPricingPlans[0].img}
      title={HeroBannerPricingPlans[0].title}
      subtitle={HeroBannerPricingPlans[0].subtitle}
    />
      
    </div>
  )
}

export default HeroBannerPricingPlans
