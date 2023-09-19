import React from 'react'
import Header from '../Header/Header'
import Wathces from '../Watches/Wathces'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Header />
        <Outlet />
      <Wathces />
    </div>
  )
}

export default Home