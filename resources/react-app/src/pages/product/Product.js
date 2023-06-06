import React, { useEffect, useLayoutEffect, useState } from "react";
import Banner from "../../components/Banner";
import { Link, useParams } from "react-router-dom";
import allService from "../../services/allService";
import SalesPointSlider from "../../components/SalesPointSlider";
import Loading from "../../Components/loading/Loading";
function Product() {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const [salesPoint, setSalesPoint] = useState();
    const params = useParams();

    const getBrandOfProduct = async () => {
        try {
            const result = await allService.getBrandOfProduct(params.slug);
            setProduct(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
        try {
            const result = await allService.getSalesPoint();
            setSalesPoint(result);
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
        setLoading(true);
    };

    useEffect(() => {
        getBrandOfProduct();
    }, []);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return !loading ? (
        <Loading />
    ) : (
        <div>
            <Banner brand={product[0].brand_name} />
            <div className="container mx-auto max-md:px-6">
                <div className="flex justify-center items-center relative flex-col -top-48">
                    <div className="w-[70%] max-md:w-[90%] flex max-md:flex-col">
                        <div className="w-2/4 pr-2 flex flex-col gap-5 max-md:w-full max-md:pr-0">
                            {product?.map((item, i) => {
                                if (i % 2 === 0) {
                                    return (
                                        <div
                                            key={i}
                                            className="relative flex justify-start items-end cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                        >
                                            <img
                                                className="w-full"
                                                src={item.product_image}
                                                alt={item.name}
                                            />
                                            <div className="absolute bg-white mb-8">
                                                <p className="px-6 py-3">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className="w-2/4 pl-2 flex flex-col gap-5 max-md:w-full max-md:pl-0 mt-2">
                            {product?.map((item, i) => {
                                if (i % 2 !== 0) {
                                    return (
                                        <div
                                            key={i}
                                            className="relative flex justify-start items-end cursor-pointer hover:-translate-y-1 transition duration-300 ease-out"
                                        >
                                            <img
                                                className="w-full"
                                                src={item.product_image}
                                                alt={item.name}
                                            />
                                            <div className="absolute bg-white mb-8">
                                                <p className="px-6 py-3">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    {salesPoint && <SalesPointSlider salesPoint={salesPoint} />}
                </div>
            </div>
        </div>
    );
}

export default Product;
