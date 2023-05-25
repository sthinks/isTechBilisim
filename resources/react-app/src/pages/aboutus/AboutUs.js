import React, { useLayoutEffect } from "react";

import Mission from "../../Components/aboutUs/Mission";
import { useTranslation } from "react-i18next";

function AboutUs() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="  bg-[#2b2b2b] text-center flex flex-col justify-center items-center text-white leading-6 ">
                <div className="container mx-auto p-10 ">
                    <h1 className="mb-7 text-4xl font-bold ">
                        {t("AboutUs_firstTitle")}
                    </h1>
                    <p>{t("AboutUs_firtsP")}</p>
                </div>
            </section>
            <Mission />
            <h1 className="text-center text-3xl font-bold my-5 mx-auto  ">
                {t("AboutUs_Vision")}
            </h1>
            <section className="bg-[#343434] text-white p-10">
                <div className="container mx-auto ">
                    <p className="text-center p-5 my-0 mx-auto">
                        {t("AboutUsVisionP")}
                    </p>
                </div>
            </section>
            <section>
                <h1 className="text-center mt-10 text-3xl font-bold py-0 px-5">
                    {t("AboutUsHistoryTitle")}
                </h1>
                <div className="container mx-auto ">
                    <p className="text-center font-xs py-3 px-5">
                        {t("AboutUsCompanyHistoryP")}
                    </p>
                </div>
            </section>
            <section>
                <div className="flex flex-col sm:flex-row justify-around mb-2 gap-3 :">
                    <div className="flex flex-1 flex-col">
                        <h1 className="text-center text-2xl p-2 ">
                            {t("AboutUsCompanyHistoryLeftTitle")}
                        </h1>

                        <p className="bg-[#ff855a] text-white text-center text-base px-10 py-14 ">
                            {t("AboutUsCompanyHistoryLeftP")}
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col">
                        <h1 className="text-center text-2xl p-2">
                            {t("AboutUsCompanyHistoryRightTitle")}
                        </h1>
                        <p className="bg-[#343434] text-white text-left text-base px-10 py-14">
                            {t("AboutUsCompanyHistoryRightP")}
                        </p>

                        <div className="flex flex-row gap-4 p-10 text-white">
                            <button
                                onClick={() => {
                                    clickHandle("tr");
                                }}
                                className="border-black bg-slate-700"
                            >
                                Turkçe
                            </button>
                            <button
                                onClick={() => {
                                    clickHandle("en");
                                }}
                                className="border-black bg-slate-600"
                            >
                                Ingılızce
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
