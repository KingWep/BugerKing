import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLocationDot } from "react-icons/fa6";

export default function RestaurantCard({name, operation, tel}) {
      useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    return (
        <>
            <div className='lg:px-10 md:px-8 py-3 shadow-lg flex flex-col gap-1 bg-orange-100 text-red-950 justify-center items-center border-[1px] border-red-950 rounded-lg' data-aos="zoom-in-up">
                <h1 className='lg:text-[20px] text-[18px] text-center font-bold'>{name}</h1>
                <p className='lg:text-[17px] text-[15px] font-bold text-orange-600'>Operation hrs |{operation} </p>
                <h1 className='lg:text-[20px] text-[16px] font-bold'>Tel :{tel}</h1>
                <p className='w-[50%] lg:mt-3 md:mt-2 h-[0.4px] bg-gray-400'></p>
                <button className='px-5 lg:py-[7px] md:py-[6px] py-1 mt-2 flex justify-center items-center gap-1 hover:bg-green-700 hover:text-red-100 duration-500 text-green-700 lg:text-[20px] text-[15px] font-bold border-[2px] border-green-700 rounded-[20px]'>
                    <FaLocationDot className='text-center lg:text-[25px] text-[20px]'/> 
                    <p>Derection</p>
                </button>
            </div>
        </>
    )
} 
