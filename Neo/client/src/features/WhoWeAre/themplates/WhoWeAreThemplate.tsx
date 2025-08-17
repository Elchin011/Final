import Services from '@/features/common/Services/incex'
import React from 'react'
import HeroBannerWhoWeAre from '../components/HeroBanner'
import Louise from '../components/Louise'
import OnlineShop from '../components/OnlineShop'

const WhoWeAreThemplate = () => {
  return (
    <div>
        <HeroBannerWhoWeAre/>
        <Louise/>
        <OnlineShop/>
        <Services/>
      
    </div>
  )
}

export default WhoWeAreThemplate
