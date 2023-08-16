import React, { useEffect, useLayoutEffect, useState } from "react";
import adminService from "../../services/adminService";
import { useFormik } from "formik";
import ReactPaginate from "react-paginate";
import * as Yup from "yup";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Loading from "../../Components/loading/Loading";
function ProductQuery() {
    const [searchMenu, setSearchMenu] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [selectedSearch, setSelectedSearch] = useState({
        id: 1,
        name: "Tüm Kategoriler",
        slug: "all",
    });
    const [searchData, setSearchData] = useState(null);

    const formik = useFormik({
        initialValues: {
            value: "",
            slug: "all",
        },
        validationSchema: Yup.object({}),
        onSubmit: async (values, { resetForm }) => {
            getDataHandler(values);
        },
    });

    const handlePageClick = (event) => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setPage(event.selected + 1);
    };
    useEffect(() => {
        if (formik.values.value !== "" && formik.values.slug) {
            getDataHandler(formik.values, page);
        }
    }, [page]);
    const getDataHandler = async (values) => {
        setLoading(true);

        try {
            const searchResult = await adminService.postCheckOrginalAdmin(
                values,
                page
            );

            setSearchData(searchResult.data);
            setTotal(searchResult.total);
            setNotFound(false);
            if (searchResult.data.length === 0) {
                setNotFound(true);
            }

            if (searchResult.response === 200) {
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const category = [
        {
            id: 1,
            name: "Tüm Kategoriler",
            slug: "all",
        },
        {
            id: 2,
            name: "Fatura Tarihi",
            slug: "fatura_tarihi",
        },
        {
            id: 3,
            name: "Kayıt Tarihi",
            slug: "kayit_tarihi",
        },
        {
            id: 4,
            name: "Ürün Adı",
            slug: "urun_adi",
        },
        {
            id: 5,
            name: "Ürün Rengi",
            slug: "urun_rengi",
        },
        {
            id: 6,
            name: "Firma Adı",
            slug: "firma_adi",
        },
    ];

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex relative">
                    <button
                        id="dropdown-button"
                        onClick={() => setSearchMenu(!searchMenu)}
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                        type="button"
                    >
                        {selectedSearch && selectedSearch.name}
                        <svg
                            className="w-2.5 h-2.5 ml-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>

                    <div
                        id="dropdown"
                        className={
                            searchMenu
                                ? "`z-10 block absolute z-50 left-0 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 `"
                                : `z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 `
                        }
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-button"
                        >
                            {category.map((item, i) => (
                                <li key={i}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedSearch(item);
                                            setSearchMenu(false);
                                            formik.setValues({
                                                ...formik.values,
                                                slug: item.slug,
                                            });
                                        }}
                                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative w-full">
                        <input
                            type="search"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search Mockups, Logos, Design Templates..."
                            required
                            id="value"
                            name="value"
                            onChange={formik.handleChange}
                            value={formik.values.value}
                        />
                        <button
                            type="submit"
                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
            {total > 0 && (
                <p className="py-2 text-xl font-bold opacity-70">
                    Eşleşen Ürün Sayısı : {total.toLocaleString()}
                </p>
            )}
            {notFound && (
                <p className="py-2 text-xl font-bold opacity-70">
                    Eşleşen Ürün Yok!
                </p>
            )}
            {loading && <Loading />}
            {searchData && total > 0 && (
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Seri No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ürün adı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ürün rengi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Firma adı
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fatura no
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Fatura tarihi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchData?.map((item, i) => (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {item.seri_no}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.urun_adi}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.urun_rengi}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.firma_adi}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fatura_numarasi}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.fatura_tarihi}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {total > 0 && (
                <>
                    <ReactPaginate
                        breakLabel="..."
                        className="flex justify-center items-center mt-5"
                        previousClassName=" px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        nextClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        breakClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        activeLinkClassName="text-black dark:text-white underline  underline-offset-1"
                        nextLabel=">"
                        pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={total / 50}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </>
            )}
        </div>
    );
}

export default ProductQuery;
