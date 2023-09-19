import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Sunglass from './Sunglass/Sunglass';

const Sunglasses = () => {

    const sunglasses = useLoaderData();

    return (
        <div className='pt-10 flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl mb-14'>Here is the top reviewed sunglass list for this week.</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
                {
                    sunglasses.map(sunglass => <Sunglass key={sunglass.id} sunglass={sunglass} />)
                }
            </div>
        </div>
    )
}

export default Sunglasses