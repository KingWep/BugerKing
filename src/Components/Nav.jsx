import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHome, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { RiSearchEyeLine } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Register from './Register';
import Login from './Login';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            {/* PC Navbar */}
            <div className='w-full h-[60px] bg-orange-200 fixed top-0 left-0 z-50 text-black/75 hidden lg:block'>
                <div className='w-[85%] h-full m-auto justify-between flex'>
                    {/* left */}
                    <div className='w-[40%]'>
                        <ul className='w-full h-full font-bold text-[18px] items-center flex gap-5'>
                            <li><Link to={'/'}><FaHome className='text-[25px]' /></Link></li>
                            <li><Link to={'/restaurant'}>Restaurant</Link></li>
                            <li><Link to={'/menu'}>Menu</Link></li>
                            <li><Link to={'/offer'}>Offer</Link></li>
                            <li className="flex items-center gap-1">
                                <Link to={'/reward'} className="font-bold text-[18px]">BK</Link>
                                <Link to={'/reward'} className="font-bold text-[18px]">
                                    <sup className="w-[14px] h-[14px] flex items-center justify-center rounded-full border-[2px] border-black/75 text-[10px] font-bold">
                                        R
                                    </sup>
                                </Link>
                                <Link to={'/reward'} className="font-bold text-[18px]">Grown Reward</Link>
                            </li>
                        </ul>
                    </div>
                    {/* middle logo */}
                    <div className='w-[20%]'>
                        <div className='m-auto w-[70px] h-full mt-1'>
                            <Link to={'/'}>
                                <img src="/img/logo.svg" alt="logo" />
                            </Link>
                        </div>
                    </div>
                    {/* right */}
                    <div className='w-[40%] flex justify-end gap-5 items-center'>
                        <button className='flex'>
                            <span id="current-lang-text" className='text-[20px]'>ខ្មែរ</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                fill="none" stroke="currentColor" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="feather-chevron-down">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        <FaUserCircle
                            className='text-[30px] cursor-pointer'
                            onClick={() => setShowLogin(true)}
                        />

                        <div className='relative'>
                            <input type="text" placeholder='Search'
                                className="px-3 py-2 rounded-[16px] bg-white/20 text-black 
                                placeholder-black/70 border-[1px] border-gray-800 
                                focus:outline-none focus:ring-2 focus:ring-orange-400
                                text-sm sm:text-base" />
                            <a href="" className='absolute top-[27%] right-2 text-[20px]'>
                                <RiSearchEyeLine />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/50 z-30"
                ></div>
            )}

            {/* Mobile Navbar */}
            <div className='w-full h-[60px] flex justify-between items-center fixed top-0 left-0 z-50 text-black/75 bg-orange-200 lg:hidden '>
                <div className='w-[40%] ml-3'>
                    <button className='flex'>
                        <span id="current-lang-text" className='text-[20px]'>ខ្មែរ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="feather-chevron-down">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                </div>
                <div className='w-[20%] mt-5'>
                    <div className='m-auto w-[60px] h-full'>
                        <Link to={'/'}>
                            <img src="/img/logo.svg" alt="logo" />
                        </Link>
                    </div>
                </div>
                <div className='w-[40%] flex items-center justify-end mr-3 gap-3 text-[28px]'>
                    <FaRegUserCircle
                        className='text-[25px] cursor-pointer'
                        onClick={() => setShowLogin(true)}
                    />
                    <button onClick={() => setOpen(!open)}>
                        {open ? <MdOutlineRestaurantMenu /> : <HiMiniBars3BottomRight />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <div
                className={`absolute top-[60px] left-0 w-full bg-orange-200 z-40 
                transition-all duration-[0.8s] ease-in-out overflow-hidden
                ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col p-4 font-bold text-black/75 text-[18px] gap-4">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/restaurant'}>Restaurant</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                    <li><Link to={'/offer'}>Offer</Link></li>
                    <div className="relative flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-3 pr-3 py-2 rounded-[16px] bg-white/20 text-black placeholder-black/70 border-[1px] border-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                            />
                            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/70 text-[20px]" />
                        </div>
                    </div>
                </ul>
            </div>

            {/* Register Form Overlay */}
            {showRegister && (
                <div className="fixed inset-0 bg-black/60 flex justify-center pt-10 items-center z-50">
                    <div className="relative">
                        <button
                            className=" absolute lg:top-4 lg:right-4 md:top-4 md:right-4 top-4 right-8 text-white text-2xl"
                            onClick={() => setShowRegister(false)}
                        >
                            <MdOutlineRestaurantMenu />
                        </button>
                        <Register
                            onSwitchToLogin={() => {
                                setShowRegister(false);
                                setShowLogin(true);
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Login Form Overlay */}
            {showLogin && (
                <div className="fixed inset-0 bg-black/60 flex justify-center pt-10 items-center z-50">
                    <div className="relative">
                        <button
                            className=" absolute lg:top-4 lg:right-4 md:top-4 md:right-4 top-3 right-3 text-white text-2xl"
                            onClick={() => setShowLogin(false)}
                        >
                            <MdOutlineRestaurantMenu />
                        </button>
                        <Login
                            onSwitchToRegister={() => {
                                setShowLogin(false);
                                setShowRegister(true);
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
