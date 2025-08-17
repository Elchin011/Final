import { Facebook, Instagram, Twitch, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='pt-[80px]'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img className='object-contain' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/logo-footer-img.jpg" alt="" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[17px] font-semibold">SERVICES</h3>
                        <ul className="mt-[15px] space-y-2 text-[#1c1c1c] leading-7">
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Book eye test
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Vision therapy
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Vouchers
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Lenses & prices
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Eye health
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[17px] font-semibold">THE COMPANY</h3>
                        <ul className="mt-[15px] space-y-2 text-[#1c1c1c] leading-7">
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Contact
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">FAQ
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Shipping
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Stores
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Collection
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Jobs and carrers
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-[17px] font-semibold">GENERAL</h3>
                        <ul className="mt-[15px] space-y-2 text-[#1c1c1c] leading-7">
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Our doctors
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">About company
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Products
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Products on sale
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>
                            <li><a href="#" className="text-[#565656] hover:text-black transition mb-3.5 text-[16px] relative group cursor-pointer ">Our news
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='border-t border-[#f9f9f9]'>
                    <div className="flex flex-col sm:flex-row  sm:justify-between pt-5 pb-10 container mx-auto gap-4 sm:gap-0">
                        {/* Sosial ikonlar */}
                        <div className="flex items-center gap-5">
                            <Instagram size={20} color='white' fill='black' />
                            <Facebook size={20} color='white' fill='black' />
                            <Twitch size={20} color='white' fill='black' />
                            <Twitter size={20} color='white' fill='black' />
                        </div>

                        {/* Copyright */}
                        <div className="flex mt-2 sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-black text-sm transition">
                                @ 2021 Qode Interactive, All Rights Reserved
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
