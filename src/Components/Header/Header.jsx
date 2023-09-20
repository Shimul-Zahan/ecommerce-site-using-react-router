import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className="navbar bg-base-100 py-8">
          <div className="navbar-start">
              <a className="text-2xl font-bold">Algo Hut</a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl text-white">
                  <Link className='mx-10' to="/">Home</Link>
                  <Link className='mx-10' to="/all">All Products</Link>
                  <Link className='mx-10' to="/courses">Courses</Link>
                  <Link className='mx-10' to="/book">Book</Link>
                  <Link className='mx-10' to="/sunglass">Sunglass</Link>
                  <Link className='mx-10' to="/watches">Watches</Link>
              </ul>
          </div>
          <div className="navbar-end space-x-4 text-xl text-white">
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
          </div>
      </div>
  )
}

export default Header