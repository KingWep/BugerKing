import RendeemReward from "../Components/Reward/RendeemReward";
import RewardData from "../Components/Reward/RewardData";
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Reward() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="w-full pt-[60px] pb-10 bg-orange-100  text-red-900  bg-center" >
        {/* bg-[url('/img/Reward/BgReward.png')] */}
        <div className="w-[90%] m-auto ">
          <div className="w-full flex justify-center items-center md:pt-10 pt-8 md:pb-16 pb-10 bg-orange-50 px-5 rounded-b-lg relative" data-aos="zoom-in-up">
            <div className="w-1/2 h-full flex flex-col gap-0 text-white ">
              <h1 className="text-red-600 font-bold md:text-[25px] text-[15px]" data-aos="zoom-in-right">Crouwn Reward</h1>
              <h1 className="text-orange-400 font-extrabold md:text-[40px] text-[25px]"data-aos="zoom-in-left">Earn</h1>
              <h1 className="text-orange-400 font-extrabold md:text-[40px] text-[25px]"data-aos="zoom-in-right">Crown.</h1>
              <h1 className="text-red-900 font-extrabold md:text-[35px] text-[15px]" data-aos="zoom-in-left">Rendeem Reward.</h1>
            </div>
            <div className="w-1/2 h-full">
              <img src="/img/Reward/menubanner.png" alt="" data-aos="zoom-in-left"/>
            </div>
            <div className="flex text-orange-400 md:text-[20px] text-[10px] font-semibold md:px-5 px-3 items-center absolute bottom-0 left-0 bg-red-950 w-full md:h-[50px] h-[25px] rounded-lg" data-aos="zoom-in-right">
              Collect Crown,Win Your Rewards
            </div>
          </div>
          <h1 className="text-center font-extrabold lg:text-[40px] md:text-[30px] text-[25px] md:pb-5 pb-3 mt-2 " data-aos="zoom-in-up">How it work</h1>
          <RewardData/>
          <h1 className="text-center font-extrabold lg:text-[40px] md:text-[30px] text-[25px] md:pb-5 pb-3 mt-5 " data-aos="zoom-in-up">Rendeem Rewards</h1>
          <RendeemReward/>
        </div>
        
      </div>
    </>
  )
}
