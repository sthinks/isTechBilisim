const Footer = () => {
    return (
        <footer className="py-20 h-auto bg-[#2B2B2B] flex justify-between px-20 max-2xl:px-14 max-xl:px-8 max-lg:px-32 max-md:px-20 max-sm:px-5">
            <div className="w-full  grid grid-cols-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">
                            Hakkımızda
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                Hakkımızda
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                Vizyon
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                Misyon
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                Firma Tarihçesi
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                Sağlık ve Bağlılık
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                Biz Olmak
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">
                            Markalarımız
                        </li>
                        <li>
                            <a
                                href="/markalar/qcy"
                                className="text-base font-light  opacity-80"
                            >
                                QCY
                            </a>
                        </li>
                        <li>
                            <a
                                href="/markalar/xiaomi"
                                className="text-base font-light  opacity-80"
                            >
                                Xaoimi
                            </a>
                        </li>
                        <li>
                            <a
                                href="/markalar/honor"
                                className="text-base font-light  opacity-80"
                            >
                                Honor
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium ">Bayilik</li>
                        <li className="text-base font-light  opacity-80">
                            Bayilik Formu
                        </li>
                        <li className="text-base font-light  opacity-80">
                            Satış Noktaları
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">Blog</li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">İletişim</li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                İletişim
                            </a>
                        </li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                Bize Ulaşın
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full pr-4">
                        <li className="mb-5 text-2xl font-medium">Destek</li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                Ürün Orjinalliği Sorgulama
                            </a>
                        </li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                Teknik Destek
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 flex justify-start items-end flex-col  max-xl:col-span-2 max-lg:col-span-3 max-md:col-span-2">
                    <p className="text-2xl font-medium text-white  ">
                        Whatsapp Destek Hattı:
                    </p>
                    <p className="text-2xl font-light text-white">
                        0546 411 04 31
                    </p>
                    <p className="text-2xl font-medium text-white">
                        Whatsapp Destek Hattı:
                    </p>
                    <p className="text-2xl font-light text-white">
                        info@istechiletisim.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
