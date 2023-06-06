import React, { useEffect, useState } from "react";
import adminService from "../../services/adminService";
import { useFormik } from "formik";
import * as Yup from "yup";

function ProductQuery() {
    const [searchData, setSearchData] = useState(null);
    const [dataState, setDataState] = useState(null);
    const formik = useFormik({
        initialValues: {
            serial: "",
        },
        validationSchema: Yup.object({
            serial: Yup.string().min(10).required("Zorunlu alan"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const searchResult = await adminService.postCheckOrginalAdmin(
                    values.serial
                );
                setSearchData(searchResult.data);
                setDataState(true);
                if (searchResult.response === 200) {
                    setDataState(true);
                } else {
                    setDataState(false);
                }
            } catch (error) {
                console.log(error);
                setDataState(false);
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
            {dataState && searchData && (
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
                                <td scope="col" className="px-6 py-3  text-lg">
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
                                <td scope="col" className="px-6 py-3  text-lg">
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
                                <td scope="col" className="px-6 py-3  text-lg">
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
                                <td scope="col" className="px-6 py-3  text-lg">
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
                                <td scope="col" className="px-6 py-3  text-lg">
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
                                <td scope="col" className="px-6 py-3  text-lg">
                                    {fixDate(searchData?.fatura_tarihi)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {dataState === false && <div>bulunmadı</div>}
        </div>
    );
}

export default ProductQuery;
