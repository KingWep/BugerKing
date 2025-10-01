import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="relative w-full md:h-[400px] h-[350px]">
      {/* Overlay Title */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
        <h1 className="lg:text-[40px] text-[25px] font-bold animate-bounce">Order in with Pickup or</h1>
        <h1 className="lg:text-[70px] text-[45px] font-serif font-extrabold animate-pulse" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">Through Delivery</h1>
        <div className="md:mt-10 mt-8 flex gap-3">
          <button className="px-3 py-2 md:font-semibold font-medium bg-red-700 text-white rounded-full hover:bg-green-400 duration-300" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            Order Pickups
          </button>
          <button className="px-3 py-2 md:font-semibold font-medium bg-orange-400 text-white rounded-full  hover:bg-green-400 duration-300" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            Order Delivery
          </button>
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full z-0"
      >
        <SwiperSlide>
          <img src="/img/banner1.png" alt="" className="w-full h-[450px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner2.png" alt="" className="w-full h-[450px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/banner4.png" alt="" className="w-full h-[450px] object-cover" />
        </SwiperSlide><SwiperSlide>
          <img src="/img/banner3.png" alt="" className="w-full h-[450px] object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
