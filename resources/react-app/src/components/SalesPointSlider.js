import React, { useEffect, useRef, useState } from "react";
import allService from "../services/allService";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
function SalesPointSlider({ salesPoint }) {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    arrow: false,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrow: false,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                    dots: false,
                },
            },
        ],
    };
    const navigate = useNavigate();

    return (
        <>
            <div className="container mx-auto max-md:px-6 flex justify-center items-center mt-12">
                <p className="text-black text-4xl font-normal text-center">
                    SATIŞ NOKTALARI
                </p>
            </div>
            <div className="container mx-auto max-md:px-6 px-12 mt-8">
                <Slider {...settings}>
                    {salesPoint?.map((item, i) => (
                        <div
                            key={i}
                            className="w-64 h-64 relative slider-image-comp  justify-center items-center"
                        >
                            <div
                                className="w-5/6 h-5/6  flex justify-center items-center shadow-isTech2 cursor-pointer"
                                onClick={() => navigate("/satis-noktalari")}
                            >
                                <img
                                    className="w-full h-full object-scale-down"
                                    src={item.image}
                                    alt={item.title}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default SalesPointSlider;
