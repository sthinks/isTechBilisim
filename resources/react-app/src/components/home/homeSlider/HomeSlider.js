import React, { useEffect, useState } from "react";
import "./homeSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import allService from "../../../services/allService";

function HomeSlider() {
    const [sliderImage, setSliderImage] = useState();
    const getAllSlider = async () => {
        try {
            const result = await allService.getAllHomeSlider();
            setSliderImage(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useEffect(() => {
        getAllSlider();
    }, []);
    return (
        <div className="w-full h-[650px] max-xl:h-[450px] max-lg:h-[300px] max-sm:h-[200px]">
            <Swiper
                direction={"vertical"}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {sliderImage?.map((item, i) => (
                    <SwiperSlide key={i}>
                        <img src={item.image} alt={item.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HomeSlider;
