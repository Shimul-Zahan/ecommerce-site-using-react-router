import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Header = () => {
  return (
      <div className="navbar bg-base-100 py-8">
          <div className="navbar-start">
              <a className="text-2xl font-bold"><Link to='/'>Foki<span className='text-yellow-500'>nnir Ba</span>zar</Link></a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl text-white">
                  <NavLink className='mx-10' to="/">Home</NavLink>
                  <NavLink className='mx-10' to="/all">All Products</NavLink>
                  <NavLink className='mx-10' to="/courses">Courses</NavLink>
                  <NavLink className='mx-10' to="/book">Book</NavLink>
                  <NavLink className='mx-10' to="/sunglass">Sunglass</NavLink>
                  <NavLink className='mx-10' to="/watches">Watches</NavLink>
                  <NavLink className='mx-10' to="/cart"> <BsFillCartCheckFill/> </NavLink>
              </ul>
          </div>
          <div className="navbar-end space-x-4 text-xl text-white">
              <NavLink to='/register'>Register</NavLink>
              <NavLink to='/login'>Login</NavLink>
          </div>
      </div>
  )
}

export default Header