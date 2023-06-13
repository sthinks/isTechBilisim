import React, { useState } from "react";
import support from "../../assets/fixedContact/destek.png";
import phone from "../../assets/fixedContact/phonefix.png";
import wp from "../../assets/fixedContact/wp.png";
import { useTranslation } from "react-i18next";
import "./fixedContact.css";

function FixedContact() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const { t, i18n } = useTranslation();
    return (
        <div className="max-md:hidden">
            <div className="fixed z-40 right-4 top-[120px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                >
                    <img
                        className={
                            hover2
                                ? "kay w-[45px] h-[45px] cursor-pointer right-[2%]"
                                : "w-[45px] h-[45px] cursor-pointer"
                        }
                        src={support}
                        alt="WhatsApp"
                    />
                    <div
                        className={
                            !hover2
                                ? "hidden"
                                : "kaydirilan-div visible bg-[#FF855A] py-2 px-5 shadow-md rounded-sm w-40"
                        }
                    >
                        <a className="text-white" href="/bayilik">
                            {i18n.language === "tr" ? "Bayilik" : "Franchise"}
                        </a>
                    </div>
                </div>
            </div>
            <div className="fixed z-40 right-4 top-[170px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                >
                    <img
                        className={
                            hover1
                                ? "kay cursor-pointer right-[2%] w-[45px] h-[45px]"
                                : "cursor-pointer w-[45px] h-[45px]"
                        }
                        src={wp}
                        alt="WhatsApp"
                    />
                    <div
                        className={
                            !hover1
                                ? "hidden"
                                : "kaydirilan-div visible bg-[#FF855A] py-2 px-5 shadow-md rounded-sm w-40"
                        }
                    >
                        <a
                            className="text-white"
                            href="https://wa.me/+905464110431"
                        >
                            0546 411 04 31
                        </a>
                    </div>
                </div>
            </div>
            <div className="fixed z-40 right-4 top-[220px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                >
                    <img
                        className={
                            hover3
                                ? "kay cursor-pointer right-[2%] w-[45px] h-[45px]"
                                : "w-[45px] h-[45px] cursor-pointer"
                        }
                        src={phone}
                        alt="WhatsApp"
                    />
                    <div
                        className={
                            !hover3
                                ? "hidden"
                                : "kaydirilan-div visible bg-[#FF855A] py-2 px-5 shadow-md rounded-sm w-40"
                        }
                    >
                        <a className="text-white" href="tel:02122962222">
                            0212 296 22 22
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixedContact;
