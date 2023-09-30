import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import Watch from './Watch/Watch';

const Watches = () => {

    const watches = useLoaderData();
    const { id } = useParams();

    console.log(id);

    return (
        <div className='pt-10 flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl mb-14'>Here is the top smart watch list for this week.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
                {
                    watches.map(watch => <Watch key={watch.id} watch={watch} />)
                }
            </div>
        </div>
    )
}

export default Watches