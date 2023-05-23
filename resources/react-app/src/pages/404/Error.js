import React from "react";
import Error_Icon from "../../Assets/404/404-istech.jpg";

function Error() {
    return (
        <div className="container mx-auto flex flex-row justify-between  max-md:flex-col-reverse max-md:justify-center max-md:items-center">
            <div className="flex flex-col  gap-12 justify-center flex-1">
                <div className="flex flex-col justify-between gap-8 p-5 max-lg:ml-24 max-md:ml-0">
                    <h1 className="text-4xl text-black w-3/4 h-1/2 tracking-wider  ">
                        Aradığınız sayfa kaldırılmış,adı değiştirilmiş veya
                        geçici olarak kullanılmıyor olabilir.
                    </h1>
                    <button
                        type="button"
                        className="rounded-lg text-white bg-[#ff855a]  p-5 w-40 hover:bg-[#2B2B2B]"
                    >
                        Ana Sayfaya Git
                    </button>
                </div>
            </div>
            <div className="flex items-center flex-1 ">
                <img
                    src={Error_Icon}
                    alt="404_photo"
                    className="w-full h-3/4 "
                />
            </div>
        </div>
    );
}

export default Error;
