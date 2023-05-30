import "./Franchise.css";
import Clipath from "../../assets/Clip path group.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Banner from "../../components/Banner";
import Loading from "../../Components/loading/Loading";
import React, { useState, useEffect } from "react";
import allService from "../../services/allService";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Franchise() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const notify = () => toast("Mesajınız Gönderildi!");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            message: "",
            email: "",
            phone: "",
            subject: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(2).required("Zorunlu alan"),
            lastname: Yup.string().min(2).required("Zorunlu alan"),
            phone: Yup.string().min(2).required("Zorunlu alan"),
            subject: Yup.string(5).required("Zorunlu alan"),
            message: Yup.string(5).required("Zorunlu alan"),
        }),
        onSubmit: async (values, { resetForm }) => {
            notify();
            console.log("form data", values);
            const result = await allService.postFrenchies(values);
            resetForm();
        },
    });
    return !loading ? (
        <Loading />
    ) : (
        <>
            <ToastContainer />
            <Banner title={t("BayilikTitle")} />
            <div className="relative -top-48 container mx-auto   max-md:px-6">
                <form onSubmit={formik.handleSubmit} className="bayilik_form ">
                    <div className="bayilik_form_info">
                        <h1>{t("BayilikFormTitle")}</h1>
                        <div className="name_surname">
                            <div className="name_div ">
                                <label htmlFor="firstname">
                                    {t("BayilikFormName")}
                                </label>
                                <input
                                    className={
                                        formik.errors.firstname
                                            ? "py-1 px-2 border-2 border-red-700 max-md:w-3/4"
                                            : "py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    }
                                    type="text"
                                    id="firstname"
                                    firstname="firstname"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                />
                            </div>
                            <div className="name_div">
                                <label htmlFor="firstname">
                                    {t("BayilikFormSurName")}
                                </label>
                                <input
                                    className={
                                        formik.errors.lastname
                                            ? "py-1 px-2 border-2 border-red-700 max-md:w-3/4"
                                            : "py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    }
                                    type="text"
                                    id="lastname"
                                    firstname="lastname"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                />
                            </div>
                        </div>
                        <div className="e-mail">
                            <label htmlFor="email">
                                {t("BayilikFormMail")}
                            </label>
                            <input
                                className={
                                    formik.errors.email
                                        ? "py-1 px-2 border-2 border-red-700 "
                                        : "py-1 px-2 border-2 border-[#dcdcdc]"
                                }
                                type="email"
                                id="email"
                                firstname="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        <div className="name_surname">
                            <div className="name_div">
                                <label htmlFor="firstname">
                                    {t("BayilikFormPhone")}
                                </label>
                                <input
                                    className={
                                        formik.errors.phone
                                            ? "py-1 px-2 border-2 border-red-700 max-md:w-3/4"
                                            : "py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    }
                                    type="text"
                                    id="phone"
                                    firstname="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                            </div>
                            <div className="name_div">
                                <label htmlFor="firstname">
                                    {t("BayilikFormSubject")}
                                </label>
                                <input
                                    className={
                                        formik.errors.subject
                                            ? "py-1 px-2 border-2 border-red-700 max-md:w-3/4"
                                            : "py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    }
                                    type="text"
                                    id="subject"
                                    firstname="subject"
                                    onChange={formik.handleChange}
                                    value={formik.values.subject}
                                />
                            </div>
                        </div>
                        <div className="e-mail">
                            <label htmlFor="message">
                                {t("BayilikFormMsg")}
                            </label>
                            <input
                                className={
                                    formik.errors.message
                                        ? "p-4 border-2 border-red-700 "
                                        : "p-4 border-2 border-[#dcdcdc]"
                                }
                                type="text"
                                id="message"
                                firstname="message"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            />
                        </div>
                        <div className="mt-5 border-2 border-[#dcdcdc] bg-[#ff855a] p-2 w-36 text-center text-white mb-5 ">
                            <button type="submit">{t("ContactSendMsg")}</button>
                        </div>
                    </div>
                    <div className="bayilik_col_right">
                        <img src={Clipath} alt="bayilik_photo" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Franchise;
