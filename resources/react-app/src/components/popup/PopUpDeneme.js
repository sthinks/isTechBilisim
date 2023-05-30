import React from "react";

function PopUpDeneme({ response, name, setOpen }) {
    return (
        <li className="rounded-lg z-49 relative bg-white p-10 border-2 border-[#dcdcdc84] ">
            <button
                className="absolute text-3xl top-0  right-1 cursor-pointer"
                onClick={() => setOpen(false)}
            >
                X
            </button>
            {name && (
                <h1 className="text-black text-3xl text-center"> {name}</h1>
            )}

            <p className="text-black text-5xl text-center">
                {response === 200
                    ? "Ürününüz Orjinal"
                    : "Ürününüz Orjinal Değil"}
            </p>
        </li>
    );
}

export default PopUpDeneme;
