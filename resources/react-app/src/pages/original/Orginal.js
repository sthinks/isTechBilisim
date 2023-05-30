import React, { useState, useEffect, useLayoutEffect } from "react";
import Banner from "../../components/Banner";
import Speech from "../../Assets/Orginal/Speech_Bubble.png";
import Loading from "../../Components/loading/Loading";
import allService from "../../services/allService";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import PopUp from "../../components/popup/PopUp";
import PopUpDeneme from "../../components/popup/PopUpDeneme";
function Orginal() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [checkOut, setCheckOut] = useState(false);
    const [checkApi, setCheckApi] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const formik = useFormik({
        initialValues: {
            serial: "",
        },
        validationSchema: Yup.object({
            serial: Yup.string().min(12).required("Zorunlu alan"),
        }),
        onSubmit: async (values, { resetForm }) => {
            console.log("form data", values);

            const result = await allService.postCheckOrginal(values.serial);
            console.log("RESPONSE:", result.response);
            console.log(result.response);
            if (result.response === 200) {
                setOpen(true);
                setData(result);
            } else {
                setOpen(true);
                setData(result);
            }
        },
    });
    const { t, i18n } = useTranslation();
    const clickHandle = async (lang) => {
        await i18n.changeLanguage(lang);
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return !loading ? (
        <Loading />
    ) : (
        <>
            <Banner title={t("ProductOrginalityTitle")} />
            {open && (
                <PopUp
                    response={data.response}
                    setOpen={setOpen}
                    product={data.data}
                />
            )}
            <form
                className="w-full flex justify-center items-center "
                onSubmit={formik.handleSubmit}
            >
                <div className="flex flex-row relative -top-40  justify-between items-center rounded-xl border-2 border-[#dcdcdc84]  bg-white w-1/2 max-md:w-[90%] p-10 max-md:p-2  max-lg:flex-col ">
                    <div>
                        <img src={Speech} alt="orginal-logo" />
                    </div>
                    <div className="flex flex-col items-center w-1/2 justify-between p-10 max-lg:w-full ">
                        <div>
                            <input
                                className={
                                    formik.touched.serial &&
                                    formik.errors.serial
                                        ? "p-3 text-xl  rounded-xl border-2  border-red-700  w-full mb-2 "
                                        : "p-3 text-xl  rounded-xl border-2 border-black w-full mb-2 "
                                }
                                type="text"
                                id="serial"
                                name="serial"
                                onChange={formik.handleChange}
                                value={formik.values.serial}
                            />
                            <div>
                                <p>{t("ProductOrginalityP")}</p>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    className="border-2 bg-[#ff855a] p-2 w-36 text-center text-white mb-5 "
                                >
                                    {t("KontrolBtn")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Orginal;
