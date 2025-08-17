import React from 'react'

const LatestCard = ({ img, date, title, desc }:any) => {
  return (
    <div className='text-center'>
        <img src={img} alt="" />
        <div className='flex flex-col items-center justify-center gap-2.5 '>
            <h5 className='text-[12px] text-[#606060] font-medium uppercase mt-5'>{date}</h5>
            <h1 className='text-[22px] font-semibold uppercase'>{title}</h1>
            <p className='text-[16px] text-[#565656] text-center'>{desc}</p>
        </div>
        <button className='uppercase text-[13px] font-medium mt-6.5 border-b border-black'>Read more</button>
    </div>
  )
}

export default LatestCard
