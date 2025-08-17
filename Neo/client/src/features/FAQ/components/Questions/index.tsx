import React from 'react'
import ControlledAccordions from '../../common/Accardion'

const Questions = () => {
  return (
    <div className='container mx-auto mt-36 px-4 sm:px-8 md:px-20'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
        <div className='md:col-span-4'>
          <h1 className='text-[24px] sm:text-[28px] md:text-[30px] font-semibold uppercase tracking-[0.3px] mt-4'>
            Your questions
          </h1>
          <p className='text-[16px] sm:text-[18px] md:text-[19px] text-[#000] font-light'>
            The most asked questions
          </p>
        </div>
        <div className='md:col-span-8'>
          <ControlledAccordions />
        </div>
      </div>
    </div>
  );
};

export default Questions;
