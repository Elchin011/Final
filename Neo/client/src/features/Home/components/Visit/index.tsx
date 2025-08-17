import React from 'react'

const Visit = ({ img }: any) => {
    const visitImg = [
        { id: 1, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2023/11/gallery-img-01.jpg" },
        { id: 2, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2023/11/gallery-img-02.jpg" },
        { id: 3, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2023/11/gallery-img-03.jpg" },
        { id: 4, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2023/11/gallery-img-04.jpg" },
        { id: 5, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2023/11/gallery-img-05.jpg" }
    ]
    const visitLogo = [
        { id: 1, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Client-01-1.png" },
        { id: 2, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Client-02-1.png" },
        { id: 3, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Client-03-1.png" },
        { id: 4, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Client-04-1.png" },
        { id: 5, img: "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Client-05-1.png" }
    ]
    return (
        <div>
            {/* Instagram section */}
            <div className='bg-[#111111] pt-40 pb-38'>
                <div className='container mx-auto'>
                    <div className='text-center text-white'>
                        <h1 className='text-4xl uppercase font-semibold tracking-[0.15rem]'>visit our instagram</h1>
                        <p className='text-[19px] font-light mt-2'>Check our lastest posts now</p>
                    </div>
                    {/* Responsive grid: mobile 1 col, tablet 2 cols, desktop 5 cols */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-7.5 mt-11'>
                        {visitImg.map((item: any) => (
                            <div key={item.id} className='overflow-hidden px-7 sm:px-2 lg:px-0'>
                                <img className='object-cover w-full h-full' src={item.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Logo section */}
            <div className='py-19 bg-[#f9f9f9]'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-7.5'>
                        {visitLogo.map((item: any) => (
                            <div
                                key={item.id}
                                className='flex items-center justify-center w-full sm:w-auto'
                            >
                                <img className='object-contain w-[170px] max-w-[170px] h-auto' src={item.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Visit
