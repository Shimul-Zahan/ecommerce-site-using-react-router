import React, { useContext } from 'react'
import image from '../../public/vite.svg'
import { MyContext } from '../Context/MyContextAPI'
import TotalItemChart from './Statistics/TotalItem'
import TotalPriceChart from './Statistics/TotalPrice'
import CartItem from './Statistics/CartItem/CartItem'
const Profile = () => {

  const { user, TotalItem, totalPrice } = useContext(MyContext)

  return (
    <main className="profile-page pt-52">
      <section className="relative block h-500-px">
        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {user?.email}
                </h3>
              </div>
            </div>
            <div className='text-xl font-bold space-y-4 p-4'>
              <h1>Total Item : { TotalItem.length }</h1>
              <h1>Total Price : ${totalPrice} </h1>
              <div>
                <h1>Item Lists : </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {
                    TotalItem.map(item => <CartItem key={item.id} item={item} />)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='flex justify-around items-center'>
        <TotalItemChart />
        <TotalPriceChart />
      </div>
    </main>
  )
}

export default Profile