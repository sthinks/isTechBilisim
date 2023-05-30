import React from "react";
import PopUpDeneme from "./PopUpDeneme";
function PopUp({ product, setOpen,response }) {
    console.log("ürün:", product);
    return (
        <ul className="fixed bg-[#00000012] w-full h-full top-0 left-0 z-50 flex justify-center items-center">

            <PopUpDeneme setOpen = {setOpen} name={product} response = {response}/>
        </ul>
    );
}

export default PopUp;
