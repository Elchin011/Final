import React from 'react'

const Quality = () => {
    return (
        <div className='pt-40'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7.5'>
                <div className='group relative flex items-center justify-center text-center overflow-hidden'>
                    <img
                        className='w-full max-h-[730px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                        src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/main-home-banner-01.jpg"
                        alt="Quality standards"
                    />
                    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-start text-white max-w-[480px] px-4'>
                        <h1 className="text-3xl font-semibold uppercase">quality standards</h1>
                        <p className='mb-3 text-lg'>View all our frames and discover your perfect match</p>

                        <button className='bg-transparent text-white hover:bg-black transition-all duration-300 mt-4 py-3 px-14 rounded-none border border-white hover:border-black'>
                            <a className='text-[12px] font-medium tracking-[0.2em]' href="#">VIEW MORE</a>
                        </button>
                    </div>
                </div>

                <div className='group relative flex items-center justify-center text-center overflow-hidden'>
                    <img
                        className='w-full max-h-[730px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105'
                        src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/main-home-banner-02.jpg"
                        alt="Professional team"
                    />
                    <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-start text-white max-w-[480px] px-4'>
                        <h1 className="text-3xl font-semibold uppercase">Professional team</h1>
                        <p className='mb-3 text-lg'>Get expert lens advice from our eyecare specialists</p>
                        <button className='bg-transparent text-white hover:bg-black transition-all duration-300 mt-4 py-3 px-14 rounded-none border border-white hover:border-black'>
                            <a className='text-[12px] font-medium tracking-[0.2em]' href="#">VIEW MORE</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality
