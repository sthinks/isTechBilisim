import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeSlider from "../../components/home/HomeSlider/HomeSlider";
import allService from "../../services/allService";
import SalesPointSlider from "../../components/SalesPointSlider";
import BrandComponent from "../../components/BrandComponent";
import BlogComponent from "../../components/BlogComponent";

function Home() {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState([]);
    const [brand, setBrand] = useState([]);
    const [salesPoint, setSalesPoint] = useState([]);
    const getHandler = async () => {
        try {
            const result = await allService.getAllBlogs();

            setBlog(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
        try {
            const result = await allService.getSalesPoint();
            setSalesPoint(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
        try {
            const result = await allService.getAllBrand();
            setBrand(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };
    useLayoutEffect(() => {
        getHandler();
    }, []);
    return (
        loading && (
            <>
                <HomeSlider />
                <div className="w-full bg-[#343434] h-20 mt-10">
                    <div className="container mx-auto max-md:px-6 flex justify-between items-center h-20">
                        <p className="text-white text-2xl font-normal max-sm:text-lg">
                            Ürün Orjinalliği Sorgulama
                        </p>
                        <button className="bg-white px-10 py-2 rounded-3xl text-xl">
                            Git!
                        </button>
                    </div>
                </div>

                <BrandComponent brand={brand} />
                <SalesPointSlider salesPoint={salesPoint} />
                {blog && <BlogComponent blog={blog} />}
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
                        <p className="text-white text-2xl font-normal max-sm:text-lg">
                            Teknik Destek
                        </p>
                        <button className="bg-white px-10 py-2 rounded-3xl text-xl">
                            Keşfet!
                        </button>
                    </div>
                </div>
            </>
        )
    );
}

export default Home;
