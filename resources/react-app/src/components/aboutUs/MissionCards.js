import React from "react";

function MissionCards(props) {
    return (
        <li className="flex justify-start items-center flex-col ">
            <img src={props.src} alt="photo" />
            <p className="text-center p-5 w-3/4 ">{props.content}</p>
        </li>
    );
}

export default MissionCards;
