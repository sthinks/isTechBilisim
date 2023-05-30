import React from "react";

function PopUpDeneme({ response, name, setOpen }) {
    return (
        <li className="rounded-lg z-49 relative bg-white p-10 border 2 border-black ">
            <button
                className="absolute top-0 right-1 "
                onClick={() => setOpen(false)}
            >
                X
            </button>
            {name && <h1 className="text-black text-5xl"> Ürün Adı : {name}</h1>}

            <p className="text-black text-5xl">
                {response === 200
                    ? "Ürününüz Orjinal"
                    : "Ürününüz Orjinal Değil"}
            </p>
        </li>
    );
}

export default PopUpDeneme;
