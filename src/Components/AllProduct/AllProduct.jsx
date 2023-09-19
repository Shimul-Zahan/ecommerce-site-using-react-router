import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Product from './Product/Product';

const AllProduct = () => {

    const allProduct = useLoaderData();

  return (
      <div className='pt-10 flex flex-col justify-center items-center'>
          <h1 className='text-center text-5xl mb-14'>Here is the top Products list for this week.</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20'>
              {
                  allProduct.map(product => <Product key={product.id} product={product} />)
              }
          </div>
      </div>
  )
}

export default AllProduct