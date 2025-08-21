import HeroBanner from '@/features/common/HeroBanner'
import React from 'react'

const  HeroBannerBkAppointment = () => {

    const HeroBannerBkAppointment =[
        {
            img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/booking-parallax-title-image-01.jpg",
            title: "Book An Appointment",
            subtitle: "Donec varius semper magna sit amet dignissim"
        }
    ]

  return (
    <HeroBanner
      img={HeroBannerBkAppointment[0].img}
      title={HeroBannerBkAppointment[0].title}
      subtitle={HeroBannerBkAppointment[0].subtitle}
    />
  )
}

export default  HeroBannerBkAppointment
