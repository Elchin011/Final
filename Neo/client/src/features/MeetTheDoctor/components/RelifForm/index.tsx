import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import React from 'react'

const RelifForm = () => {
    return (
        <div className='container mx-auto py-37.5'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 '>
                <div className='flex flex-col justify-center px-8.5 lg:px-0'>
                    <div className='flex flex-col  mt-6 text-start'>
                        <h2 className='uppercase text-[28px] font-semibold tracking-[1px]'>Relif from eyes discomfort</h2>
                        <p className='text-[#565656] text-[16px] mt-[13px] pr-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-20 border-b border-[#e5e5e5] py-5.5 mr-12'>
                                <div className='w-[112px]'>
                                    <h6 className='text-[#1c1c1c] text-[15px] font-semibold tracking-[0.3px] uppercase'>Speciality</h6>
                                </div>
                                <p className='text-[#565656] text-[16px]'>– Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className='flex items-center gap-20 border-b border-[#e5e5e5] py-5.5 mr-12'>
                                <div className='w-[112px]'>
                                    <h6 className='text-[#1c1c1c] text-[15px] font-semibold tracking-[0.3px] uppercase'>Degree</h6>
                                </div>
                                <p className='text-[#565656] text-[16px]'>– Optometrist</p>
                            </div>
                            <div className='flex items-center gap-20 border-b border-[#e5e5e5] py-5.5 mr-12'>
                                <div className='w-[112px]'>
                                    <h6 className='text-[#1c1c1c] text-[15px] font-semibold tracking-[0.3px] uppercase'>Certificates</h6>
                                </div>
                                <p className='text-[#565656] text-[16px]'>– Vestibulum scelerisque mauris arcu</p>
                            </div>
                            <div className='flex items-center gap-20 border-b border-[#e5e5e5] py-5.5 mr-12'>
                                <div className='w-[112px]'>
                                    <h6 className='text-[#1c1c1c] text-[15px] font-semibold tracking-[0.3px] uppercase'>Work Days</h6>
                                </div>
                                <div className='flex-col lg:flex gap-5'>
                                    <div className='flex items-center gap-2'>
                                        <Check className='text-[#565656] w-5 h-5' />
                                        <p className='text-[#565656] text-[16px]'> Monday</p>
                                    </div>
                                     <div className='flex items-center gap-2'>
                                        <Check className='text-[#565656] w-5 h-5' />
                                        <p className='text-[#565656] text-[16px]'> Friday</p>
                                    </div>
                                     <div className='flex items-center gap-2'>
                                        <Check className='text-[#565656] w-5 h-5' />
                                        <p className='text-[#565656] text-[16px]'> Saturday</p>
                                    </div>

                                </div>
                            </div>
                            <div className='pt-9.5 pb-5'>
                                <p className='text-[#565656] text-[16px]'>mail: neoocular@qodeinteractive.com</p>
                                <p className='text-[#565656] text-[16px]'>tel: (+971) 204 2033 6611</p>
                            </div>
                            <Button className='py-3.5 px-10 bg-[#1c1c1c] text-white uppercase text-[13px] font-medium w-[200px] tracking-[0.1rem] hover:bg-black duration-300'>Appointment</Button>
                        </div>

                    </div>
                </div>
                <div className='px-8.5 lg:px-0 pt-16 md:pt-10 lg:pt-0'>
                    <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/v-card-page-single-img.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default RelifForm
