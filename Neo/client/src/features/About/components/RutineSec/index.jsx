import { Check } from 'lucide-react'
import React from 'react'

const RoutineSec = () => {
  return (
    <div>
      <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2 pb-30 md:pb-20 lg:pb-0'>
        <div>
          <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/About-us-page-img-001.jpg" alt="" />
        </div>
        <div className='flex flex-col justify-center px-7 md:px-6 lg:px-0 items-center'>
          <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/elementor/thumbs/About-us-single-img-03-pb29laic5fvlaw3v6tqvroh1qltcu6sr8fxwlvx25e.jpg" alt="" />
          <div className='flex flex-col justify-start items-center mt-6'>
            <h2 className='uppercase text-[28px] font-semibold tracking-[1px] pr-7 lg:pr-16'>Routine eye exams</h2>
            <div className='flex flex-col gap-3 mt-4 text-[16px] text-[#565656]'>
              <div className='flex items-center gap-2'>
                <Check size={18} strokeWidth={1.75} />
                <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check size={18} strokeWidth={1.75} />
                <p>Pellentesque dolor sit ipsum amet lorem</p>
              </div>
              <div className='flex items-center gap-2'>
                <Check size={18} strokeWidth={1.75} />
                <p>Lorem ipsum dolor sit amet vivid parte dolor amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-15 md:grid-cols-1 lg:grid-cols-2'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-start items-center mt-6'>
            <h2 className='uppercase text-[28px] font-semibold tracking-[1px]'>Routine eye exams</h2>
          </div>
        </div>
         <div>
          <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/About-us-page-img-02.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default RoutineSec
