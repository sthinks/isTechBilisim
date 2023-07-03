import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
function BrandComponent({ salesPoint }) {
    const { t, i18n } = useTranslation();
    const [drag, setDrag] = useState();
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        arrow: true,
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
    const dontDragHandler = (pageX, slug) => {
        if (drag === pageX) {
            navigate(`/brand/${slug}`);
        }
    };
    return (
        <>
            <div className="container mx-auto max-md:px-6 flex justify-center items-center mt-12">
                <p className="text-black text-4xl font-normal text-center">
                    {t("HomeMarka")}
                </p>
            </div>
            <div className="container mx-auto max-md:px-6 px-12 mt-8">
                <Slider {...settings}>
                    {salesPoint?.map((item, i) => (
                        <div
                            key={i}
                            className="w-80 h-80 relative slider-image-comp  justify-center items-center"
                        >
                            <div
                                className="w-5/6 h-5/6  flex justify-center items-center shadow-isTech2 cursor-pointer relative"
                                onMouseDown={(e) => setDrag(e.pageX)}
                                onMouseUp={(e) =>
                                    dontDragHandler(e.pageX, item.slug)
                                }
                            >
                                <div className="absolute w-full h-full bg-black opacity-25" />
                                <img
                                    className="w-full h-full object-cover"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <p className="absolute text-4xl text-white font-semibold">
                                    {item.brand_name}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default BrandComponent;
