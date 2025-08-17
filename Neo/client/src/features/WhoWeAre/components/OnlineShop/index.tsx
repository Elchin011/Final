"use client"
import React, { useEffect, useRef, useState } from 'react'

const OnlineShop = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [animate, setAnimate] = useState(false);
    const [progressValues, setProgressValues] = useState([0, 0, 0]);
    const targetValues = [85, 45, 85];

    const labels = ["Ophthalmology Shop", "menswear glasses", "womenswear styles"];

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0 && !animate) {
                setAnimate(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [animate]);

    useEffect(() => {
        if (animate) {
            const interval = setInterval(() => {
                setProgressValues((prev) =>
                    prev.map((val, i) => (val < targetValues[i] ? val + 1 : val))
                );
            }, 40); // animasiyanın sürəti

            return () => clearInterval(interval);
        }
    }, [animate]);

    return (
        <div ref={sectionRef}>
            <div className='grid grid-cols-1 gap-31 md:grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Who-we-are-banner-img.jpg" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-start items-center md:items-start mt-6'>
                        <h2 className='uppercase text-[34px] lg:text-[36px] px-9 md:px-0 lg:px-0 md:text-start font-semibold tracking-[1px]'>Online shop offers</h2>
                        <h3 className='mt-2 text-[19px] lg:pr-5.5 font-light px-9 md:px-0  lg:px-0 md:text-start'>Dictumst quisque sagittis purus sit rhoncus sed</h3>
                        <div className='mt-4 text-[16px] text-[#565656] w-[324px] md:w-[688px] lg:w-full flex flex-col gap-4 lg:gap-6'>

                            {progressValues.map((value, i) => (
                                <div key={i} className="relative w-[324px] md:w-[688px] lg:w-[400px] h-1 bg-[rgb(245,245,245)] mt-12 rounded-full">
                                    <span className="absolute -top-8 left-0 text-sm text-black font-semibold uppercase tracking-[0.5px]">
                                        {labels[i]}
                                    </span>
                                    <div
                                        className="absolute left-0 top-0 h-full bg-black rounded-full transition-all duration-300"
                                        style={{ width: `${value}%` }}
                                    />
                                    <span className="absolute -top-8 right-0 text-sm text-[#565656] font-semibold">
                                        {value}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineShop;
