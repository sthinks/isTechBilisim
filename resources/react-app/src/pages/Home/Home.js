import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeSlider from "../../components/home/HomeSlider/HomeSlider";
import allService from "../../services/allService";
import SalesPointSlider from "../../components/SalesPointSlider";
import BrandComponent from "../../components/BrandComponent";
import BlogComponent from "../../components/BlogComponent";
import ContactHome from "../../components/home-contact/ContactHome";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Components/loading/Loading";


function Home() {
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState([]);
    const [brand, setBrand] = useState([]);
    const [salesPoint, setSalesPoint] = useState([]);
    const { t, i18n } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const blogResult = await allService.getAllBlogs();
                setBlog(blogResult);
            } catch (error) {
                console.error(
                    "Blog API isteği sırasında bir hata oluştu:",
                    error
                );
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const salesPointResult = await allService.getSalesPoint();
                setSalesPoint(salesPointResult);
            } catch (error) {
                console.error(
                    "Sales Point API isteği sırasında bir hata oluştu:",
                    error
                );
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchData = async () => {
            try {
                const brandResult = await allService.getAllBrand();
                setBrand(brandResult);
            } catch (error) {
                console.error(
                    "Brand API isteği sırasında bir hata oluştu:",
                    error
                );
            }
        };

        fetchData();
        setLoading(true);
    }, []);

    const navigate = useNavigate();
    return !loading ? (
        <Loading />
    ) : (
        <>
            <HomeSlider />
            <div className="w-full bg-[#343434] h-20 mt-10">
                <div className="container mx-auto max-md:px-6 flex justify-between items-center h-20">
                    <p className="text-white text-2xl font-normal max-sm:text-base">
                        {t("FooterOrjinal")}
                    </p>
                    <Link to={"/orjinal"}>
                        <button
                            className="bg-white px-10 py-2 rounded-3xl text-xl max-md:text-base"
                            type="button"
                        >
                            {t("HomeProductOrj")}
                        </button>
                    </Link>
                </div>
            </div>

            <BrandComponent brand={brand} />
            <SalesPointSlider salesPoint={salesPoint} />
            {blog && <BlogComponent blog={blog} />}
            <div className="w-full bg-[#343434] h-20 mt-10 mb-10">
                <div className="container mx-auto max-md:px-6 flex justify-between items-center h-20">
                    <p className="text-white text-2xl font-normal max-sm:text-base">
                        {t("HomeBayilik")}
                    </p>
                    <button
                        className="bg-white px-10 py-2 rounded-3xl text-xl max-md:text-base"
                        onClick={() => navigate("/bayilik")}
                    >
                        {t("HomeKesfet")}
                    </button>
                </div>
            </div>
            <div className="w-full my-4 relative">
                <div className="top-2/4 left-0 h-48 z-20 bg-[#ff855a] w-full absolute" />
                <ContactHome className="z-50" />
            </div>
            <div className="w-full mt-10">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.0901033902537!2d28.68538756671781!3d41.001401016831764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1d57ce4e233%3A0x9d499efc67d1c09a!2zQWt0aW0gMyBBdmPEsWxhciAtIEFrxLFsbMSxIFRpY2FyZXQgdmUgxLDFnyBNZXJrZXpp!5e0!3m2!1str!2str!4v1684222402335!5m2!1str!2str"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="w-full bg-[#343434] h-20 mt-10 mb-10">
                <div className="container mx-auto max-md:px-6 flex justify-between items-center h-20">
                    <p className="text-white text-2xl font-normal max-sm:text-base">
                        {t("FooterTD")}
                    </p>
                    <button
                        className="bg-white px-10 py-2 rounded-3xl text-xl max-md:text-base"
                        onClick={() => navigate("/iletisim")}
                    >
                        {t("HomeKesfet")}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
