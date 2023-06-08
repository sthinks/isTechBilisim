import React, { useEffect, useLayoutEffect, useState } from "react";
import adminService from "../../services/adminService";
import ReactPaginate from "react-paginate";
import Loading from "../../Components/loading/Loading";
// Example items, to simulate fetching from another resources.

function ProductList() {
    const [data, setData] = useState();
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const itemsPerPage = 100;

    const pageCount = Math.ceil(total / itemsPerPage);

    const handlePageClick = (event) => {
        getAllSeri(event.selected + 1);
    };
    const getAllSeri = async (selected) => {
        setLoading(true);
        window.scrollTo({ top: 0, left: 0 });
        const result = await adminService.getAllSeri(selected);
        if (result) {
            setTotal(result.total);
            setData(result.data);
            setLoading(false);
        }
    };
    useLayoutEffect(() => {
        getAllSeri();
    }, []);

    return (
        <div>
            {loading ? (
                <Loading />
            ) : (
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

            {total && (
                <>
                    <ReactPaginate
                        breakLabel="..."
                        className="flex justify-center items-center mt-5"
                        previousClassName=" px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        nextClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        breakClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        nextLabel=">"
                        pageClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </>
            )}
        </div>
    );
}

export default ProductList;
