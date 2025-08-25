import Link from 'next/link'
import React from 'react'

const HeroBanner = () => {
    return (
        <div>
            <div className="relative">
                <img
                    className="h-[155px] object-cover"
                    src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/Whislist-cart-title-img.jpg"
                    alt="Cart Banner"
                />
                <div className="absolute top-1/2 left-[95px]">
                    <div className="text-[15px] text-white mb-6 flex items-center gap-2">
                        <li className="list-none">
                            <Link
                                href="/"
                                className="text-white transition mb-3.5 text-[15px] relative group cursor-pointer"
                            >
                                Home
                                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-full"></span>
                            </Link>
                        </li>
                        /
                        <p>
                            <Link href="/cart">Cart</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroBanner
