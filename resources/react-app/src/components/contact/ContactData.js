import React from "react";
import Home from "../../Assets/Contact/home.png";
import Address from "../../Assets/Contact/Addres.png";
import Phone from "../../Assets/Contact/Phone.png";
import Fax from "../../Assets/Contact/Fax.png";

function ContactData() {
    const contact_datas = [
        {
            id: 0,
            title: "Şirket ünvan adı:",
            description: "İstech İletişim & Bilgi Teknolojileri",
            src: Home,
        },
        {
            id: 1,
            title: "Adres:",
            description:
                " Cihangir Mahallesi Güvercin Cad. No:2 Kapı No:96 Aktim 3 Ticaret Merkezi Avcılar / İstanbul",
            src: Address,
        },
        {
            id: 2,
            title: "Tel:",
            description: "0212 296 22 22",
            src: Phone,
        },
        {
            id: 3,
            title: "Fax:",
            description: "0212 939 67 70",
            src: Fax,
        },
    ];

    return (
        <ul style={{ padding: "20px" }}>
            {contact_datas.map((item) => (
                <li
                    className="flex flex-row justify-evenly max-sm:text-sm"
                    style={{ gap: "10px", padding: "10px" }}
                >
                    <div className="li-left">
                        <img src={item.src} alt="item-photo" />
                    </div>
                    <div className="w-3/5 ">
                        <div className="font-bold">
                            <h1> {item.title} </h1>
                            <h2>{item.description}</h2>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default ContactData;
