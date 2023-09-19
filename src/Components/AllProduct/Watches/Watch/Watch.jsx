import React from 'react'

const Watch = ({ watch }) => {

    const { image,name, description } = watch;

  return (
      <div className="card w-80 bg-base-100 shadow-xl pb-4">
          <figure>
              <img src={image} alt="book-cover-image" className='h-[250px] w-full' />
          </figure>
          <div className="mt-6 space-y-4">
              <h2 className="flex justify-between">
                  <h1 className='text-xl font-bold'>{name}</h1>
              </h2>
              <p className='text-lg font-medium mb-2'>{description}</p>
              <div className="card-actions justify-end">
                  <div className="badge badge-outline cursor-pointer">More Details</div>
                  <div className="badge badge-outline cursor-pointer">Buy Now</div>
              </div>
          </div>
      </div>
  )
}

export default Watch