import React, { useEffect, useState } from "react";
import salesPointService from "../../services/allService";
import Banner from "../../components/Banner";

function SalesPoint() {
    const [salesPoint, setSalesPoint] = useState([]);
    const getSalesPoint = async () => {
        try {
            const result = await salesPointService.getSalesPoint();
            setSalesPoint(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useEffect(() => {
        getSalesPoint();
    }, []);
    return (
        <>
            <Banner title={"SATIŞ NOKTALARI"} />
            <div className="container mx-auto max-md:px-6">
                <div className="flex flex-wrap relative -top-48">
                    {salesPoint &&
                        salesPoint?.map((item) => (
                            <div className="w-1/4 max-lg:w-2/4 max-sm:w-full px-1 flex flex-col flex-wrap mt-5 cursor-pointer hover:-translate-y-2 transition duration-300 ease-out">
                                <div className="bg-white h-96 max-md:h-56 shadow-isTech flex justify-center items-center ">
                                    <img src={item.image} alt={item.name} />
                                </div>
                            </div>
                        ))}
                </div>
                <div className="w-full flex justify-start -mt-20 mb-10 items-start">
                    <p>
                        Türkiye’nin her yerinden ürünlerimize ulaşabilirsiniz.
                    </p>
                </div>
            </div>
        </>
    );
}

export default SalesPoint;
