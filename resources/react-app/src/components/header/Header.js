import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsSearch } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import Logo from "../../assets/header/logoo.png";
import LogoBlack from "../../assets/header/logoo.png";
import { useEffect, useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Header() {
    const [navItem, setNavItem] = useState(" ");
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
    const links = [
        { href: "/account-settings", label: "Account settings" },
        { href: "/support", label: "Support" },
        { href: "/license", label: "License" },
        { href: "/sign-out", label: "Sign out" },
    ];
    return (
        <Disclosure
            as="nav"
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
                                    QCY Resmi Distribütörü
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
                                                <p className="text-black text-xl max-lg:hidden text-center block w-auto lg:hidden font-bold">
                                                    QCY Resmi Distribütörü
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
                                                <p className="text-black text-xl max-lg:hidden text-center hidden w-auto lg:block font-bold border-l-2 border-orange-500 px-3 py-2">
                                                    QCY Resmi Distribütörü
                                                </p>
                                            </a>
                                        </div>
                                        <div className="w-full flex justify-center items-center text-white gap-20 max-xl:gap-8 max-lg:gap-12">
                                            <a
                                                className={
                                                    navItem === "/"
                                                        ? "text-lg text-black font-medium"
                                                        : "text-lg font-normal text-black"
                                                }
                                                href="/"
                                            >
                                                Ana Sayfa
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/hakkimizda"
                                                        ? "text-xl font-medium text-black"
                                                        : "text-lg font-normal text-black"
                                                }
                                                href="/hakkimizda"
                                            >
                                                Hakkımızda
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/markalar"
                                                        ? "text-xl font-medium text-black"
                                                        : "text-lg font-normal text-black"
                                                }
                                                href="/markalar"
                                            >
                                                Markalar
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/blog"
                                                        ? "text-xl font-medium text-black"
                                                        : "text-lg font-normal text-black"
                                                }
                                                href="/blog"
                                            >
                                                Blog
                                            </a>
                                            <a
                                                className={
                                                    navItem === "/iletisim"
                                                        ? "text-xl font-medium text-black"
                                                        : "text-lg font-normal text-black"
                                                }
                                                href="/iletisim"
                                            >
                                                İletişim
                                            </a>
                                            <div className="flex gap-2">
                                                <BsSearch className="text-black" />
                                                <GrLanguage className="text-black" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
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
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
