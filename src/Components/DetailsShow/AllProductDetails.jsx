import React, { useContext } from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom'
import { saveToLC } from '../../Utils/LocalStore/LocalStore';
import { MyContext } from '../../Context/MyContextAPI';

const AllProductDetails = () => {

    const { getTotalCartItem } = useContext(MyContext);
    const AllProducts = useLoaderData();
    const { id } = useParams();

    const selectItem = AllProducts.find(item => item.id == id)

    const addToLocalStorage = item => {
        saveToLC(selectItem);
    }

    return (
        <div className='mt-10'>
            <img src={selectItem.image} alt="" className='h-[500px] w-[500px]' />
            <h1 className="text-3xl font-bold">{selectItem.name}</h1>
            <h1 className="text-xl"><strong>{selectItem.genre}</strong></h1>
            <h1 className="text-base font-medium">{selectItem.description}</h1>
            <h1 className="text-3xl font-bold">${selectItem.price}</h1>
            <Link><button onClick={() => {
                addToLocalStorage();
                getTotalCartItem();
            }} className='btn btn-outline btn-success'>Add to cart</button></Link>
        </div>
    )
}

export default AllProductDetails