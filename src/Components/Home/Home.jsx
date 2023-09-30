import React from 'react'
import Header from '../Header/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from '../Footer/Footer'



import { Dna } from 'react-loader-spinner'



const Home = () => {

  const navigation = useNavigation();

  return (
    <div className='container mx-auto'>
      <div >
        <Header />
        {
          navigation.state === "loading" ?
            <div className='flex justify-center items-center h-[700px]'>
              <Dna
                visible={true}
                height="180"
                width="180"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </div>
            : <Outlet />
        }
        <Footer />
      </div>
    </div>
  )
}

export default Home