import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import allService from "../../services/allService";
import { useTranslation } from "react-i18next";
function SearchBar({ setOpenSearch }) {
    const [data, setData] = useState();
    const { t, i18n } = useTranslation();
    const [value, setValue] = useState("");
    const container = useRef();
    useEffect(() => {
        if (value.length > 0) {
            const delayDebounceFn = setTimeout(async () => {
                try {
                    const response = await allService.getSearch(
                        value,
                        i18n.language
                    );
                    const result = response; // Yanıtın 'data' özelliğini alın
                    console.log(result);
                    setData(result);
                } catch (err) {
                    console.log(err);
                }
            }, 1000);
            return () => clearTimeout(delayDebounceFn);
        }
    }, [value]);

    useEffect(() => {
        const closeDropdown = (e) => {
            if (e.target.className === container.current.className) {
                setOpenSearch(false);
            }
        };
        document.body.addEventListener("click", closeDropdown);
        return () => document.body.removeEventListener("click", closeDropdown);
    }, []);

    return (
        <div
            ref={container}
            className="modal-search fixed top-0 left-0 right-0 bottom-0  bg-[#3434345c] text-white z-50 flex justify-center items-start"
        >
            <div className="w-5/6 mt-64">
                <form
                    className="flex items-center w-full"
                    style={{ zIndex: "122" }}
                >
                    <label htmlFor="simple-search text-2xl" className="sr-only">
                        Search
                    </label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-black dark:text-black"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="simple-search"
                            className="border text-xl bg-white h-20 max-md:h-14 border-gray-300 text-black rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-2.5  "
                            placeholder="Search"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    {/* <button
                        type="submit"
                        onClick={() => setOpenSearch(false)}
                        className="w-[10%] flex justify-center items-center p-2.5 ml-2 text-sm font-medium h-20 text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                    >
                        <svg
                            className="w-10 h-10"
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
                        <span className="sr-only">Search</span>
                    </button> */}
                </form>
                {data && (
                    <div className="bg-white border border-gray-300 rounded-lg mt-2 ">
                        <ul className="w-full">
                            {data.length > 0 ? (
                                data?.slice(0, 6).map((item, i) => (
                                    <a href={`/blog/${item.slug}`}>
                                        <li
                                            key={i}
                                            className="p-2 text-black flex justify-between items-center hover:bg-slate-100 cursor-pointer"
                                        >
                                            <p className="text-xl  max-md:text-sm">
                                                {item.title}
                                            </p>
                                            <AiOutlineArrowRight className=" text-black text-2xl" />
                                        </li>
                                    </a>
                                ))
                            ) : (
                                <div className="p-2 text-black text-xl flex justify-between items-center hover:bg-slate-100">
                                    Aradığını içerik bulunamadı!
                                </div>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
