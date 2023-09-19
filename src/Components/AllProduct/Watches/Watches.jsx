import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Watches = () => {
  
    const watches = useLoaderData();

    return (
        <div className='pt-10'>
            <h1 className='text-center text-5xl'>Watches: {watches.length}</h1>
        </div>
    )
}

export default Watches