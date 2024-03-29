import React, { useLayoutEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Banner from "../../components/Banner";
import Loading from "../../Components/loading/Loading";
import allService from "../../services/allService";
import { useParams } from "react-router-dom";
import UserGuide from "../userGuide/UserGuide";
function Page() {
    const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const slug = useParams();

    const getPages = async (slug) => {
        if (slug === "kullanım-kılavuzları") {
            return false;
        }
        setLoading(true);
        const result = await allService.getPages(slug, i18n.language);
        if (result) {
            setLoading(false);

            setData(result[0]);
        }
    };
    useLayoutEffect(() => {
        getPages(slug.slug);
    }, [slug, i18n.language]);
    return loading ? (
        <Loading />
    ) : (
        <div className="py-5">
            <div className="w-full h-[200px] bg-[#2B2B2B] flex justify-center items-start">
                {data ? (
                    <p className="text-white font-bold text-4xl mt-20 text-center">
                        {data?.title}
                    </p>
                ) : (
                    <p className="text-white font-bold text-4xl mt-20 text-center">
                        {t("FooterGuide")}
                    </p>
                )}
            </div>
            <div className="container mx-auto px-36 max-lg:px-8 mt-10">
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
                                {t("HeaderAnasayfa")}
                            </a>
                        </li>
                        <li>
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
                                <a
                                    href="/sayfalar"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-black"
                                >
                                    {t("Page")}
                                </a>
                            </div>
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
                                    {data ? data?.title : t("FooterGuide")}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
            {data ? (
                <div className="container mx-auto px-36 max-lg:px-8 mt-10">
                    <p dangerouslySetInnerHTML={{ __html: data?.body }} />
                </div>
            ) : (
                <div className="container mx-auto px-36 max-lg:px-8 mt-10 my-8">
                    <UserGuide />
                </div>
            )}
        </div>
    );
}

export default Page;
