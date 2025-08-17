"use client"
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import ControlledAccordions from '../Accardion';

const Autumn = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-start mt-26">
      {/* Sol hissə */}
      <div className="
        bg-gray-50 
        pl-6 md:pl-12 lg:pl-20 
        py-10 md:py-2 lg:py-54
      ">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.15rem] uppercase">
          Autumn / winter shop 2021
        </h1>
        <h3 className="text-base md:text-[19px] mt-3 font-light">
          Lorem ipsum dolore amet, vel consectetur risus
        </h3>

        <div className="pt-5 md:pt-7.5 pr-4 md:pr-20 lg:pr-40">
          <ControlledAccordions />
        </div>
      </div>

      {/* Sağ hissə */}
      <div className="relative">
        <img
          className="w-full h-auto "
          src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/main-home-img-stacked-02.jpg"
          alt=""
        />
        <div className="absolute top-[50px] md:top-[77px] right-4 md:right-16 w-[80%] md:w-full h-auto hidden md:block">
          <img
            className="w-full h-auto"
            src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/Main-home-stacked-img-0002.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Autumn;
