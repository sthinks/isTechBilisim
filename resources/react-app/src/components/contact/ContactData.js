import React from "react";
import Home from "../../Assets/Contact/home.png";
import Address from "../../Assets/Contact/Addres.png";
import Phone from "../../Assets/Contact/Phone.png";
import Fax from "../../Assets/Contact/Fax.png";
import { useTranslation } from "react-i18next";

function ContactData() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    }
    const contact_datas = [
        {
            id: 0,
            title: t("CompanyTitle"),
            description: t("CompnayTitleDescription"),
            src: Home,
        },
        {
            id: 1,
            title: t("CompanyAdress"),
            description:t("CompanyAdressDescriotion"),
            src: Address,
        },
        {
            id: 2,
            title: t("CompanyTel"),
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
