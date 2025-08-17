import React from 'react'
import ServicesPricing from '../components/ServicesPricing'
import HeroBannerPricingPlans from '../components/HeroBanner'
import PricingLogo from '../components/PricingLogo'

const PricingPlansThemplate = () => {
    return (
        <div>
            <HeroBannerPricingPlans />
            <ServicesPricing />
            <PricingLogo />
        </div>
    )
}

export default PricingPlansThemplate
