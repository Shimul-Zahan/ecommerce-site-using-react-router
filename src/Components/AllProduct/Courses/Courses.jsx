import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Course from './Course/Course';

const Courses = () => {
  
    const courses = useLoaderData();

    return (
        <div className='pt-10 flex flex-col justify-center items-center'>
            <h1 className='text-center text-5xl mb-14'>Here is the top reviewed Course list for this week.</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    )
}

export default Courses