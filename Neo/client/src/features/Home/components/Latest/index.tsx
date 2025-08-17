import React from 'react'
import LatestCard from '../../common/LatestCard'

const Latest = () => {


    const latestData = [
        {
            img: 'https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h1-b-list-img-1.jpg',
            date: 'Jul 30 , Style / Vision',
            title: 'Trendy men’s eyeglasses',
            desc: 'Convallis convallis tellus id interdum velit laoreet id. Aenean pharetra magna ac placerat'
        },
        {
            img: 'https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h1-b-list-img-2.jpg',
            date: 'Jul 30 , Style / Vision',
            title: 'Frames that suit you',
            desc: 'Convallis convallis tellus id interdum velit laoreet id. Aenean pharetra magna ac placerat'
        },
        {
            img: 'https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h1-b-list-img-3.jpg',
            date: 'Jul 30 , Style / Vision',
            title: 'Style your own glasses',
            desc: 'Convallis convallis tellus id interdum velit laoreet id. Aenean pharetra magna ac placerat'
        }
    ];


    return (
        <div className='container mx-auto pt-40 pb-38'>
            <div className='text-center'>
                <h1 className='text-4xl uppercase font-semibold tracking-[0.15rem]'>Latest neo ocular updates</h1>
                <p className='text-[19px] font-light mt-2'>Placerat orci nulla pellentesque sed in donne</p>
            </div>
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 px-8 sm:px-6 lg:px-0 lg:gap-7.5 mt-18'>
                {
                    latestData.map((item, index) => (
                        <LatestCard
                            key={index}
                            img={item.img}
                            date={item.date}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Latest
