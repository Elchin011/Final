import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const PersonCard = ({ name, specialties, imageUrl }: { name: string; specialties?: { name: string }; imageUrl: string }) => {
  return (
    <div className=''>
      <img src={imageUrl} alt="" />
      <div className='text-center mt-10.5'>
        <h3 className='text-[17px] font-semibold uppercase'>{name}</h3>
        <p className='text-[16px] text-[#565656] mt-2'>{specialties?.name}</p>
        <Button className='mt-[17px] text-[13px] font-medium border-b border-black bg-transparent text-black uppercase tracking-[1.95px]'>appointment</Button>
      </div>

    </div>
  )
}

export default PersonCard
