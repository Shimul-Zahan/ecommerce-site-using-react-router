import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Book = () => {

    const book = useLoaderData();

    return (
        <div className='pt-10'>
            <h1 className='text-center text-5xl'>Book: {book.length}</h1>
        </div>
    )
}

export default Book