import React, { useEffect, useLayoutEffect, useState } from "react";
import adminService from "../../services/adminService";
function ProductList() {
    const [data, setData] = useState();
    const [total, setTotal] = useState(0);
    const getAllSeri = async () => {
        const result = await adminService.getAllSeri();
        setTotal(result.total / 10);
        console.log(result.total / 10);
        setData(result.data);
    };
    useLayoutEffect(() => {
        getAllSeri();
    }, []);
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                        {data?.map((item, i) => (
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item.seri_no}
                                </th>
                                <td className="px-6 py-4">{item.urun_adi}</td>
                                <td className="px-6 py-4">{item.urun_rengi}</td>
                                <td className="px-6 py-4">{item.firma_adi}</td>
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
            <nav
                aria-label="Page navigation example "
                className="flex justify-center items-center mt-4"
            >
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            2
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            aria-current="page"
                            className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                            3
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            4
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            5
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ProductList;
