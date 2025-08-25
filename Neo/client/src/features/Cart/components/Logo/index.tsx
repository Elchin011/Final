import React from 'react'

const Logo = () => {
    return (
        <div>
            <div className="bg-[#f9f9f9] py-18 px-9 lg:px-0">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-2">
                        {[
                            { img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-01.png", title: "Free shipping 100$", desc: "Lorem ipsum dolor in" },
                            { img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-02.png", title: "Helpdesk center", desc: "Nunc amet volutpat sed" },
                            { img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-03.png", title: "60 days to try out", desc: "Sit amet placerat do" },
                            { img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-04.png", title: "100% safe payment", desc: "Non tellus orci auctor" },
                        ].map((item, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                                <div className="pt-6">
                                    <img className="h-[46px]" src={item.img} alt={item.title} />
                                </div>
                                <div className="text-left">
                                    <h4 className="uppercase mt-7 text-[15px] font-semibold text-[#606060] tracking-[1px]">{item.title}</h4>
                                    <p className="text-[16px] text-[#565656]">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Logo
