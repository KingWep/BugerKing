import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaUserCircle, FaHome, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { RiSearchEyeLine } from "react-icons/ri";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa6";
import Register from './Register';
import Login from './Login';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLang, setShowLang] = useState(false);

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
                                <Link to={'/reward'} className="font-bold text-[18px]">Reward</Link>
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
                        <button
                            className="flex gap-1 items-center relative"
                            onClick={() => setShowLang(!showLang)}
                        >
                            <span id="current-lang-text" className="text-[20px]">ខ្មែរ</span>
                            <FaChevronDown
                                className={`text-[20px] transition-transform duration-300 ${showLang ? "rotate-180" : "rotate-0"
                                    }`}
                            />

                            {/* Dropdown with smooth animation */}
                            <div
                                className={`absolute top-[35px] w-[60px] flex flex-col px-3 border border-gray-300 bg-orange-100 rounded-[8px] overflow-hidden transition-all duration-300 ease-in-out ${showLang
                                    ? "opacity-100 translate-y-0 max-h-[200px]"
                                    : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                                    }`}
                            >
                                <img src="/img/camboflag.png" alt="Khmer" className="cursor-pointer" />
                                <img src="/img/englishflag.png" alt="English" className="cursor-pointer" />
                            </div>
                        </button>

                        <FaUserCircle
                            className='text-[30px] cursor-pointer'
                            onClick={() => setShowLogin(true)}
                        />

                        <div className='relative'>
                            <input type="text" placeholder='Search'
                                className="px-3 py-2 rounded-[16px] bg-white/20 text-black 
                                placeholder-black/70 border-[1px] border-gray-800 
                                focus:outline-none focus:ring-2 focus:border-none focus:ring-orange-400
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
                <div className="w-[40%] ml-3 relative ">
                    <button
                        className="flex gap-1 items-center relative"
                        onClick={() => setShowLang(!showLang)}
                    >
                        <span id="current-lang-text" className="text-[20px]">ខ្មែរ</span>
                        <FaChevronDown
                            className={`text-[20px] transition-transform duration-300 ${showLang ? "rotate-180" : "rotate-0"
                                }`}
                        />
                        {/* Dropdown with smooth animation */}
                        <div
                            className={`absolute top-[35px] left-0 w-[60px] flex flex-col px-3 border border-gray-300 bg-orange-100 rounded-[8px] overflow-hidden transition-all duration-300 ease-in-out ${showLang
                                ? "opacity-100 translate-y-0 max-h-[200px]"
                                : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
                                }`}
                        >
                            <img src="/img/camboflag.png" alt="Khmer" className="cursor-pointer" />
                            <img src="/img/englishflag.png" alt="English" className="cursor-pointer" />
                        </div>
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
                className={` top-[60px] fixed left-0 w-full bg-orange-200 z-40 
                transition-all duration-[0.8s] ease-in-out overflow-hidden
                ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col p-4 font-bold text-black/75 text-[18px] gap-4">
                    <li><Link to={'/'}>Home</Link></li>
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
                        <Link to={'/reward'} className="font-bold text-[18px]">Reward</Link>
                    </li>
                    <div className="relative flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-3 pr-3 py-2 rounded-[16px] focus:border-none bg-white/20 text-black placeholder-black/70 border-[1px] border-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
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
