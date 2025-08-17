import React from 'react'
import BookCart from '../../common/BookCart'

const Book = () => {

    const bookCartData = [
        {
            img: 'https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h3-image-w-text-01.jpg',
            title: 'Comprehensive eye exams',
            features: [
                'Lorem ipsum dolor sit amet, vivir elit purss',
                'Consequat dolor duis, consectetur',
                'Nostrum vivid, dolor lorem ipsum aliquiam'
            ]
        },
        {
            img: 'https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h3-image-w-text-02.jpg',
            title: 'Book your exam online',
            features: [
                'Duis aute irure dolor in reprehenderit in',
                'Excepteur sint occaecat cupidatat',
                'Officia deserunt mollit anim est laborum'
            ]
        },
        {
            img: 'https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/h3-image-w-text-03.jpg',
            title: 'Best medical treatments',
            features: [
                'Interdum velit laoreet id donec in ultrices',
                'Egestas diam amet arcu cursus ad',
                'Habitant morbi tristique senectus netus'
            ]
        }
    ]

    return (
        <div className='container mx-auto py-36 px-8.5 md:px-6 lg:px-4'>
            <h1 className='text-[32px] font-semibold tracking-[0.15rem] uppercase'>Book a meeting now</h1>
            <h4 className='mt-2.5 mb-15 text-[19px] font-light'>Book your term online fast and easy</h4>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-7.5'>
                {bookCartData.map((item, index) => (
                    <BookCart key={index} img={item.img} title={item.title} features={item.features} />
                ))}
            </div>
        </div>
    )
}

export default Book
