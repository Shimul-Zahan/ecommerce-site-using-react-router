import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { searchItemInLC } from '../../Utils/LocalStore/LocalStore';

const Header = () => {

    const [cartProducts, setCartProsucts] = useState([]);
    
    useEffect(() => {
        const totalProductOfCart = searchItemInLC();
        setCartProsucts(totalProductOfCart)
        // problems hocche
    }, [])


  return (
      <div className="navbar bg-base-100 py-8">
          <div className="navbar-start">
              <a className="text-2xl font-bold"><Link to='/'>Foki<span className='text-yellow-500'>nnir Ba</span>zar</Link></a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal flex justify-center items-center px-1 text-xl text-black">
                  <NavLink className='mx-10' to="/">Home</NavLink>
                  <NavLink className='mx-10' to="/all">All Products</NavLink>
                  <NavLink className='mx-10' to="/courses">Courses</NavLink>
                  <NavLink className='mx-10' to="/book">Book</NavLink>
                  <NavLink className='mx-10' to="/sunglass">Sunglass</NavLink>
                  <NavLink className='mx-10' to="/watches">Watches</NavLink>
                  <div className='relative'>
                      <NavLink className='mx-10' to="/cart"> <BsFillCartCheckFill /> </NavLink>
                      <h1 className='absolute top-5 right-3 bg-green-600 rounded-full h-4 w-4 text-sm flex justify-center items-center text-white'>{ cartProducts.length }</h1>
                  </div>
              </ul>
          </div>
          <div className="navbar-end space-x-4 text-xl text-black">
              <NavLink to='/register'>Register</NavLink>
              <NavLink to='/login'>Login</NavLink>
          </div>
      </div>
  )
}

export default Header