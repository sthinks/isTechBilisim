import React from "react";
import Home from "../../Assets/Contact/home.png";
import Address from "../../Assets/Contact/Addres.png";
import Phone from "../../Assets/Contact/Phone.png";
import { AiOutlineMail } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function ContactData() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
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
            description: t("CompanyAdressDescriotion"),
            src: Address,
        },
        {
            id: 2,
            title: t("CompanyTel"),
            description: "0212 296 22 22",
            src: Phone,
        },
    ];

    return (
        <ul className="py-20">
            {contact_datas.slice(0, 2).map((item) => (
                <li
                    className="flex flex-row justify-evenly max-sm:text-sm"
                    style={{ gap: "10px", padding: "10px" }}
                >
                    <div className="li-left">
                        <img src={item.src} alt="itemphoto" />
                    </div>
                    <div className="w-3/5 ">
                        <div className="font-bold">
                            <h2>{item.description}</h2>
                        </div>
                    </div>
                </li>
            ))}
            {contact_datas.slice(2, 3).map((item) => (
                <li
                    className="flex flex-row justify-evenly max-sm:text-sm"
                    style={{ gap: "10px", padding: "10px" }}
                >
                    <div className="li-left">
                        <img src={item.src} alt="itemphoto" />
                    </div>
                    <div className="w-3/5 ">
                        <div className="font-bold">
                            <a href={`tel:${item.description}`}>
                                <h2>{item.description}</h2>
                            </a>
                        </div>
                    </div>
                </li>
            ))}
            <li
                className="flex flex-row justify-evenly max-sm:text-sm"
                style={{ gap: "10px", padding: "10px" }}
            >
                <div className="text-2xl bg-[#ff855a] rounded-3xl text-white p-2  max-md:my-3 cursor-pointer hover:scale-105 delay-150 duration-150">
                    <AiOutlineMail />
                </div>
                <div className="w-3/5 ">
                    <div className="font-bold">
                        <a href="mailto:info@istechiletisim.com">
                            <h2>info@istechiletisim.com</h2>
                        </a>
                    </div>
                </div>
            </li>
        </ul>
    );
}

export default ContactData;
