import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ReawardCard({img, title, description}) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="bg-orange-50 shadow-md rounded-lg overflow-hidden" data-aos="zoom-in-up">
                <div>
                    <img src={img} alt="" className="w-full object-cover" />
                </div>
                <div className='flex flex-col ml-3 pb-3 gap-2 mt-1'>
                    <h1 className='text-red-900 font-bold lg:text-[25px] text-[22px]'>{title}</h1>
                    <p className='text-orange-600 font-bold lg:text-[18px] text-[16px]'>{description}</p>
                </div>
            </div>
        </>
    );
}