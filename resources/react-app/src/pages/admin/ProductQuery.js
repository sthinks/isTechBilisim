import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";
import { useFormik } from "formik";
import * as Yup from "yup";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ProductQuery() {
    const [searchData, setSearchData] = useState(null);
    const [dataState, setDataState] = useState(null);
    const [skeleton, setSkeleton] = useState(false);
    const formik = useFormik({
        initialValues: {
            serial: "",
        },
        validationSchema: Yup.object({
            serial: Yup.string().min(6).required("Zorunlu alan"),
        }),
        onSubmit: async (values, { resetForm }) => {
            setSkeleton(true);
            try {
                const searchResult = await adminService.postCheckOrginalAdmin(
                    values.serial
                );
                setSearchData(searchResult.data);
                setDataState(true);
                if (searchResult.response === 200) {
                    setDataState(true);
                    setSkeleton(false);
                } else {
                    setDataState(false);
                    setSkeleton(false);
                }
            } catch (error) {
                console.log(error);
                setDataState(false);
                setSkeleton(false);
            }
        },
    });

    const fixDate = (date) => {
        var tarih = new Date(date);
        var yeniTarih = tarih.toLocaleDateString("tr-TR");
        return yeniTarih;
    };
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        className="block w-full p-4 pl-10 text-sm text-black  border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-100  focus:border-gray-100  dark:placeholder-gray-400 "
                        placeholder="Seri numarası giriniz."
                        id="serial"
                        name="serial"
                        onChange={formik.handleChange}
                        value={formik.values.serial}
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute right-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                        Ara
                    </button>
                </div>
            </form>
            {skeleton ? (
                <div
                    style={{
                        border: "1px solid #ccc",
                        display: "block",
                        lineHeight: 2,
                        padding: "1rem",
                        marginBottom: "0.5rem",
                        width: "100%",
                        display: "flex",
                    }}
                    className=" bg-slate-600 opacity-10 mt-5 rounded-xl relative overflow-x-auto shadow-md max-lg:flex-col"
                >
                    <div className="w-2/4">
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                    </div>
                    <div className="w-2/4">
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                        <Skeleton
                            className="bg-black opacity-25 p-2 mt-1"
                            duration={5}
                            height={52}
                        />
                    </div>
                </div>
            ) : (
                dataState &&
                searchData && (
                    <div className="bg-red mt-5 rounded-xl relative overflow-x-auto shadow-md">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                            <tbody>
                                <tr className="text-xs text-gray-700  bg-gray-50 max-md:flex max-md:flex-col">
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-lg bg-gray-300"
                                    >
                                        SERİ NUMARASI:
                                    </th>
                                    <td
                                        scope="col"
                                        className="px-6 py-3  text-lg"
                                    >
                                        {searchData?.seri_no}
                                    </td>
                                </tr>
                                <tr className="text-xs text-gray-700  bg-gray-50 max-md:flex  max-md:flex-col">
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-lg bg-gray-300"
                                    >
                                        FİRMA:
                                    </th>
                                    <td
                                        scope="col"
                                        className="px-6 py-3  text-lg"
                                    >
                                        {searchData?.firma_adi}
                                    </td>
                                </tr>
                                <tr className="text-xs text-gray-700  bg-gray-50 max-md:flex  max-md:flex-col">
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-lg bg-gray-300"
                                    >
                                        ÜRÜN ADI:
                                    </th>
                                    <td
                                        scope="col"
                                        className="px-6 py-3  text-lg"
                                    >
                                        {searchData?.urun_adi}
                                    </td>
                                </tr>
                                <tr className="text-xs text-gray-700  bg-gray-50 max-md:flex  max-md:flex-col">
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-lg bg-gray-300"
                                    >
                                        ÜRÜN RENGİ:
                                    </th>
                                    <td
                                        scope="col"
                                        className="px-6 py-3  text-lg"
                                    >
                                        {searchData?.urun_rengi}
                                    </td>
                                </tr>
                                <tr className="text-xs text-gray-700  bg-gray-50 max-md:flex  max-md:flex-col">
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-lg bg-gray-300"
                                    >
                                        FATURA NO:
                                    </th>
                                    <td
                                        scope="col"
                                        className="px-6 py-3  text-lg"
                                    >
                                        {searchData?.fatura_numarasi}
                                    </td>
                                </tr>
                                <tr className="text-xs text-gray-700  bg-gray-50 max-md:flex  max-md:flex-col">
                                    <th
                                        scope="col"
                                        className="px-6 py-3  text-lg bg-gray-300"
                                    >
                                        FATURA TARİHİ:
                                    </th>
                                    <td
                                        scope="col"
                                        className="px-6 py-3  text-lg"
                                    >
                                        {fixDate(searchData?.fatura_tarihi)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            )}
            {dataState === false && (
                <div
                    className="mt-5 p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-yellow-500 flex items-center"
                    role="alert"
                >
                    <span className="text-xl font-bold">Hatalı seri no!</span>{" "}
                    <p className="pl-4">Aradığınız seri no bulunamadı.</p>
                </div>
            )}
        </div>
    );
}

export default ProductQuery;
