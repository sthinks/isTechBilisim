import React, { useEffect, useState } from "react";
import allService from "../services/allService";
import { useNavigate } from "react-router-dom";

function BlogComponent() {
    const [blog, setBlog] = useState([]);
    const navigate = useNavigate();
    const getBlog = async () => {
        try {
            const result = await allService.getAllBlogs();
            setBlog(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useEffect(() => {
        getBlog();
    }, []);
    return (
        <>
            <div className="container mx-auto max-md:px-6 flex justify-center items-center mt-12">
                <p className="text-black text-4xl font-normal">BLOG</p>
            </div>

            {blog.length > 0 && (
                <>
                    <div className="w-full relative mt-10">
                        <div className="flex justify-between items-center max-sm:flex-col gap-5">
                            {blog && (
                                <>
                                    <div
                                        className="sm:hidden  w-[49.5%] h-[650px] max-sm:w-full max-sm:h-full max-2xl:h-[420px] relative flex justify-start items-center cursor-pointer"
                                        onClick={() =>
                                            navigate(`/blog/${blog[0].slug}`)
                                        }
                                    >
                                        <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition  duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                        <img
                                            className="w-full h-full object-fill"
                                            src={blog[0].image}
                                            alt={blog[0].title}
                                        />
                                        <p className="absolute text-white text-lg font-semibold z-50 px-5">
                                            {blog[0].title}
                                        </p>
                                    </div>
                                    <div
                                        className="sm:hidden w-[49.5%] h-[650px] max-sm:w-full max-sm:h-full max-2xl:h-[420px] relative flex justify-start items-center cursor-pointer"
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
                                        <p className="absolute text-white text-lg font-semibold z-50 px-5">
                                            {blog[1].title}
                                        </p>
                                    </div>
                                </>
                            )}
                            {blog && (
                                <>
                                    <div className="max-sm:hidden w-[49.5%] h-[650px]  max-2xl:h-[420px] flex flex-col justify-between">
                                        <div
                                            className="relative flex justify-start items-center cursor-pointer h-[50%] hover:-translate-y-1 transition duration-300 ease-out"
                                            onClick={() =>
                                                navigate(
                                                    `/blog/${blog[0].slug}`
                                                )
                                            }
                                        >
                                            <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                            <img
                                                className="w-full h-full"
                                                src={blog[0].image}
                                                alt={blog[0].title}
                                            />
                                            <p className="absolute text-white text-lg font-semibold z-50 px-5">
                                                {blog[0].title}
                                            </p>
                                        </div>
                                        <div
                                            className="relative flex justify-start items-center cursor-pointer h-[49%] hover:-translate-y-1 transition duration-300 ease-out"
                                            onClick={() =>
                                                navigate(
                                                    `/blog/${blog[1].slug}`
                                                )
                                            }
                                        >
                                            <div className="bg-[#2b2b2b] opacity-80 hover:opacity-10 transition duration-300 ease-out absolute w-full h-full top-0 left-0 z-40" />
                                            <img
                                                className="w-full h-full object-fill"
                                                src={blog[1].image}
                                                alt={blog[1].title}
                                            />
                                            <p className="absolute text-white text-lg font-semibold z-50 px-5">
                                                {blog[1].title}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="w-[49.5%] h-[650px] max-sm:w-full max-sm:h-full max-2xl:h-[420px] relative flex justify-start items-center cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
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
                                        <p className="absolute text-white text-lg font-semibold z-50 px-5">
                                            {blog[2].title}
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default BlogComponent;
