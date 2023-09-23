import React, { useEffect, useState } from 'react'
import { searchItemInLC } from '../Utils/LocalStore/LocalStore';
import ShowAllCartItem from './ShowAllCartItem';

const Cart = () => {

    const [totalProducts, setTotalProducts] = useState([]);

    useEffect(() => {
        const items = searchItemInLC();
        console.log(items)
        setTotalProducts(items);
    }, [])

  return (
      <div>
          {
              totalProducts.map(cart => <ShowAllCartItem key={cart.id} cart={cart} />)
          }
    </div>
  )
}

export default Cart