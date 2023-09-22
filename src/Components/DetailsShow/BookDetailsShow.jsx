import React from 'react'
import { useLoaderData, useParams, Link } from 'react-router-dom'

const BookDetailsShow = () => {

    const book = useLoaderData();

    // const {title, genre, description, price, author, image, rating } = book;

    const { id } = useParams();

    const selectItem = book.find(item => item.id == id);
    console.log(selectItem)

  return (
      <div className='mt-10'>
          <img src={selectItem.image} alt="" className='h-[500px] w-[500px]' />
          <h1 className="text-3xl font-bold">{ selectItem.title }</h1>
          <h1 className="text-xl"><strong>{selectItem.genre}</strong></h1>
          <h1 className="text-base font-medium">{selectItem.description }</h1>
          <h1 className="text-3xl font-bold">${selectItem.price}</h1>
          <Link to='/book'><button className='btn btn-outline btn-success'>Back</button></Link>
      </div>
  )
}

export default BookDetailsShow