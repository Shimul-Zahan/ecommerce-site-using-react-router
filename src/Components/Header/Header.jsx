import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { searchItemInLC } from '../../Utils/LocalStore/LocalStore';
import {  signOut } from "firebase/auth";
import auth from '../../Firebase/firebase.config';
import { MyContext } from '../../Context/MyContextAPI';

// login er kaj kam

const Header = () => {

    const { user,  } = useContext(MyContext);
    const [cartProducts, setCartProsucts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const totalProductOfCart = searchItemInLC();
        setCartProsucts(totalProductOfCart)
        // problems hocche
    }, [])


    const [loggedUser, setLoggedUser] = useState(null);


    const singOut = () => {
        signOut(auth).then(() => {
            setLoggedUser(null);
            navigate('/');
            console.log('Successfull logged out');
        }).catch((error) => {
            console.log(error)
        });
    }



    return (
        <div className="navbar py-8">
            <div className="navbar-start">
                <a className="text-2xl font-bold"><Link to='/'>Foki<span className='text-yellow-500'>nnir Ba</span>zar</Link></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex justify-center items-center gap-0 text-lg text-black">
                    <NavLink className='mx-10' to="/">Home</NavLink>
                    <NavLink className='mx-10' to="/all">All Products</NavLink>
                    <NavLink className='mx-10' to="/courses">Courses</NavLink>
                    <NavLink className='mx-10' to="/book">Book</NavLink>
                    <NavLink className='mx-10' to="/sunglass">Sunglass</NavLink>
                    <NavLink className='mx-10' to="/watches">Watches</NavLink>
                    {/* <div className='relative'>
                        <NavLink className='mx-10' to="/cart"> <BsFillCartCheckFill /> </NavLink>
                        <h1 className='absolute top-5 right-3 bg-green-600 rounded-full h-4 w-4 text-sm flex justify-center items-center text-white'>{cartProducts.length}</h1>
                    </div> */}
                </ul>
            </div>
            <div className="navbar-end text-xl text-black">
                <div className="flex justify-center items-center gap-8">
                    {
                        user ? 
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                        <span className="badge bg-red-500 badge-sm indicator-item">{  }</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{} Items</span>
                                    <span className="text-info">Subtotal: $00</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                            </div> :
                            <div>
                                <Link className='btn btn-secondary btn-outline' to="/Register">Registration</Link>
                            </div>
                    }
                    {/* onClick={loginUser} */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">      
                            {
                                user && 
                                <li>
                                    <Link to='/profile' className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                            }
                            <li><a>Settings</a></li>
                            <li>
                                {
                                    user ? 
                                        <Link onClick={singOut} className='text-red-500'>Logout</Link> :
                                        <Link  className='text-blue-600' to="/login">Login</Link>
                                }
                                {/* onClick={loginUser} */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header