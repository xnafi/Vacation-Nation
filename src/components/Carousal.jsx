import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import logo from '../assets/images/bg.jpg'
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Mousewheel, Navigation } from "swiper";
const Carousal = () => {
    return (
        <Swiper
            effect={"coverflow"}
            direction={"horizontal"}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={20}
            mousewheel={true}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            modules={[EffectCoverflow, Mousewheel]}
            className="mySwiper h-full md:h-1/2 w-full"
        >
            <SwiperSlide className="rounded-2xl lg:h-1/2 h-full w-full">

                <img src={logo} className='h-full rounded-2xl z-10 absolute' alt="" />

                <div className="title relative h-full z-40 text-center flex justify-center items-center " data-swiper-parallax="-300">
                    Slide 1
                </div>



            </SwiperSlide>
            <SwiperSlide className="rounded-2xl lg:h-1/2 h-full w-full"><img src={logo} className='h-full' alt="" /></SwiperSlide>
            <SwiperSlide className="rounded-2xl lg:h-1/2 h-full w-full"><img src={logo} className='h-full' alt="" /></SwiperSlide>
            <SwiperSlide className="rounded-2xl lg:h-1/2 h-full w-full"><img src={logo} className='h-full' alt="" /></SwiperSlide>

        </Swiper>

    )
}

export default Carousal