import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RestaurantLoc from "../Components/Restaurant/RestaurantLoc";

export default function Restaurant() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="w-full pt-[60px] pb-10">
        <h1 className="text-red-100 font-bold text-[30px] flex items-center justify-center w-full h-[100px] bg-red-950" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">Restaurant</h1>
        <div className="md:w-[60%] w-[80%]  m-auto flex md:gap-2 gap-1 justify-center md:mt-16 mt-5">
            <input type="text" placeholder='Search'
            className="w-[90%] px-3 py-2 rounded-[16px] bg-white/20 text-black duration-300 ease-in-out
                                placeholder-black/70 border-[1px] border-gray-800 
                                focus:outline-none focus:border-none focus:ring-2 focus:ring-orange-400
                                text-sm sm:text-base"  data-aos="zoom-in-right" />
          <button className="w-[10%] flex justify-center items-center px-10 text-[16px] bg-red-950 hover:bg-red-950/70 duration-300 text-red-100 font-semibold rounded-[16px]"  data-aos="zoom-in-left">Search</button>
        </div>
        <div className="lg:mt-16 md:mt-10 mt-7">
          <RestaurantLoc/>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}