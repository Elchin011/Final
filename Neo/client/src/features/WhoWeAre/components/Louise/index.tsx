import { Button } from '@/components/ui/button'
import React from 'react'

const Louise = () => {
  return (
    <div className='bg-[#f9f9f9]'>
      <div className='container mx-auto py-38 px-9  flex flex-col justify-center items-center'>
        <img className='w-[646px] h-[302px] lg:h-[646px] object-cover' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/who-we-are-single-img-01.jpg" alt="" />
        <div className='pt-10.5 flex flex-col justify-center items-center'>
            <h2 className='text-4xl uppercase font-semibold'>Louise Tim Felix</h2>
            <h3 className='text-[#565656] mt-2'>Co Founder</h3>
            <p className='text-center lg:px-72 text-[16px] text-[#565656] mt-4.5'>Diam volutpat commodo sed egestas egestas fringilla phasellus. Augue eget arcu dictum varius duis at euismod do lorem. Mauris nunc congue nisi vitae. Purus in mollis nunc sed. Eu mi  bibendum neque egestas quisque egestas diam in.</p>
            <Button className='mt-9 px-10 py-4.5 bg-[#1c1c1c] hover:bg-black duration-500 text-[13px] text-white font-medium uppercase tracking-[.15rem]'>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default Louise
