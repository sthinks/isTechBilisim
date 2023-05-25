import React, { useState } from "react";
import support from "../../assets/fixedContact/destek.png";
import phone from "../../assets/fixedContact/phonefix.png";
import wp from "../../assets/fixedContact/wp.png";
import "./fixedContact.css";

function FixedContact() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    return (
        <div>
            <div className="fixed z-50 right-0 top-[100px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover2(true)}
                    onMouseLeave={() => setHover2(false)}
                >
                    <img
                        className={
                            hover2
                                ? "kay w-full cursor-pointer right-[2%]"
                                : "w-full cursor-pointer"
                        }
                        src={support}
                        alt="WhatsApp"
                    />
                    <div
                        className={
                            !hover2
                                ? "hidden"
                                : "kaydirilan-div visible bg-white py-2 px-5"
                        }
                    >
                        05367161558
                    </div>
                </div>
            </div>
            <div className="fixed z-50 right-0 top-[150px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover1(true)}
                    onMouseLeave={() => setHover1(false)}
                >
                    <img
                        className={
                            hover1
                                ? "kay w-full cursor-pointer right-[2%]"
                                : "w-full cursor-pointer"
                        }
                        src={wp}
                        alt="WhatsApp"
                    />
                    <div
                        className={
                            !hover1
                                ? "hidden"
                                : "kaydirilan-div visible bg-white py-2 px-5"
                        }
                    >
                        05367161558
                    </div>
                </div>
            </div>
            <div className="fixed z-50 right-0 top-[200px]">
                <div
                    className="flex justify-center items-center mt-2"
                    onMouseEnter={() => setHover3(true)}
                    onMouseLeave={() => setHover3(false)}
                >
                    <img
                        className={
                            hover3
                                ? "kay w-full cursor-pointer right-[2%]"
                                : "w-full cursor-pointer"
                        }
                        src={phone}
                        alt="WhatsApp"
                    />
                    <div
                        className={
                            !hover3
                                ? "hidden"
                                : "kaydirilan-div visible bg-white py-2 px-5"
                        }
                    >
                        05367161558
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FixedContact;
