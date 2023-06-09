import React, { useLayoutEffect, useState } from "react";
import Banner from "../../components/Banner";
import Loading from "../../Components/loading/Loading";
import allService from "../../services/allService";
import { useParams } from "react-router-dom";
import UserGuide from "../userGuide/UserGuide";
function Page() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const slug = useParams();

    const getPages = async (slug) => {
        console.log(slug);
        if (slug === "kullanım-kılavuzları") {
            return false;
        }
        setLoading(true);
        const result = await allService.getPages(slug);
        if (result) {
            setLoading(false);

            setData(result[0]);
        }
    };
    useLayoutEffect(() => {
        getPages(slug.slug);
    }, [slug]);
    return loading ? (
        <Loading />
    ) : (
        <div>
            <div className="w-full h-[200px] bg-[#2B2B2B] flex justify-center items-start">
                <p className="text-white font-bold text-4xl mt-20 text-center">
                    Sayfalar
                </p>
            </div>
            <div className="container mx-auto px-36 max-lg:px-8 mt-10 my-8">
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <a
                                href="/"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-black"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-4 h-4 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                Anasayfa
                            </a>
                        </li>

                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                    aria-hidden="true"
                                    className="w-6 h-6 text-gray-400"
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
                                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                                    Sayfalar
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
                <div className="w-full">
                    <div className="text-2xl mt-2 cursor-pointer">
                        1- <a href="/sayfa/teknik-servis">Teknik Servis</a>{" "}
                    </div>
                    <div className="text-2xl mt-2 cursor-pointer">
                        2-
                        <a href="/sayfa/banka-hesap-bilgileri">
                            Banka Hesap Bilgilerimiz
                        </a>{" "}
                    </div>
                    <div className="text-2xl mt-2 cursor-pointer">
                        3-{" "}
                        <a href="/sayfa/kullanım-kılavuzları">
                            Kullanım Kılavuzları
                        </a>{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
