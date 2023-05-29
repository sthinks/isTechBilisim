import React, { useState, useEffect, useLayoutEffect } from "react";
import Banner from "../../components/Banner";
import Speech from "../../Assets/Orginal/Speech_Bubble.png";
import Loading from "../../Components/loading/Loading";
import { useTranslation } from "react-i18next";
function Orginal() {
    const url=""
    function handleFetch(){

    }
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    return !loading ? (
        <Loading />
    ) : (
        <>
            <Banner title={t("ProductOrginalityTitle")} />
            <div className="w-full flex justify-center items-center ">
                <div className="flex flex-row relative -top-40  justify-between items-center rounded-xl border-2 border-[#dcdcdc84]  bg-white w-1/2 p-10  max-lg:flex-col ">
                    <div>
                        <img src={Speech} alt="orginal-logo" />
                    </div>
                    <div className="flex flex-col items-center w-1/2 justify-between p-10 max-lg:w-full ">
                        <div>
                            <input
                                className="p-3 text-xl  rounded-xl border-2 border-black w-full mb-2 "
                                type="text"
                                id="msg"
                                name="msg"
                            />
                            <div>
                                <p>{t("ProductOrginalityP")}</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <div className="border-2 border-[#dcdcdc] bg-[#ff855a] p-2 w-36 text-center text-white mb-5 ">
                                    <button type="submit" onClick={handleFetch}>Sorgula</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orginal;
