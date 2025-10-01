import { MdFastfood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import OfferMenu from "../Components/Offer/OfferMenu";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Offer(){
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return(
    <> 
      <div className="m-auto w-[90%] pt-[60px] pb-16">
        <div className="w-full"  data-aos="zoom-in-up">
          <img src="/img/Offer/BannerOffer.png" alt="" className=" object-fit-cover"/>
        </div>
        <div className="w-full flex justify-center gap-2 mt-5"  data-aos="zoom-in-up">
          <button className="bg-red-600 px-2 lg:px-3 py-1 md:py-2 flex justify-center items-center gap-2 rounded-[16px] text-red-100 lg:text-[15px] text-[12px] font-semibold" data-aos="zoom-in-right">
            <MdFastfood className="text-[20px]"/>
            Dine-in promotion</button>
          <button className="bg-red-600 px-2 lg:px-3 py-1 md:py-2 flex justify-center items-center gap-2 rounded-[16px] text-red-100 lg:text-[15px] text-[12px]  font-semibold" data-aos="zoom-in-left">
            <MdDeliveryDining className="text-[25px]"/>
            Delivery promotion</button>
        </div>
        <h1 className="text-red-600 lg:mt-8 lg:mb-8 mt-5 mb-5 font-bold lg:text-[40px] md:text-[30px] text-[25px] flex items-center justify-center w-full" data-aos="zoom-in-up">All Menu</h1>
        <OfferMenu/>
      </div>
    </>
  )
}