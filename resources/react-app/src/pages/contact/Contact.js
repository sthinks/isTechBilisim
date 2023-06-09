import React, { useLayoutEffect } from "react";
import "./Contact.css";
import ContactForm from "../../components/contact/ContactForm";
import ContactBottom from "../../components/contact/ContactBottom";
import Banner from "../../components/Banner";
import { useTranslation } from "react-i18next";

function Contact() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="relative flex justify-center flex-col items-center mb-10 h-100 ">
            <div className="bg-[#2b2b2b] w-full h-96">
                <Banner title={t("CONTACT")} />
            </div>
            <div className="h-1/5"></div>
            <div className="flex flex-col justify-center items-center relative -top-40 w-3/4  ccc h-3/4 max-md:w-full">
                 <ContactBottom />
                <ContactForm />

            </div>
        </div>
    );
}

export default Contact;
