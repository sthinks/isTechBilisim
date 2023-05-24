import React, { useLayoutEffect } from "react";

import Mission from "../../Components/aboutUs/Mission";

function AboutUs() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section className="  bg-[#2b2b2b] text-center flex flex-col justify-center items-center text-white leading-6 ">
                <div className="container mx-auto p-10 ">
                    <h1 className="mb-7 text-4xl font-bold ">HAKKIMIZDA</h1>
                    <p>
                        13 yıllık uluslararası telekomünikasyon tecrübesini
                        e-ticaret ve distribütör alanlarında edindiğimiz
                        deneyimlerimiz ile harmanladık ve İstech İletişim ve
                        Bilgi Teknolojileri markası ile taçlandırdık. 20’ye
                        yakın global marka ile iş ortaklığı gerçekleştirerek,
                        müşterilerimize geniş bir pazar ağı oluşturduk.
                        Farkındalık oluşturmak ve %100 müşteri memnuniyetini
                        kendimize ilke edindik. Çıktığımız bu yolda güvenilir ve
                        sağlam temeller üzerine kurulu bir düzen inşaa ettik.
                    </p>
                </div>
            </section>
            <Mission />
            <h1 className="text-center text-3xl font-bold my-5 mx-auto  ">
                VİZYON
            </h1>
            <section className="bg-[#343434] text-white p-10">
                <div className="container mx-auto ">
                    <p className="text-center p-5 my-0 mx-auto">
                        İletişim & Bilgi Teknolojileri sektöründe çetin rekabet
                        koşulları ve bilinç düzeyi artmış müşterilerin değişen
                        istek ve beklentileri; gerek ürünlerin ve gerekse
                        sunulan hizmetlerin sürekli geliştirilmesini,
                        iyileştirilmesini zorunlu kılmaktadır. İstech sektördeki
                        talep ve beklentileri yoğun tecrübe ve konuya uzman
                        bakışıyla objektif biçimde değerlendirmekte; dinamik,
                        yenilikçi, gelişmeci bir yaklaşımla müşteri memnuniyeti
                        sağlayarak sadık müşteriler yaratmaya
                        çalışmaktadır.”Kalitede Süreklilik”, “Rekabetçi Fiyat”,
                        “Karşılıklı Güven” ve “Dürüstlük” vizyonumuzu oluşturan
                        temel ilke ve vazgeçilmeyecek değerlerimizdir.
                    </p>
                </div>
            </section>
            <section>
                <h1 className="text-center mt-10 text-3xl font-bold py-0 px-5">
                    FİRMA TARİHÇESİ
                </h1>
                <div className="container mx-auto ">
                    <p className="text-center font-xs py-3 px-5">
                        ”Kalite, nicelikten daha önemlidir.” 2018 yılında
                        İstanbul’da iletişim ve telekomünikasyon sektöründe
                        faaliyet göstermek amacıyla kurulmuştur. Kurulduğu
                        tarihten itibaren telekomünikasyon sektöründe online ve
                        retail hızlı bir giriş yapmıştır. Sektördeki 13 yıllık
                        tecrübesi ile genç girişimciliğin enerjisini buluşturan
                        istech yıldan yıla hızlıca ivme kazanacaktır.
                    </p>
                </div>
            </section>
            <section>
                <div className="flex flex-col sm:flex-row justify-around mb-2 gap-3 :">
                    <div className="flex flex-col">
                        <h1 className="text-center text-2xl p-2 ">
                            Saygı ve Bağlılık
                        </h1>

                        <p className="bg-[#ff855a] text-white text-center text-base px-10 py-14 ">
                            Biz, işimizi doğru şekilde, hakkıyla ve sahiplenerek
                            yaparız. Kendimizi ve işimizi geliştirir, tüm
                            ilişkilerimizde şeffaflığı ilke ediniriz. Bu sayede
                            güvene dayalı uzun vadeli ilişkiler kurarız.
                        </p>
                    </div>
                    <div className="flex-flex-col">
                        <h1 className="text-center text-2xl p-2">Biz Olmak</h1>
                        <p className="bg-[#343434] text-white text-left text-base px-10 py-14">
                            Biz, işimizi doğru şekilde, hakkıyla ve sahiplenerek
                            yaparız. Kendimizi ve işimizi geliştirir, tüm
                            ilişkilerimizde şeffaflığı ilke ediniriz. Bu sayede
                            güvene dayalı uzun vadeli ilişkiler kurarız.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;
