import React from "react";
import ContactPng from ".././../Assets/Contact/Contact.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import allService from "../../services/allService";
function ContactForm() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(2).required("Zorunlu alan"),
            lastname: Yup.string().min(2).required("Zorunlu alan"),
            email: Yup.string(5).required("Zorunlu alan"),
            message: Yup.string(5).required("Zorunlu alan"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const result = await allService.postContact(values);
            console.log(result);
            resetForm();
        },
    });

    return (
        <div className="flex flex-col justify-center items-center w-full  ">
            <form
                className="shadow-lg w-3/4 py-8 px-12 z-40 flex flex-col gap-10 border-2 border-[#dcdcdc]  bg-white max-md:p-0 max-md:justify-center max-md:items-center max-sm:p-0"
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
                            id="firstname"
                            name="firstname"
                            type="textarea"
                            placeholder="Mesaj:"
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
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
                            id="lastname"
                            name="lastname"
                            type="textarea"
                            placeholder="Mesaj:"
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col max-md:w-3/4">
                    <label htmlFor="email">E-mail</label>
                    <input
                        className="py-1 px-2 border-2 border-[#dcdcdc] "
                        id="email"
                        name="email"
                        type="textarea"
                        placeholder="Mesaj:"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="w-full flex flex-col py-6 max-md:w-3/4">
                    <label htmlFor="message">{t("ContactMsg")}</label>
                    <input
                        className="p-7 border-2 border-[#dcdcdc]"
                        id="message"
                        name="message"
                        type="textarea"
                        placeholder="Mesaj:"
                        onChange={formik.handleChange}
                        value={formik.values.message}
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
