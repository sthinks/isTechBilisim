import React from "react";
import "./Contact.css";
import "../../Components/contact/ContactForm";
import ContactForm from "../../Components/contact/ContactForm";
import ContactBottom from "../../Components/contact/ContactBottom";
import Banner from "../../components/Banner";

function Contact() {
    return (
        <div className="relative flex justify-center flex-col items-center mb-10 h-100 ">
            <div className="bg-[#2b2b2b] w-full h-96">
                <Banner title={"İLETİŞİM"} />
            </div>
            <div className="h-1/5"></div>
            <div className="flex flex-col justify-center items-center relative -top-40 w-3/4  ccc h-3/4 max-md:w-full">
                <ContactForm />
                <ContactBottom />
            </div>
        </div>
    );
}

export default Contact;
