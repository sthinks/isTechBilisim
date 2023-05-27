import { useTranslation } from "react-i18next";
import Facebook from "../../assets/Vector.png";
import {
    FaInstagram,
    FaTwitter,
    FaSnapchat,
    FaYoutube,
    FaWhatsapp,
    FaLinkedin,
    FaPinterest,
    FaTelegram,
} from "react-icons/fa";

const Footer = () => {
    const { t, i18n } = useTranslation();
    return (
        <footer className="relative py-20 h-auto bg-[#2B2B2B] flex justify-between px-20 max-2xl:px-14 max-xl:px-8 max-lg:px-32 max-md:px-20 max-sm:px-5">
            <div className="w-full  grid grid-cols-8 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">
                            {t("HeaderHakkimizda")}
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                {t("HeaderHakkimizda")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterVizyon")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterMisyon")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                {t("HeaderDate")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterSB")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/hakkimizda"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterBiz")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">
                            {t("FooterMarka")}
                        </li>
                        <li>
                            <a
                                href="/brand/qcy"
                                className="text-base font-light  opacity-80"
                            >
                                QCY
                            </a>
                        </li>
                        <li>
                            <a
                                href="/brand/xioami"
                                className="text-base font-light  opacity-80"
                            >
                                Xaoimi
                            </a>
                        </li>
                        <li>
                            <a
                                href="/brand/honor"
                                className="text-base font-light  opacity-80"
                            >
                                Honor
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium ">
                            {t("FooterBayilik")}
                        </li>
                        <li className="text-base font-light  opacity-80">
                            <a href="/bayilik">{t("FooterBForm")}</a>
                        </li>
                        <li className="text-base font-light  opacity-80">
                            <a href="/satis-noktalari">{t("FooterSatis")}</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">
                            <a href="/blog">Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full">
                        <li className="mb-5 text-2xl font-medium">
                            {t("HeaderIletisim")}
                        </li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                {t("HeaderIletisim")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterBize")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full h-60 flex justify-start items-start col-span-1">
                    <ul className="text-white max-md:w-full pr-4">
                        <li className="mb-5 text-2xl font-medium">
                            {t("FooterDestek")}
                        </li>
                        <li>
                            <a
                                href="/ürün-orjinalligi"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterOrjinal")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/iletisim"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterTD")}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/kullanim-kilavuzlari"
                                className="text-base font-light  opacity-80"
                            >
                                {t("FooterKV")}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 flex justify-start items-end flex-col  max-xl:col-span-2 max-lg:col-span-3 max-md:col-span-2">
                    <p className="text-2xl font-medium text-white  ">
                        {t("FooterWp")}:
                    </p>
                    <p className="text-2xl font-light text-white">
                        <a href="https://wa.me/05464110431">0546 411 04 31</a>
                    </p>
                    <p className="text-2xl font-medium text-white">
                        {t("FooterED")}:
                    </p>
                    <p className="text-2xl font-light text-white">
                        <a href="mailto:info@istechiletisim.com">
                            info@istechiletisim.com
                        </a>
                    </p>
                </div>
                {/* <div className="col-start-7 flex gap-1 ">
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <img src={Facebook} alt="facebook_logo"/>
                    </div>
                    <div className=" text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaInstagram />
                    </div>
                    <div className=" text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaTwitter />
                    </div>
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaSnapchat />
                    </div>
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaYoutube />
                    </div>
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaWhatsapp />
                    </div>
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaLinkedin />
                    </div>
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaPinterest />
                    </div>
                    <div className="text-xl bg-white rounded-2xl text-[#ff855a]">
                        <FaTelegram />
                    </div>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
