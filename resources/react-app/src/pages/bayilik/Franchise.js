import "./Franchise.css";
import Clipath from "../../assets/Clip path group.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import Banner from "../../components/Banner";
import Loading from "../../Components/loading/Loading";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
function Franchise() {
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            msg: "",
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
        onSubmit: (values) => {
            console.log("form data", values);
        },
    });
    return !loading ? (
        <Loading />
    ) : (
        <>
            <Banner title={t("BayilikTitle")} />
            <div className="relative -top-48 container mx-auto   max-md:px-6">
                <form onSubmit={formik.handleSubmit} className="bayilik_form ">
                    <div className="bayilik_form_info">
                        <h1>{t("BayilikFormTitle")}</h1>
                        <div className="name_surname">
                            <div className="name_div ">
                                <label htmlFor="name">
                                    {t("BayilikFormName")}
                                </label>
                                <input
                                    className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>
                            <div className="name_div">
                                <label htmlFor="name">
                                    {t("BayilikFormSurName")}
                                </label>
                                <input
                                    className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    onChange={formik.handleChange}
                                    value={formik.values.surname}
                                />
                            </div>
                        </div>
                        <div className="e-mail">
                            <label htmlFor="email">
                                {t("BayilikFormMail")}
                            </label>
                            <input
                                className="py-1 px-2 border-2 border-[#dcdcdc] "
                                type="email"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                        </div>
                        <div className="name_surname">
                            <div className="name_div">
                                <label htmlFor="name">
                                    {t("BayilikFormPhone")}
                                </label>
                                <input
                                    className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                />
                            </div>
                            <div className="name_div">
                                <label htmlFor="name">
                                    {t("BayilikFormSubject")}
                                </label>
                                <input
                                    className="py-1 px-2 border-2 border-[#dcdcdc] max-md:w-3/4"
                                    type="text"
                                    id="subject"
                                    name="subject"
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
                                className="p-7 border-2 border-[#dcdcdc]"
                                type="text"
                                id="msg"
                                name="msg"
                                onChange={formik.handleChange}
                                value={formik.values.msg}
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
