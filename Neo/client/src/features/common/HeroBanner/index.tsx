"use client"

import React, { useEffect, useState } from 'react'

const HeroBanner = ({ img, title, subtitle }: any) => {

   const [offsetY, setOffsetY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => setOffsetY(window.pageYOffset);
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  return (
    <div className='relative w-full h-[400px] bg-cover  overflow-hidden'
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: `center ${offsetY * 0.10}px`
      }}
    >
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
        <h1 className='text-[38px] lg:text-[40px] font-semibold uppercase'>{title}</h1>
        <p className='text-[19px]'>{subtitle}</p>
      </div>
    </div>
  )
}

export default HeroBanner
