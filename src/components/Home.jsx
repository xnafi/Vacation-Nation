import React from "react";
import { SwiperSlide } from "swiper/react";
import Carousal from "./Carousal";
// Import Swiper React components


const Home = () => {
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
                        <Carousal />
                    </div>
                </div>


            </div >

        </>

    )
}

export default Home