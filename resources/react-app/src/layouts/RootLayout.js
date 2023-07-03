import React, { useState } from "react";
import { Link, Outlet, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FixedContact from "../components/fixedContact/FixedContact";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import allService from "../services/allService";
function RootLayout() {
    const [data, setData] = useState();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        getBlog();
    }, []);

    const getBlog = async () => {
        const result = await allService.getThreeBlog(i18n.language);
        setData(result);
    };

    return (
        <>
            <div className="w-full bg-[#343434] h-14 flex justify-center items-center">
                <div className="container mx-auto max-md:px-6 flex justify-between items-center h-10">
                    <p className="text-white text-lg font-normal max-sm:text-base">
                        {t("FooterOrjinal")}
                    </p>
                    <Link to={"/orjinal"}>
                        <button
                            className="bg-white px-8 py-1 rounded-3xl text-lg max-md:text-base"
                            type="button"
                        >
                            {t("HomeProductOrj")}
                        </button>
                    </Link>
                </div>
            </div>
            <Header data={data} />
            <FixedContact />
            <Outlet />
            <Footer />
        </>
    );
}

export default RootLayout;
