import React from 'react'

const OnlineShop = () => {
  return (
    <div className='container mx-auto mt-38 text-center px-4'>
      <h1 className='text-[32px] font-semibold tracking-[0.15rem] uppercase'>Online shop services</h1>
      <h3 className='text-[19px] mt-3 font-light'>Our entire offer is only just one click away</h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'>
        <div className='flex flex-col items-center'>
          <img className='w-[86px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/mainhome-icon-01.png" alt="Free delivery" />
          <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>Free delivery</h4>
          <p className='mt-2 text-[16px] text-[#565656]'>Nec mauris sollicitudin, pharetra ex non, <br /> consectetur mauris vitae orci sit</p>
        </div>
        <div className='flex flex-col items-center'>
          <img className='w-[47px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/main-home-icon-02.png" alt="100% safe online shopping" />
          <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>100% safe online shopping</h4>
          <p className='mt-2 text-[16px] text-[#565656]'>Nec mauris sollicitudin, pharetra ex non, <br /> consectetur mauris vitae orci sit</p>
        </div>
        <div className='flex flex-col items-center'>
          <img className='w-[60px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/sluske.png" alt="Helpdesk center" />
          <h4 className='uppercase mt-7 text-[16px] font-semibold tracking-[1px]'>Helpdesk center</h4>
          <p className='mt-2 text-[16px] text-[#565656]'>Nec mauris sollicitudin, pharetra ex non, <br /> consectetur mauris vitae orci sit</p>
        </div>
      </div>
    </div>
  )
}

export default OnlineShop
