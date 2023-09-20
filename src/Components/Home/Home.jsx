import React from 'react'
import Header from '../Header/Header'
import Wathces from '../Watches/Wathces'
import { Outlet, useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Home = () => {

  const allData = useLoaderData();

  return (
    <div className='container mx-auto'>
      <div >
        <Header />
        
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Home