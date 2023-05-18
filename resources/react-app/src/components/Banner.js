import React from "react";

function Banner({ title, brand }) {
    return (
        <div
            className={
                title
                    ? "w-full h-[500px] bg-[#2B2B2B] flex justify-center items-start"
                    : "w-full h-[500px] bg-[#2B2B2B] flex justify-start items-start"
            }
        >
            {title && (
                <p className="text-white font-bold text-4xl mt-36">{title}</p>
            )}
            {brand && (
                <p className="text-white font-bold text-4xl mt-36 ml-44">
                    {brand}
                </p>
            )}
        </div>
    );
}

export default Banner;
