import React from 'react'

const CartItem = ({item}) => {
  return (
      <div className='border-2 p-4 flex justify-start items-center gap-10'>
          <div >
              <img src={item.image} alt="" className='h-52 w-52' />
          </div>
          <div className='space-y-4'>
              <h1 className="text-xl font-bold">{item.name}</h1>
              <h1 className="text-xl font-bold">Price : {item.price}$</h1>
              <button className='btn btn-warning btn-outline'>Remove from cart</button>
          </div>
    </div>
  )
}

export default CartItem