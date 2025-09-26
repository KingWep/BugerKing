import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <div className='w-full pt-[60px] pb-10 bg-red-950'>
                <div className='m-auto w-[90%] '>
                    <div className='w-full gap-10 grid md:grid-cols-4 grid-cols-2'>
                        <ul>
                            <h1 className='text-[20px] font-medium text-orange-500'>BK® Info</h1>
                            <p className='w-full h-[3px] mt-3 mb-3 bg-orange-500'></p>
                            <li className='text-white'>About</li>
                            <li className='text-white'>Contact</li>
                            <li className='text-white'>Terms & Conditions</li>
                            <li className='text-white'>Privacy Policy</li>
                            <li className='text-white'>News & Press</li>
                        </ul>
                        <ul>
                            <h1 className='text-[20px] font-medium text-orange-500'>My BK®</h1>
                            <p className='w-full h-[3px] mt-3 mb-3 bg-orange-500'></p>
                            <li className='text-white'>King Premium</li>
                            <li className='text-white'>Whopper® Family</li>
                            <li className='text-white'>Flame Grill</li>
                            <li className='text-white'>Crispy & Tender</li>
                            <li className='text-white'>King Jr°.</li>
                            <li className='text-white'>King Chicken</li>
                            <li className='text-white'>Snack King</li>
                        </ul>
                        <ul>
                            <h1 className='text-[20px] font-medium text-orange-500'>Careers</h1>
                            <p className='w-full h-[3px] mt-3 mb-3 bg-orange-500'></p>
                            <li className='text-white'>Jop opportunity</li>
                            <li className='text-white'>Apply Now</li>
                            <li className='text-white'>Join BK® Now</li>
                        </ul>
                        <ul>
                            <h1 className='text-[20px] font-medium text-orange-500'>Follow Us</h1>
                            <p className='w-full h-[3px] mt-3 mb-3 bg-orange-500'></p>
                            <div className='grid lg:grid-cols-2 md:gap-2 gap-1 lg:text-[25px] text-[15px] mt-2'>
                                <div className='flex items-center gap-2 text-white'>
                                    <li className='text-white'><FaFacebook /></li>
                                    <span className='text-[15px]'>Facebook</span>
                                </div>
                                <div className='flex items-center gap-2 text-white'>
                                    <li className='text-white'><FaFacebookMessenger /></li>
                                    <span className='text-[15px]'>Messanger</span>
                                </div>
                                <div className='flex items-center gap-2 text-white'>
                                    <li className='text-white'><FaTelegram /></li>
                                    <span className='text-[15px]'>Telegram</span>
                                </div>
                                <div className='flex items-center gap-2 text-white'>
                                    <li className='text-white'><FaInstagramSquare /></li>
                                    <span className='text-[15px]'>Instagram</span>
                                </div>
                            </div>

                        </ul>
                    </div>
                    <div className='w-full pt-10'>
                        <img src="/img/linefooter.png" alt="" className='h-full' />
                    </div>
                    <div className='w-full flex justify-between mt-5 text-white'>
                        <div className='w-[50%]'>
                            <h1 className='font-bold lg:text-[30px] text-[20px]'>BURGER KING.</h1>
                            <p className='text-[12px]'>TM & ° 2025 Burger King company LLC.
                                Used under license. All rights reserved.</p>
                        </div>
                        <div className='font-medium lg:text-[16px]  text-[12px]'>
                            <p className=''>bugerking-cambodia.com</p>
                            <p>+855 51 34 829/ 16 10 168</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
