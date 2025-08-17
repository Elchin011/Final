import { Button } from '@/components/ui/button'
import { CircleCheckBig, CircleX } from 'lucide-react'
import React from 'react'



const BookCart = ({ img, title, features }: any) => {
    return (
        <div>
            <img className='w-full object-cover' src={img} alt="" />
            <div className='mt-[35px]'>
                <h4 className='text-[22px] font-semibold text-[#1c1c1c] uppercase tracking-[1px]'>{title}</h4>
                <div className='flex flex-col gap-2.5 mt-3.5'>
                    <div className='flex items-center gap-2.5'>
                        <CircleCheckBig strokeWidth={1} size={20} />
                        <p className='text-[16px] text-[#565656]'>{features[0]}</p>
                    </div>
                     <div className='flex items-center gap-2.5'>
                        <CircleCheckBig strokeWidth={1} size={20} />
                        <p className='text-[16px] text-[#565656]'>{features[1]}</p>
                    </div>
                     <div className='flex items-center gap-2.5'>
                        <CircleX strokeWidth={1} size={20} />
                        <p className='text-[16px] text-[#565656]'>{features[2]}</p>
                    </div>
                </div>
                <button className='mt-7.5 px-10 py-3.5 text-[13px] font-medium text-black hover:bg-[#000000] hover:text-white duration-400 border border-black uppercase tracking-[1px]'>Book Appointment</button>
            </div>

        </div>
    )
}

export default BookCart
