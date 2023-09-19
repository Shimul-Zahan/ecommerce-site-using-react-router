import React from 'react'

const Book = ({ book }) => {

    const { title, genre, description, price, author, image, rating } = book;

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="book-cover-image" className='h-[250px] w-full' />
            </figure>
            <div className="mt-6 space-y-4">
                <h2 className="flex justify-between">
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-lg font-medium'>If a dog chews shoes whose Book does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline cursor-pointer">More Details</div>
                    <div className="badge badge-outline cursor-pointer">Buy Now</div>
                </div>
            </div>
        </div>
    )
}

export default Book