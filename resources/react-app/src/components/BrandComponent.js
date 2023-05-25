import React, { useEffect, useState } from "react";
import allService from "../services/allService";
import { Link } from "react-router-dom";
function BrandComponent({ brand }) {
    return (
        <>
            <div className="container mx-auto max-md:px-6 flex justify-center items-center mt-12">
                <p className="text-black text-4xl font-normal">MARKALARIMIZ</p>
            </div>
            <div className="container mx-auto max-md:px-6 mt-10">
                <div className="flex  px-36 max-2xl:px-24 max-xl:px-2 max-md:px-8 gap-10 max-lg:flex-col justify-center items-center">
                    {brand?.map((item, i) => {
                        return (
                            item.home_page === "1" && (
                                <Link to={`/brand/${item.slug}`}>
                                    <div
                                        key={i}
                                        className="hover:-translate-y-1 transition duration-300 ease-out cursor-pointer w-[350px] h-[340px] max-sm:w-64 max-sm:h-64  relative flex justify-center items-center"
                                    >
                                        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-60 hover:opacity-10 transition duration-300 ease-out z-30" />
                                        <p className="absolute z-40 text-white text-5xl font-semibold">
                                            {item.brand_name}
                                        </p>
                                        <img
                                            className="w-full h-full object-cover"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                    </div>
                                </Link>
                            )
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default BrandComponent;
