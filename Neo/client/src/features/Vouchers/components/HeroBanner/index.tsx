import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const HeroBannerVouchers = () => {

    const HeroBannerVouchers = {
        img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Vouchers-parallax-title-image-001.jpg",
        title: "Vouchers",
        subtitle: "Donec varius semper magna sit amet dignissim"
    }

  return (
    <div className='relative'>
        <HeroBanner
          img={HeroBannerVouchers.img}
          title={HeroBannerVouchers.title}
          subtitle={HeroBannerVouchers.subtitle}
        />
        <div className='absolute bottom-0 left-0 text-center text-white bg-black w-full py-2.5'>
            <h4 className='font-semibold'>FREE GIFT BAG - <span className='font-normal'>With every frame</span></h4>
        </div>
    </div>
  )
}

export default HeroBannerVouchers
