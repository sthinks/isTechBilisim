import React from "react";
import FakePng from "../../assets/orginal/fakepng.png";
import OrijinalPng from "../../assets/orginal/originalpng.png";
function PopUpDeneme({ response, name, setOpen }) {
    return (
        <li className="rounded-lg z-49 relative bg-white p-10 border-2 border-[#dcdcdc84] ">
            <button
                className="absolute text-3xl top-0  right-1 cursor-pointer"
                onClick={() => setOpen(false)}
            >
                X
            </button>
            <img
                className={response !== 200 ? "w-96 h-96 object-contain" : ""}
                src={response === 200 ? OrijinalPng : FakePng}
                alt="img"
            />
            <p className="text-black text-2xl text-center">
                {response === 200
                    ? "Ürününüz Orjinal"
                    : "Ürününüz Orjinal Değil"}
            </p>
            {name && (
                <h1 className="text-black text-5xl text-center"> {name}</h1>
            )}
        </li>
    );
}

export default PopUpDeneme;
