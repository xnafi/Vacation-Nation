import React from "react";
import { useLoaderData } from "react-router-dom";
// import Carousal from "./Carousal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Mousewheel } from "swiper";



const Home = () => {

    const catagories = useLoaderData()
    console.log(catagories);

    return (
        <>
            <div className='flex w-full h-screen bgSet bg-cover bg-center px-10'>
                <div className="flex w-full h-full items-center justify-center flex-col md:flex-row">
                    <div className="w-1/2">
                        <SwiperSlide>
                            <div className="title" data-swiper-parallax="-300">
                                Slide 1
                            </div>
                            <div className="subtitle" data-swiper-parallax="-200">
                                Subtitle
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                    dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                    laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                    Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                    Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                    ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                    tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                                </p>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className="md:w-1/2 w-full lg:h-full h-1/2 flex justify-end items-end mb-4 ">

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
                            {
                                catagories.map((cata) =>
                                    <>
                                        <SwiperSlide className="rounded-2xl lg:h-1/2 h-full w-full">
                                            <img src={cata.image} className='h-full w-full rounded-2xl z-10 absolute' alt="" />
                                            <div className="w-full h-full justify-center items-center flex flex-col space-y-2">
                                                <button className="title relative z-40 text-center flex justify-center items-center rounded-md text-4xl font-bold py-3  bg-gray-900 px-10 text-white hover:bg-white hover:text-gray-900" data-swiper-parallax="-300">
                                                    {cata.name}
                                                </button>
                                                <button className="title relative z-40 text-center flex justify-center items-center rounded-md text-xl font-bold py-3  bg-gray-900 px-10 text-white hover:bg-white hover:text-gray-900" data-swiper-parallax="-300">
                                                    {`SELECT`}
                                                </button>
                                            </div>

                                        </SwiperSlide>
                                    </>)
                            }

                        </Swiper>
                    </div>


                </div>


            </div >




        </>

    )
}

export default Home