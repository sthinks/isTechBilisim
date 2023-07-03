import React from "react";
import ContactPng from ".././../Assets/Contact/Contact.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import allService from "../../services/allService";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactHome() {
    const notify = () => toast("Mesajınız Gönderildi!");
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
            phone: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(2).required("Zorunlu alan"),
            lastname: Yup.string().min(2).required("Zorunlu alan"),
            email: Yup.string(5).required("Zorunlu alan"),
            message: Yup.string(5).required("Zorunlu alan"),
            phone: Yup.number().required("Zorunlu alan"),
        }),
        onSubmit: async (values, { resetForm }) => {
            notify();

            const result = await allService.postContact(values);
            resetForm();
        },
    });

    return (
        <div className="flex flex-col justify-center items-center w-full  ">
            <ToastContainer />
            <form
                className="shadow-lg w-2/4 py-8 px-12 z-40 flex flex-col gap-5 border-2 border-[#dcdcdc]  bg-white max-md:p-0 max-md:justify-center max-md:items-center max-md:w-[90%] max-sm:p-0"
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-row justify-between items-center max-md:px-12 max-md:py-6  ">
                    <h1 className="text-4xl text-[#ff855a] max-md:w-full max-md:text-center ">
                        {t("ContactTitle")}
                    </h1>
                    <div className="flex self-end">
                        <img
                            src={ContactPng}
                            alt="contactphoto"
                            className="w-[80%] max-md:hidden"
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-10 w-full max-lg:flex-col max-md:gap-5 ">
                    <div className="flex flex-1 flex-col max-lg:w-full max-md:justify-center max-md:items-center ">
                        <div className="flex justify-start items-start max-md:w-3/4">
                            <label
                                htmlFor="name"
                                className="text-xl font-medium mb-1"
                            >
                                {t("ContactName")}
                            </label>
                        </div>

                        <input
                            className={
                                formik.touched.message && formik.errors.lastname
                                    ? "py-1 h-[50px] px-2 border-2 border-red-700 max-md:w-3/4"
                                    : "py-1 h-[50px] px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            }
                            id="firstname"
                            name="firstname"
                            type="textarea"
                            placeholder={t("PlaceHolderName")}
                            onChange={formik.handleChange}
                            value={formik.values.firstname}
                        />
                    </div>
                    <div className="flex flex-1 flex-col max-lg:w-full max-md:justify-center max-md:items-center ">
                        <div className="flex justify-start items-start max-md:w-3/4">
                            <label
                                htmlFor="surname"
                                className="text-xl font-medium mb-1"
                            >
                                {t("ContactSurName")}
                            </label>
                        </div>
                        <input
                            className={
                                formik.touched.message &&
                                formik.errors.firstname
                                    ? "py-1 h-[50px] px-2 border-2 border-red-700 max-md:w-3/4"
                                    : "py-1 h-[50px] px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                            }
                            id="lastname"
                            name="lastname"
                            type="textarea"
                            placeholder={t("PlaceHolderSurName")}
                            onChange={formik.handleChange}
                            value={formik.values.lastname}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col max-md:w-3/4">
                    <label htmlFor="email" className="text-xl font-medium mb-1">
                        E-mail
                    </label>
                    <input
                        className={
                            formik.touched.message && formik.errors.email
                                ? "py-1 h-[50px] px-2 border-2 border-red-700 "
                                : "py-1 h-[50px] px-2 border-2 border-[#dcdcdc]"
                        }
                        id="email"
                        name="email"
                        type="textarea"
                        placeholder="Mail"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="w-full flex flex-col max-md:w-3/4">
                    <label htmlFor="email" className="text-xl font-medium mb-1">
                        {t("phone")}
                    </label>
                    <input
                        className={
                            formik.touched.message && formik.errors.phone
                                ? "py-1 h-[50px] px-2 border-2 border-red-700 "
                                : "py-1 h-[50px] px-2 border-2 border-[#dcdcdc]"
                        }
                        id="phone"
                        name="phone"
                        type="textarea"
                        placeholder="Phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </div>
                <div className="w-full flex flex-col max-md:w-3/4">
                    <label
                        htmlFor="message"
                        className="text-xl font-medium mb-1"
                    >
                        {t("ContactMsg")}
                    </label>
                    <input
                        className={
                            formik.touched.message && formik.errors.message
                                ? "px-2 py-4 border-2 border-red-700 "
                                : "px-2 py-4 border-2 border-[#dcdcdc]"
                        }
                        id="message"
                        name="message"
                        type="textarea"
                        placeholder={t("PlaceHolderMessage")}
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    />
                </div>

                <button
                    type="submit"
                    className="border-2 border-[#dcdcdc] bg-[#ff855a] p-2 w-36 text-center text-white mb-5 "
                >
                    {t("ContactSendMsg")}
                </button>
            </form>
        </div>
    );
}

export default ContactHome;
