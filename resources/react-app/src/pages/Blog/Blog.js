import React, { useEffect, useLayoutEffect, useState } from "react";
import BlogBanner from "../../components/BlogBanner";
import allService from "../../services/allService";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/loading/Loading";
function Blog() {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState();
    const [index, setIndex] = useState(7);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const getBlogsHandler = async () => {
        try {
            const result = await allService.getAllBlogs(i18n.language);
            setBlog(result);
            setLoading(false);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        getBlogsHandler();
    }, [i18n.language]);

    return loading ? (
        <Loading />
    ) : (
        <>
            <BlogBanner blog={true} />

            <div className="h-72 w-full flex justify-end items-end">
                <div className="bg-[#343434] w-2/6 h-52 max-xl:hidden"></div>
            </div>
            <div className="container mx-auto px-36 max-lg:px-8 relative -top-36 max-sm:-top-64">
                <div className="flex justify-between items-center max-sm:flex-col gap-1">
                    {blog && (
                        <>
                            <div
                                className="sm:hidden  w-[49.5%] h-[480px] max-sm:w-full max-sm:h-full max-2xl:h-[380px] relative flex justify-start items-center cursor-pointer"
                                onClick={() =>
                                    navigate(`/blog/${blog[0].slug}`)
                                }
                            >
                                <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                <img
                                    className="w-full h-full object-fill"
                                    src={blog[0].image}
                                    alt={blog[0].title}
                                />
                                <p className="absolute text-white text-base font-semibold z-50 px-5">
                                    {blog[0].title}
                                </p>
                            </div>
                            <div
                                className="sm:hidden w-[49.5%] h-[480px] max-sm:w-full max-sm:h-full max-2xl:h-[380px] relative flex justify-start items-center cursor-pointer"
                                onClick={() =>
                                    navigate(`/blog/${blog[1].slug}`)
                                }
                            >
                                <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                <img
                                    className="w-full h-full object-fill"
                                    src={blog[1].image}
                                    alt={blog[1].title}
                                />
                                <p className="absolute text-white text-base font-semibold z-50 px-5">
                                    {blog[1].title}
                                </p>
                            </div>
                        </>
                    )}
                    {blog && (
                        <>
                            <div className="max-sm:hidden w-[49.5%] h-[480px]  max-2xl:h-[380px] flex flex-col justify-between">
                                <div
                                    className="relative flex justify-start items-center cursor-pointer h-[50%] hover:-translate-y-1 transition duration-300 ease-out"
                                    onClick={() =>
                                        navigate(`/blog/${blog[0].slug}`)
                                    }
                                >
                                    <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                    <img
                                        className="w-full h-full"
                                        src={blog[0].image}
                                        alt={blog[0].title}
                                    />
                                    <p className="absolute text-white text-base font-semibold z-50 px-5">
                                        {blog[0].title}
                                    </p>
                                </div>
                                <div
                                    className="relative flex justify-start items-center cursor-pointer h-[49%] hover:-translate-y-1 transition duration-300 ease-out"
                                    onClick={() =>
                                        navigate(`/blog/${blog[1].slug}`)
                                    }
                                >
                                    <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                    <img
                                        className="w-full h-full object-fill"
                                        src={blog[1].image}
                                        alt={blog[1].title}
                                    />
                                    <p className="absolute text-white text-base font-semibold z-50 px-5">
                                        {blog[1].title}
                                    </p>
                                </div>
                            </div>

                            <div
                                className="w-[49.5%] h-[480px] max-sm:w-full max-sm:h-full max-2xl:h-[380px] relative flex justify-start items-center cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                onClick={() =>
                                    navigate(`/blog/${blog[2].slug}`)
                                }
                            >
                                <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                <img
                                    className="w-full h-full object-fill"
                                    src={blog[2].image}
                                    alt={blog[2].title}
                                />
                                <p className="absolute text-white text-base font-semibold z-50 px-5">
                                    {blog[2].title}
                                </p>
                            </div>
                        </>
                    )}
                </div>
                <div className="flex flex-wrap justify-between max-sm:flex-col max-sm:justify-center max-sm:items-center gap-1">
                    {blog?.slice(3, index).map((item, index) => (
                        <div
                            key={index}
                            className="w-[49.5%] h-[480px] max-sm:w-full max-sm:h-full mt-4 cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                            onClick={() => navigate(`/blog/${item.slug}`)}
                        >
                            <div className="w-full h-full relative flex justify-start items-center">
                                <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                <img
                                    className="w-full h-full object-fill"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <p className="absolute text-white text-base font-semibold z-50 px-5">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {index === 7 && (
                    <div className="w-full flex justify-end mt-5">
                        <button
                            className="text-2xl border-b-2 border-[#FF855A] hover:opacity-80 transition duration-300 ease-out"
                            onClick={() => setIndex(1111)}
                        >
                            {t("BlogAll")}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Blog;
