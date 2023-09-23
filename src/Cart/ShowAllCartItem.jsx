import React from 'react'

const ShowAllCartItem = ({ cart }) => {
    

  return (
      <div className='mb-5 flex gap-10 border-2 items-center w-1/2 '>
          <img src={cart.image} alt="" className='h-[200px] w-[200px] ' />
          <div>
              <h1>{cart.brand || cart.title}</h1>
          </div>
      </div>
  )
}

export default ShowAllCartItem