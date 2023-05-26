import React, { useEffect, useLayoutEffect, useState } from "react";
import Fancybox from "../../components/fancybox/Fancybox";
import "./productDetail.css";
import { Link } from "react-router-dom";
import Loading from "../../Components/loading/Loading";

function ProductDetail() {
    const [loading, setLoading] = useState(false);
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 500);
    }, []);
    return !loading ? (
        <Loading />
    ) : (
        <div>
            <Fancybox
                options={{
                    Carousel: {
                        infinite: false,
                    },
                }}
            >
                <div className="container mx-auto mt-5 mb-5">
                    <div className="flex flex-row justify-between  max-md:px-6 ">
                        <div className="picture flex flex-1 py-5">
                            <img
                                src="https://lipsum.app/id/60/1600x1200"
                                alt="sadfa"
                            />
                        </div>
                        <div className="flex flex-col gap-4 flex-1 py-5">
                            <h1 className="text-center font-bold text-3xl  leading-10">
                                Hakii Wind Sport Bluetooth Akıllı Güneş Gözlüğü
                                (UV400 3 Farklı Polarize Gözlük Camı Hediyeli)
                            </h1>
                            <ul className="flex flex-col ml-5 gap-5 p-5 text-lg">
                                <li className=" ">UV400 Polarize Cam</li>
                                <li className="t">IPX4 Sertifikası</li>
                                <li className="tex ">5 Saat Kullanım Süresi</li>
                                <li className="textxl ">
                                    Sesli Telefon Görüşmesi, Müzik Dinleme
                                </li>
                                <li className="textxl">Bluetooth v5.0 </li>
                                <li className="textl">
                                    2 Yıl Distribütör Garantili
                                </li>
                            </ul>
                            <div className="buttons">
                                <Link to={"/iletisim"}>
                                    <button type="button">İletişim</button>
                                </Link>
                                <Link to={"/satis-noktalari"}>
                                    <button type="button">
                                        Satış Noktaları
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-row gap 10 ">
                        <a
                            data-fancybox="gallery"
                            href="https://lipsum.app/id/60/1600x1200"
                        >
                            <img
                                src="https://lipsum.app/id/60/200x150"
                                width="200"
                                height="150"
                                alt="safas"
                            />
                        </a>
                        <a
                            data-fancybox="gallery"
                            href="https://lipsum.app/id/61/1600x1200"
                        >
                            <img
                                src="https://lipsum.app/id/61/200x150"
                                width="200"
                                height="150"
                                alt="safas"
                            />
                        </a>
                        <a
                            data-fancybox="gallery"
                            href="https://lipsum.app/id/62/1600x1200"
                        >
                            <img
                                src="https://lipsum.app/id/62/200x150"
                                width="200"
                                height="150"
                                alt="safas"
                            />
                        </a>
                        <a
                            data-fancybox="gallery"
                            href="https://lipsum.app/id/63/1600x1200"
                        >
                            <img
                                src="https://lipsum.app/id/63/200x150"
                                width="200"
                                height="150"
                                alt="safas"
                            />
                        </a>
                        <a
                            data-fancybox="gallery"
                            href="https://lipsum.app/id/64/1600x1200"
                        >
                            <img
                                src="https://lipsum.app/id/64/200x150"
                                width="200"
                                height="150"
                                alt="safas"
                            />
                        </a>
                    </div>
                </div>
            </Fancybox>
        </div>
    );
}

export default ProductDetail;
