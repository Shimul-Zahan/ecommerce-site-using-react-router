import React from 'react'
import { Link } from 'react-router-dom';

const TotalProduct = ({ product }) => {
  
  const { id, image, title, description } = product;

  return (
    <div className="card w-80 bg-base-100 shadow-xl pb-4">
      <figure>
        <img src={image} className='h-[250px] w-full' />
      </figure>
      <div className="space-y-2 mt-4">
        <h2 className="card-title text-xl">{title.slice(0, 25)}</h2>
        <p>{description.slice(0, 100)}</p>
        <div className="justify-end pt-4 space-y-3">
          <Link to={`${id}`}>
            <button className="btn btn-secondary btn-outline w-full capitalize">Show details</button>
          </Link>
          <button className="btn btn-primary w-full capitalize">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default TotalProduct