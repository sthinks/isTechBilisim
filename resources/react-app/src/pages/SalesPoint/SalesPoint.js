import React, { useEffect, useLayoutEffect, useState } from "react";
import salesPointService from "../../services/allService";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loading from "../../Components/loading/Loading";

function SalesPoint() {
    const [loading, setLoading] = useState(false);
    const [salesPoint, setSalesPoint] = useState([]);
    const { t, i18n } = useTranslation();
    const getSalesPoint = async () => {
        try {
            const result = await salesPointService.getSalesPoint();
            setSalesPoint(result);
            if (result) {
                setLoading(true);
            }
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useEffect(() => {
        getSalesPoint();
    }, []);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return !loading ? (
        <Loading />
    ) : (
        <>
            <Banner title={t("HomeSales")} />
            <div className="container mx-auto max-md:px-6">
                <div className="flex flex-wrap relative -top-48">
                    {salesPoint &&
                        salesPoint?.map((item) =>
                            item.url != null ? (
                                <Link
                                    target="_blank"
                                    to={`${item.url}`}
                                    className="w-1/4 max-lg:w-2/4 max-sm:w-full"
                                >
                                    <div className="w-full px-1 flex flex-col flex-wrap mt-5 cursor-pointer hover:-translate-y-2 transition duration-300 ease-out">
                                        <div className="bg-white h-96 max-md:h-56 shadow-isTech flex justify-center items-center ">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                        </div>
                                    </div>
                                </Link>
                            ) : (
                                <div className="w-1/4 max-lg:w-2/4 max-sm:w-full px-1 flex flex-col flex-wrap mt-5 cursor-pointer hover:-translate-y-2 transition duration-300 ease-out">
                                    <div className="bg-white h-96 max-md:h-56 shadow-isTech flex justify-center items-center ">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                </div>
                            )
                        )}
                </div>
                <div className="w-full flex justify-start -mt-20 mb-10 items-start">
                    <p>{t("SalesPage")}</p>
                </div>
            </div>
        </>
    );
}

export default SalesPoint;
