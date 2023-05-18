import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allService from "../../services/allService";
import BlogBanner from "../../components/BlogBanner";

function BlogDetail() {
    const [blog, setBlog] = useState([]);
    const param = useParams();
    console.log(param);
    const getBlog = async () => {
        const result = await allService.getByBlog(param.slug);
        console.log(result);
        setBlog(result);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    useEffect(() => {
        getBlog();
        scrollToTop();
    }, []);
    return (
        <div>
            <BlogBanner />
            <div className="h-72 w-full flex justify-end items-end">
                <div className="bg-[#FF855A] w-2/6 h-52 max-xl:hidden"></div>
            </div>
            <div className="container mx-auto max-md:px-6 relative -top-10 max-sm:-top-64">
                {blog ? (
                    <>
                        <p className="text-black text-4xl font-bold pr-[27rem] max-xl:pr-0">
                            {blog.title}
                        </p>
                        <p
                            className="mt-10"
                            dangerouslySetInnerHTML={{
                                __html: blog.content,
                            }}
                        />
                    </>
                ) : (
                    <p className="text-black text-4xl font-semibold">
                        Sayfa yüklenemedi. Tekrar deneyiniz!
                    </p>
                )}
            </div>
        </div>
    );
}

export default BlogDetail;
