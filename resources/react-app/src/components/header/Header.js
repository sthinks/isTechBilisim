import { Disclosure, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsSearch } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Logo from "../../assets/header/logoo.png";
import { useTranslation } from "react-i18next";
import LogoBlack from "../../assets/header/logoo.png";
import { useEffect, useState } from "react";
import hakkimizdaImg from "../../assets/header/bgchild.png";
import markaImg from "../../assets/header/smartwatch-min.webp";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchBar from "../searchBar/SearchBar";
import ReactCountryFlag from "react-country-flag";

import "./header.css";
import { useNavigate } from "react-router-dom";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header({ data }) {
    const [navItem, setNavItem] = useState(" ");
    const [openSearch, setOpenSearch] = useState(false);
    const [index, setIndex] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [mobilLangOpen, setMobilLanOpen] = useState(false);
    const { mobilMenu, setMenuMobil } = useState(false);
    const { t, i18n } = useTranslation();
    const slug = window.location.pathname;
    useEffect(() => {
        setNavItem(slug);
    }, [slug]);

    const navigation = [
        { name: t("HeaderAnasayfa"), href: "/" },
        { name: t("HeaderHakkimizda"), href: "/hakkimizda" },
        { name: t("HeaderMarka"), href: "/markalar" },
        { name: "Blog", href: "/blog" },
        { name: t("HeaderIletisim"), href: "/iletisim" },
    ];
    const headerItem = [
        {
            id: 1,
            title: t("HeaderAnasayfa"),
            path: "/",
        },
        {
            id: 2,
            title: t("HeaderHakkimizda"),
            path: "/hakkimizda",
            img: hakkimizdaImg,
            child: [
                {
                    title: t("HeaderHakkimizda"),
                    path: "/hakkimizda",
                },
                {
                    title: t("HeaderMisyon"),
                    path: "/hakkimizda",
                },
                {
                    title: t("HeaderDate"),
                    path: "/hakkimizda",
                },
            ],
        },
        {
            id: 3,
            title: t("HeaderMarka"),
            path: "/markalar",
            img: markaImg,
            child: [
                {
                    title: "QCY",
                    path: "/brand/qcy",
                },
                {
                    title: "Honor",
                    path: "/brand/honor",
                },
                {
                    title: "Xiaomi",
                    path: "/brand/xioami",
                },
            ],
        },
        {
            id: 4,
            title: "Blog",
            path: "/blog",
            child: [
                {
                    title: data ? data[0]?.title : "Yükleniyor...",
                    path: data ? `/blog/${data[0]?.slug}` : "22",
                },
                {
                    title: data ? data[1]?.title : "Yükleniyor...",
                    path: data ? `/blog/${data[1]?.slug}` : "22",
                },
                {
                    title: data ? data[2]?.title : "Yükleniyor...",
                    path: data ? `/blog/${data[2]?.slug}` : "22",
                },
            ],
        },
        {
            id: 5,
            title: t("HeaderIletisim"),
            path: "/iletisim",
        },
    ];
    const changeLanguage = (lang) => {
        setLangOpen(false);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    const changeLanguageMobil = (value) => {
        if (value === "en") {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
        } else {
            i18n.changeLanguage("tr");
            localStorage.setItem("lang", "tr");
        }
    };
    const navigate = useNavigate();
    return (
        <>
            {openSearch && <SearchBar setOpenSearch={setOpenSearch} />}
            <Disclosure
                as="nav"
                onMouseLeave={() => {
                    setIndex(0);
                    setLangOpen(false);
                }}
                className="top-0 z-50 w-full py-4 max-sm:bg-white shadow-sm shadow-slate-100"
            >
                {({ open, close }) => (
                    <>
                        <div className="mx-auto">
                            <div className="relative flex sm:h-20 h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden justify-between w-full px-6 max-sm:px-4">
                                    {/* Mobile menu button*/}
                                    <div className="flex justify-between items-center gap-2">
                                        <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 ring-2 ring-inset ring-white">
                                            <div
                                                className={`hamburger-menu ${
                                                    open ? "open" : ""
                                                }`}
                                            >
                                                <span className="line"></span>
                                                <span className="line"></span>
                                                <span className="line"></span>
                                            </div>
                                        </Disclosure.Button>

                                        <BsSearch
                                            onClick={() => setOpenSearch(true)}
                                            className="text-xl text-black cursor-pointer hover:text-slate-700 duration-150 delay-200"
                                        />
                                    </div>

                                    <p className="pl-1 font-bold text-center text-base max-sm:text-sm">
                                        {t("HeaderTitle")}
                                    </p>

                                    <img
                                        className="block lg:hidden h-8"
                                        src={LogoBlack}
                                        alt="isTech"
                                        onClick={() => navigate("/")}
                                    />
                                </div>
                                <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full max-md:hidden">
                                    <div className="hidden sm:ml-6 sm:block w-[85%] max-xl:w-full">
                                        <div className="flex justify-between items-center max-xl:text-sm max-lg:px-2 max-xl:px-10 max-md:px-4">
                                            <div className="flex flex-shrink-0 items-center max-xl:w-48 ">
                                                <a href="/">
                                                    <img
                                                        className="block w-auto lg:hidden"
                                                        src={Logo}
                                                        alt="Your Company"
                                                        onClick={() =>
                                                            navigate("/")
                                                        }
                                                    />
                                                    <p className="text-black text-xl max-2xl:text-lg max-lg:hidden text-center block w-auto lg:hidden font-bold">
                                                        {t("HeaderTitle")}
                                                    </p>
                                                </a>
                                                <a
                                                    href="/"
                                                    className="flex justify-center items-center gap-1"
                                                >
                                                    <img
                                                        className="hidden w-auto lg:block"
                                                        src={Logo}
                                                        alt="Your Company"
                                                        onClick={() =>
                                                            navigate("/")
                                                        }
                                                    />
                                                    <p className="text-black text-xl max-2xl:text-lg max-lg:hidden text-center hidden w-auto lg:block font-bold border-l-2 border-orange-500 px-3 py-2">
                                                        {t("HeaderTitle")}
                                                    </p>
                                                </a>
                                            </div>

                                            <div className="w-full flex justify-center items-center text-white gap-20 max-xl:gap-8 max-lg:gap-10">
                                                {headerItem.map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="relative flex justify-center items-center"
                                                    >
                                                        <a
                                                            className={
                                                                navItem === "/"
                                                                    ? "text-lg text-black font-medium"
                                                                    : "text-lg font-normal text-black"
                                                            }
                                                            href={item.path}
                                                            onMouseEnter={() =>
                                                                setIndex(
                                                                    item.id
                                                                )
                                                            }
                                                        >
                                                            {item.title}
                                                        </a>

                                                        {item.child &&
                                                            item.id ===
                                                                index && (
                                                                <>
                                                                    <IoMdArrowDropdown className="text-[#FF855A] absolute top-7 text-4xl" />
                                                                    <div
                                                                        onMouseLeave={() =>
                                                                            setIndex(
                                                                                0
                                                                            )
                                                                        }
                                                                        className={
                                                                            item.id ===
                                                                            4
                                                                                ? "flex justify-between items-center absolute z-50 top-16 w-96 -left-40 bg-[#FF855A]"
                                                                                : "flex justify-between items-center absolute z-50 top-16 -left-40 bg-[#FF855A]"
                                                                        }
                                                                    >
                                                                        <div
                                                                            key={
                                                                                i
                                                                            }
                                                                            className={
                                                                                item.id ===
                                                                                4
                                                                                    ? "text-black flex flex-col w-full p-3 "
                                                                                    : "text-black flex flex-col w-56 p-3 flex-1"
                                                                            }
                                                                        >
                                                                            {item.child.map(
                                                                                (
                                                                                    key,
                                                                                    i
                                                                                ) => (
                                                                                    <a
                                                                                        key={
                                                                                            i
                                                                                        }
                                                                                        className="py-1 text-white hover:text-slate-200 cursor-pointer"
                                                                                        href={
                                                                                            key.path
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            key.title
                                                                                        }
                                                                                    </a>
                                                                                )
                                                                            )}
                                                                        </div>
                                                                        {item.id !=
                                                                            4 && (
                                                                            <div className="flex-1 w-60">
                                                                                <img
                                                                                    alt="navbar"
                                                                                    className="w-full h-full"
                                                                                    src={
                                                                                        item.img
                                                                                    }
                                                                                />
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </>
                                                            )}
                                                    </div>
                                                ))}

                                                <div className="flex gap-2 relative">
                                                    <BsSearch
                                                        onClick={() =>
                                                            setOpenSearch(true)
                                                        }
                                                        className="text-2xl text-black cursor-pointer hover:text-slate-700 duration-150 delay-200"
                                                    />
                                                    <GrLanguage
                                                        className="text-2xl text-black cursor-pointer hover:text-slate-400 duration-150 delay-200"
                                                        onMouseEnter={() =>
                                                            setLangOpen(true)
                                                        }
                                                    />
                                                    {langOpen && (
                                                        <>
                                                            <IoMdArrowDropdown className="text-[#FF855A] absolute top-4 text-4xl left-[1.6rem]" />
                                                            <div
                                                                onMouseLeave={() =>
                                                                    setLangOpen(
                                                                        false
                                                                    )
                                                                }
                                                                className="absolute z-50 mt-10 bg-white border-2 border-orange-100 shadow-sm left-[1.6rem]"
                                                            >
                                                                <p
                                                                    className="text-black cursor-pointer hover:bg-orange-100 p-2"
                                                                    onClick={() =>
                                                                        changeLanguage(
                                                                            "tr"
                                                                        )
                                                                    }
                                                                >
                                                                    TR
                                                                </p>
                                                                <p
                                                                    className="text-black cursor-pointer mt-2 hover:bg-orange-100 p-2"
                                                                    onClick={() =>
                                                                        changeLanguage(
                                                                            "en"
                                                                        )
                                                                    }
                                                                >
                                                                    EN
                                                                </p>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden relative flex justify-between"></Disclosure.Panel>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Disclosure.Panel>
                                <div className="space-y-1 px-2 pt-2 pb-3">
                                    {navigation.map((item, i) => (
                                        <Disclosure.Button
                                            key={i}
                                            as="a"
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-slate-700 font-medium"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                                <div className="space-y-1 px-2 pt-2 pb-3 absolute right-0 bottom-0">
                                    {i18n.language === "en" ? (
                                        <ReactCountryFlag
                                            countryCode="TR"
                                            svg
                                            style={{
                                                width: "3em",
                                                height: "3em",
                                            }}
                                            onClick={(e) => {
                                                changeLanguageMobil("tr");
                                            }}
                                            title="US"
                                        />
                                    ) : (
                                        <ReactCountryFlag
                                            countryCode="US"
                                            svg
                                            style={{
                                                width: "3em",
                                                height: "3em",
                                            }}
                                            onClick={(e) => {
                                                changeLanguageMobil("en");
                                            }}
                                            title="US"
                                        />
                                    )}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </>
    );
}
