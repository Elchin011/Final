import React from 'react'

const Services = () => {
  return (
   <div className='bg-[#f9f9f9] pt-20 pb-30'>
     <div className='container mx-auto text-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12  lg:gap-10 mt-16 px-7.5 md:px-6 lg:px-4'>
        <div className='flex flex-col items-center'>
            <img className='h-[51px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/mainhome-icon-01.png" alt="" />
            <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>Free delivery</h4>
            <p className='mt-2 text-[16px] text-[#565656]'>Velit euismod in pellentesque in massa placerat do nunc vel</p>
        </div>
         <div className='flex flex-col items-center'>
            <img className='h-[51px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/main-home-icon-02.png" alt="" />
            <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>100% safe online shoping</h4>
            <p className='mt-2 text-[16px] text-[#565656]'>Velit euismod in pellentesque in massa placerat do nunc vel</p>
        </div>
         <div className='flex flex-col items-center'>
            <img className='h-[51px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/sluske.png" alt="" />
            <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>Helpdesk center</h4>
            <p className='mt-2 text-[16px] text-[#565656]'>Velit euismod in pellentesque in massa placerat do nunc vel</p>
        </div>
        <div className='flex flex-col items-center'>
            <img className='h-[51px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/inner-icon-img-004.png" alt="" />
            <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>Trendy shapes</h4>
            <p className='mt-2 text-[16px] text-[#565656]'>Velit euismod in pellentesque in massa placerat do nunc vel</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Services
