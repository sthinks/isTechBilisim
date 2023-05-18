import React, { useEffect, useState } from "react";
import salesPointService from "../../services/allService";
import Banner from "../../components/Banner";
import { useNavigate } from "react-router-dom";

function Brand() {
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(5);
    const [brand, setBrand] = useState([]);
    const navigate = useNavigate();
    const getAllBrand = async () => {
        try {
            const result = await salesPointService.getAllBrand();
            setBrand(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useEffect(() => {
        getAllBrand();
    }, []);
    return (
        <>
            <Banner title="MARKALAR" />
            <div className="container mx-auto max-md:px-6">
                {brand.length > 0 && (
                    <div className="flex justify-center flex-col items-center relative -top-48">
                        <div className="w-[80%] max-lg:w-full  flex justify-between items-center gap-2 ">
                            <div className="w-1/6 max-sm:hidden bg-[#FF855A] h-96" />
                            <div
                                className="w-5/6 max-sm:w-full h-96 relative cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                onClick={() =>
                                    navigate(`/brand/${brand[0].slug}`)
                                }
                            >
                                <div className="absolute bg-black opacity-50 hover:opacity-10 transition duration-300 ease-out w-full h-full" />
                                <img
                                    className="w-full object-cover h-96"
                                    src={brand[0].big_image}
                                    alt={brand[0].title}
                                />
                                <p className="absolute bottom-0 right-0 p-10 text-4xl text-white font-bold">
                                    {brand[0].brand_name}
                                </p>
                            </div>
                        </div>
                        <div className="w-[80%] max-lg:w-full flex justify-between items-center max-sm:flex-col gap-2 mt-4">
                            <div className="w-2/4 h-[550px] max-sm:h-[350px] max-sm:w-full flex flex-col gap-3 justify-between">
                                <div
                                    className="h-3/4 w-full relative cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                    onClick={() =>
                                        navigate(`/brand/${brand[1].slug}`)
                                    }
                                >
                                    <div className="absolute bg-black opacity-50 hover:opacity-10 transition duration-300 ease-out w-full h-full" />
                                    <img
                                        className="w-full object-cover h-full"
                                        src={brand[1].big_image}
                                        alt={brand[1].title}
                                    />
                                    <p className="absolute bottom-0 right-0 p-10 text-4xl text-white font-bold">
                                        {brand[1].brand_name}
                                    </p>
                                </div>
                                <div className="h-1/4 w-full bg-[#FF855A]" />
                            </div>
                            <div className="w-2/4 max-sm:w-full max-sm:flex-col-reverse h-[550px] max-sm:h-[350px] gap-3 flex flex-col justify-between">
                                <div className="h-1/4 w-full bg-[#343434]" />
                                <div
                                    className="h-3/4 w-full cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                    onClick={() =>
                                        navigate(`/brand/${brand[2].slug}`)
                                    }
                                >
                                    <div className="w-full h-full relative">
                                        <div className="absolute bg-black opacity-50 hover:opacity-10 transition duration-300 ease-out w-full h-full" />
                                        <img
                                            className="w-full h-full object-cover"
                                            src={brand[2].big_image}
                                            alt={brand[2].title}
                                        />
                                        <p className="absolute bottom-0 right-0 p-10 text-4xl text-white font-bold">
                                            {brand[2].brand_name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[80%] max-lg:w-full max-sm:flex max-sm:flex-col grid grid-cols-2 gap-2 mt-2">
                            {brand?.slice(3, index).map((item, i) => {
                                if (i % 2 === 0) {
                                    return (
                                        <div className="w-full h-[550px] max-sm:h-[350px] flex  flex-col gap-3 justify-between mt-2">
                                            <div
                                                className="h-3/4 w-full relative cursor-pointer hover:-translate-y-1 transition duration-300 ease-out max-sm:flex-col-reverse"
                                                onClick={() =>
                                                    navigate(
                                                        `/brand/${item.slug}`
                                                    )
                                                }
                                            >
                                                <div className="absolute bg-black opacity-50 hover:opacity-10 transition duration-300 ease-out w-full h-full" />
                                                <img
                                                    className="w-full object-cover h-full"
                                                    src={item.big_image}
                                                    alt={item.title}
                                                />
                                                <p className="absolute bottom-0 right-0 p-10 text-4xl text-white font-bold">
                                                    {item.brand_name}
                                                </p>
                                            </div>
                                            <div className="h-1/4 w-full bg-[#FF855A]" />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="w-full h-[550px] max-sm:h-[350px] flex flex-col max-sm:flex-col-reverse gap-3 justify-between mt-2">
                                            <div className="h-1/4 w-full bg-[#343434]" />
                                            <div className="h-3/4 w-full ">
                                                <div
                                                    className="w-full h-full relative cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                                    onClick={() =>
                                                        navigate(
                                                            `/brand/${item.slug}`
                                                        )
                                                    }
                                                >
                                                    <div className="absolute bg-black opacity-50 hover:opacity-10 transition duration-300 ease-out w-full h-full" />
                                                    <img
                                                        className="w-full h-full object-cover"
                                                        src={item.big_image}
                                                        alt={item.title}
                                                    />
                                                    <p className="absolute bottom-0 right-0 p-10 text-4xl text-white font-bold">
                                                        {item.brand_name}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        {index === 5 && (
                            <div className="w-[80%] flex justify-end mt-5">
                                <button
                                    className="text-2xl border-b-2 border-[#FF855A] hover:opacity-80 transition duration-300 ease-out"
                                    onClick={() => setIndex(1111)}
                                >
                                    Tüm markaları göster.
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Brand;
