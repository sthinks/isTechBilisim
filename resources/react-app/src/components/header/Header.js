import { Disclosure } from "@headlessui/react";
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

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [navItem, setNavItem] = useState(" ");
    const [openSearch, setOpenSearch] = useState(false);
    const [index, setIndex] = useState(0);
    const [isChecked, setIsChecked] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [mobilLangOpen, setMobilLanOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const slug = window.location.pathname;
    useEffect(() => {
        setNavItem(slug);
    }, [slug]);
    const navigation = [
        { name: "Anasayfa", href: "/" },
        { name: "Hakkımızda", href: "/hakkimizda" },
        { name: "Markalar", href: "/markalar" },
        { name: "Blog", href: "/blog" },
        { name: "İletişim", href: "/iletisim" },
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
        },
        {
            id: 5,
            title: t("HeaderIletisim"),
            path: "iletisim",
        },
    ];
    const changeLanguage = (lang) => {
        setLangOpen(false);
        i18n.changeLanguage(lang);
        localStorage.setItem("lang", lang);
    };
    const changeLanguageMobil = (value) => {
        if (value) {
            i18n.changeLanguage("en");
            localStorage.setItem("lang", "en");
        } else {
            i18n.changeLanguage("tr");
            localStorage.setItem("lang", "tr");
        }
    };
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
                {({ open }) => (
                    <>
                        <div className="mx-auto">
                            <div className="relative flex sm:h-20 h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center md:hidden justify-between w-full px-6 max-sm:px-4">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center border-2 border-slate-900 rounded-md p-2 text-slate-700 ring-2 ring-inset ring-white">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6 text-slate-700"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6 text-slate-700 text"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                    <p className="pl-1 font-bold text-center">
                                        {t("HeaderTitle")}
                                    </p>

                                    <img
                                        className="block lg:hidden h-10"
                                        src={LogoBlack}
                                        alt="isTech"
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
                                                    />
                                                    <p className="text-black text-xl max-2xl:text-lg max-lg:hidden text-center hidden w-auto lg:block font-bold border-l-2 border-orange-500 px-3 py-2">
                                                        {t("HeaderTitle")}
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="w-full flex justify-center items-center text-white gap-20 max-xl:gap-8 max-lg:gap-12">
                                                {headerItem.map((item, i) => (
                                                    <div className="relative flex justify-center items-center">
                                                        <a
                                                            key={i}
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
                                                                        className="flex justify-between items-center absolute z-50 top-16   -left-40 bg-[#FF855A]"
                                                                    >
                                                                        <div
                                                                            key={
                                                                                i
                                                                            }
                                                                            className="text-black flex flex-col w-56 p-3 flex-1"
                                                                        >
                                                                            {item.child.map(
                                                                                (
                                                                                    key,
                                                                                    i
                                                                                ) => (
                                                                                    <a
                                                                                        className="py-1 text-white cursor-pointer"
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
                                                                        <div className="flex-1 w-60">
                                                                            <img
                                                                                alt="navbar"
                                                                                className="w-full h-full"
                                                                                src={
                                                                                    item.img
                                                                                }
                                                                            />
                                                                        </div>
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

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block px-3 py-2 rounded-md text-slate-700 font-medium"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}

                                <div className="flex">
                                    <div className="ml-3 flex">
                                        <p>TR</p>
                                        <label className="relative inline-flex items-center cursor-pointer mx-3">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={(e) => {
                                                    setIsChecked(!isChecked);
                                                    changeLanguageMobil(
                                                        !isChecked
                                                    );
                                                }}
                                                className="sr-only peer"
                                            />
                                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                                        </label>
                                        <p>EN</p>
                                    </div>
                                </div>
                                <div className="ml-3 flex justify-start items-center gap-5 mt-2">
                                    <BsSearch
                                        onClick={() => setOpenSearch(true)}
                                        className="text-2xl text-black cursor-pointer hover:text-slate-700 duration-150 delay-200"
                                    />
                                    <p>Ara</p>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
