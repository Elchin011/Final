import { Leaf, LeafyGreen, Sun } from 'lucide-react'
import React from 'react'

const BlueLight = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-24'>
            <div className='relative'>
                <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Main-Home-stacked-img-big-001.jpg" alt="" />
                <div className='absolute top-[41px] left-16 w-full h-full hidden md:block'>
                    <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Main-home-stacked-img-0001-1.png" alt="" />
                </div>
            </div>
            <div className='h-auto md:h-[670px] bg-gray-50 px-6 md:pl-40 py-16 md:py-40'>
                <h1 className='text-3xl font-semibold tracking-[0.15rem] uppercase'>Blue light optical lens</h1>
                <h3 className='text-[19px] mt-3'>Lorem ipsum dolore amet, vivid vel risus sit</h3>
                <div className='flex items-start gap-2 mt-7 pb-5'>
                    <Sun size={20} strokeWidth={1.5} />
                    <div>
                        <h4 className='text-[14px] font-semibold tracking-[0.1em] uppercase'>Cras sodales odio non libero tincidunt amet</h4>
                        <p className='text-[16px] mt-[5px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur sit do</p>
                    </div>
                </div>
                <div className='h-[1px] w-full max-w-md bg-gray-200'></div>
                <div className='flex items-start gap-2 mt-7 pb-5'>
                    <Leaf stroke='black' strokeWidth={1.5} size={18} />
                    <div>
                        <h4 className='text-[14px] font-semibold tracking-[0.1em] uppercase'>Cras sodales odio non libero tincidunt amet</h4>
                        <p className='text-[16px] mt-[5px] text-[#565656]'>Lorem ipsum dolor sit amet, consectetur sit do</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlueLight
