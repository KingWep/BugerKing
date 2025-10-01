import BurgerMenu from "../Components/Home/BurgerMenu";
import MBurgerMenu from "../Components/Menu/MBurgerMenu";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function Menu() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="w-full pt-[60px] pb-10">
        <h1 className="text-red-100 font-bold lg:text-[40px] md:text-[30px] text-[25px] flex items-center justify-center w-full lg:h-[150px] md:h-[90px] h-[80px] bg-red-700" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">All Menu</h1>
        <div className="w-[70%] items-center  justify-start m-auto mt-10 hidden lg:flex">
          <h1 className="text-red-100  font-bold lg:text-[25px] md:text-[22px] text-[18px] px-3 py-1 bg-red-600 rounded-tr-[16px] rounded-bl-[16px]" data-aos="fade-right">FAVORITE</h1>

        </div>
        <div className="lg:mt-5 mt-10">
          <BurgerMenu />
        </div>
        <div className="w-[70%] items-center justify-start m-auto mt-10 hidden lg:flex">
          <h1 className="text-red-100 font-bold lg:text-[22px] md:text-[25px] text-[18] px-3 py-1 bg-red-600 rounded-tr-[16px] rounded-bl-[16px] " data-aos="fade-right">POPULAR</h1>
        </div>
        <div className="lg:mt-5 mt-10">
          <MBurgerMenu />
        </div>
      </div>
    </>
  )
}