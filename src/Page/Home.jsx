import React from 'react'
import Banner from "../Components/Home/Banner";
import Card from '../Components/Home/BugerCard';
import BugerCard from '../Components/Home/BugerCard';
import BurgerMenu from '../Components/Home/BurgerMenu';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
      <div className='w-full pt-[60px] pb-10'>
        <Banner />
        <div className='w-full flex justify-center pt-5 pb-10'>
          <h1 className='font-bold text-[40px] text-red-950'>Favorite</h1>
        </div>
        <div className=''>
          <BurgerMenu />
        </div>
        <div className='md:w-[70%] w-[80%] m-auto grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 mt-14 lg:mt-20 '>
          <img src="/img/home/p1.png" alt="" />
          <img src="/img/home/p2.png" alt="" />
        </div>
        <div className='md:w-[70%] w-[80%] m-auto grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-3 mt-6 text-red-100'>
          <div className='text-center flex flex-col justify-center items-center py-16 rounded-lg bg-red-800 cursor-pointer'>
            <li className="flex items-center gap-1">
              <Link to={'/reward'} className="font-bold lg:text-[30px] md:text-[20px] text-[20px]">BK</Link>
              <Link to={'/reward'} className="font-bold lg:text-[30px] md:text-[20px] text-[20px]">
                <sup className="w-[14px] h-[14px] flex items-center justify-center rounded-full border-[2px] border-white text-[10px] font-bold">
                  R
                </sup>
              </Link>
              <Link to={'/reward'} className="font-bold lg:text-[30px] md:text-[20px] text-[20px]">Grown Reward</Link>
            </li>
            <p className='flex font-bold lg:text-[18px] md:text-[10px] text-[12px]'>Buy much get more with Bk <sup className="lg:w-[14px] lg:h-[14px] md:w-[7px] md:h-[7px] w-[10px] h-[10px] flex items-center justify-center rounded-full border-[1px] lg:border-[2px] border-white md:text-[4px] lg:text-[10px] text-[6px] font-bold">
              R
            </sup> Grown Reward</p>
          </div>
          <div className='text-center flex flex-col justify-center items-center py-16 rounded-lg bg-orange-600 cursor-pointer'>
            <h1 className='lg:text-[30px] md:text-[20px] text-[20px] font-bold'>Coupon</h1>
            <p className='font-bold lg:text-[18px] md:text-[10px] text-[12px]'>Save everyday with the Burger King Coupon.</p>
          </div>
        </div>
      </div>
    </>
  )
}
