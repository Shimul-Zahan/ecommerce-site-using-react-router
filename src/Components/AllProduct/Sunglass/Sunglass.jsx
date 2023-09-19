import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Sunglass = () => {

    const sunglass = useLoaderData();

    return (
        <div className='pt-10'>
            <h1 className='text-center text-5xl'>Sunglass: {sunglass.length}</h1>
        </div>
    )
}

export default Sunglass