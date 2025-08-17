import React from 'react'

const ContactUs = () => {
  return (
    <div className='bg-[#f9f9f9]'>
      <div className='container mx-auto py-38 flex flex-col justify-center items-center'>
        <img className='px-7.5' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/09/about-us-img-01.jpg" alt="" />
        <div className='pt-13 flex flex-col items-center justify-center'>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:gap-25'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='object-cover mb-4 w-13' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/about-us-icon-w-text.png" alt="" />
                    <h3 className='text-[15px] text-[#1c1c1c] font-semibold uppercase'>Utility vision</h3>
                    <h4 className='text-[16px] text-[#565656]'>nunc amet</h4>
                </div>
                 <div className='flex flex-col justify-center items-center'>
                    <img className='object-cover mb-6 w-13' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/about-us-icon-w-text-02.png" alt="" />
                    <h3 className='text-[15px] text-[#1c1c1c] font-semibold uppercase'>Vision exams</h3>
                    <h4 className='text-[16px] text-[#565656]'>volutpat sed in</h4>
                </div>
                 <div className='flex flex-col justify-center items-center'>
                    <img className='object-cover mb-4 w-13' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/about-us-icon-w-text-03.png" alt="" />
                    <h3 className='text-[15px] text-[#1c1c1c] font-semibold uppercase'>Retina exams</h3>
                    <h4 className='text-[16px] text-[#565656]'>amet volutpat</h4>
                </div>
            </div>
            <p className='text-center px-10 lg:px-72 text-[16px] ] text-[#565656] mt-4.5'>Diam volutpat commodo sed egestas egestas fringilla phasellus. Augue eget arcu dictum varius  duis at euismod do lorem. Mauris nunc congue nisi vitae. Purus in mollis nunc sed. Eu mi  bibendum neque egestas quisque egestas diam in.</p>
            <button className='mt-9 px-10 py-4 bg-[#1c1c1c] w-[209px] hover:bg-black duration-500 text-[13px] text-white font-medium uppercase tracking-[.15rem]'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
