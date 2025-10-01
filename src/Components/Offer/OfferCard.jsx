import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function OfferCard({img, name, describe}) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
        <div className='bg-orange-50 rounded-lg shadow-md' data-aos="zoom-in-up">
            <div className=''>
                <img src={img} alt={name} className=' object-fit-cover'/>
            </div>
            <div className='flex justify-center items-center flex-col text-center pb-3'>
                <h1 className='text-red-900 font-bold lg:text-[28px] text-[22px]'>{name}</h1>
                <p className='text-red-900 font-medium lg:text-[18px] text-[16px]'>{describe}</p>
            </div>
        </div>
    </>
  )
}
