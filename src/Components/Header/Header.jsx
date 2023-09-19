import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <div className="navbar bg-base-100">
          <div className="navbar-start">
              <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-xl text-white">
                  <Link className='mx-10' to="/">Home</Link>
                  <Link className='mx-10' to="/about">About</Link>
                  <Link className='mx-10' to="/contact">Contact Us</Link>
                  <Link className='mx-10' to="/more">More</Link>
              </ul>
          </div>
          <div className="navbar-end">
              <a className="btn">Button</a>
          </div>
      </div>
  )
}

export default Header