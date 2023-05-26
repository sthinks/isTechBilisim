import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import allService from "../../services/allService";
import BlogBanner from "../../components/BlogBanner";
import { useTranslation } from "react-i18next";
import Loading from "../../Components/loading/Loading";
function BlogDetail() {
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState([]);
    const param = useParams();
    const { t, i18n } = useTranslation();
    const getBlog = async () => {
        const result = await allService.getByBlog(param.slug, i18n.language);
        if (result) {
            setLoading(true);
        }
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
    }, [i18n.language]);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return !loading ? (
        <Loading />
    ) : (
        <div>
            <BlogBanner />
            <div className="h-72 w-full flex justify-end items-end">
                <div className="bg-[#FF855A] w-2/6 h-52 max-xl:hidden"></div>
            </div>
            <div className="container mx-auto max-md:px-6 max-2xl:px-10 relative -top-10 max-sm:-top-64">
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
