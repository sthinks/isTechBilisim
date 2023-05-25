import React from "react";
import ContactPng from ".././../Assets/Contact/Contact.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

function ContactForm() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            msg: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(2).required("Zorunlu alan"),
            lastname: Yup.string().min(2).required("Zorunlu alan"),
            phone: Yup.string().min(2).required("Zorunlu alan"),
            subject: Yup.string(5).required("Zorunlu alan"),
            message: Yup.string(5).required("Zorunlu alan"),
        }),
        onSubmit: (values) => {
            console.log("form data", values);
        },
    });
    console.log(formik.values);
    return (
        <div className="flex flex-col justify-center items-center w-full  ">
            <form
                className="shadow-lg w-3/4 py-8 px-12  flex flex-col gap-10 border-2 border-[#dcdcdc]  bg-white max-md:p-0 max-md:justify-center max-md:items-center max-sm:p-0"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-row justify-between items-center max-md:px-12 max-md:py-6  ">
                    <h1 className="text-4xl text-[#ff855a] max-md:w-full max-md:text-center ">
                        {t("ContactTitle")}
                    </h1>
                    <div className="flex self-end">
                        <img
                            src={ContactPng}
                            alt="contact-photo"
                            className="max-md:w-full max-md:hidden"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-10 w-full max-lg:flex-col ">
                    <div className="flex flex-1 flex-col max-lg:w-full max-md:justify-center max-md:items-center ">
                        <div className="flex justify-start items-start max-md:w-3/4">
                            <label htmlFor="name">{t("ContactName")}</label>
                        </div>

                        <input
                            className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            type="text"
                            id="name"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="flex flex-1 flex-col max-lg:w-full max-md:justify-center max-md:items-center ">
                        <div className="flex justify-start items-start max-md:w-3/4">
                            <label htmlFor="surname">
                                {t("ContactSurName")}
                            </label>
                        </div>
                        <input
                            className="py-1 px-2  border-2 border-[#dcdcdc] max-md:w-3/4"
                            type="text"
                            id="surname"
                            name="surname"
                            onChange={formik.handleChange}
                            value={formik.values.surname}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col max-md:w-3/4">
                    <label htmlFor="email">E-mail</label>
                    <input
                        className="py-1 px-2 border-2 border-[#dcdcdc] "
                        type="email"
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="w-full flex flex-col py-6 max-md:w-3/4">
                    <label htmlFor="message">{t("ContactMsg")}</label>
                    <input
                        className="p-7 border-2 border-[#dcdcdc]"
                        type="text"
                        id="msg"
                        name="msg"
                        onChange={formik.handleChange}
                        value={formik.values.msg}
                    />
                </div>
                <div className="border-2 border-[#dcdcdc] bg-[#ff855a] p-2 w-36 text-center text-white mb-5 ">
                    <button type="submit">{t("ContactSendMsg")}</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;
