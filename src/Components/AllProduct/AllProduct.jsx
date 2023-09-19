import React from 'react'
import { useLoaderData } from 'react-router-dom'

const AllProduct = () => {

    const allProduct = useLoaderData();

  return (
      <div className='pt-10'>
          <h1 className='text-center text-5xl'>All Products: {allProduct.length}</h1>
      </div>
  )
}

export default AllProduct