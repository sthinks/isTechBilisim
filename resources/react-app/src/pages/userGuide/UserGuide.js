import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import { MdKeyboardArrowUp } from "react-icons/md";
import allService from "../../services/allService";
function UserGuide() {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(0);
    const [data, setData] = useState([]);
    const getHandler = async () => {
        try {
            const result = await allService.getAllGuide();
            setData(result);
            if (result) {
                setLoading(true);
            }
        } catch (error) {
            console.error("API isteği sırasında bir hata oluştu:", error);
        }
    };
    useEffect(() => {
        getHandler();
    }, []);
    return (
        <div className="w-full">
            <Banner title={"Kullanım Kılavuzları"} />
            <div className="container mx-auto max-md:px-6 mt-8">
                <div className="w-full">
                    {data.map((item, i) => (
                        <>
                            <div
                                className="w-96 flex justify-start items-center cursor-pointer"
                                onClick={() =>
                                    setOpen(open === item.id ? 0 : item.id)
                                }
                            >
                                <p className="text-6xl font-semibold opacity-70 text-slate-900">
                                    {item.name}
                                </p>
                                <MdKeyboardArrowUp
                                    className={
                                        open === item.id
                                            ? "text-5xl opacity-70 ml-2 transform rotate-0 transition-transform duration-300"
                                            : "text-5xl opacity-70 ml-2 transform rotate-180 transition-transform duration-300"
                                    }
                                />
                            </div>
                            {item.pdf_guide.map((key, k) => (
                                <ul
                                    className={`px-8 mt-4 list-disc overflow-hidden ${
                                        open === item.id ? "h-auto" : "h-0"
                                    } transition-all duration-300 ease-out`}
                                >
                                    <li className="text-xl cursor-pointer">
                                        <a
                                            href={key.download_link}
                                            target="blank"
                                        >
                                            {key.title} İndir.
                                        </a>
                                    </li>
                                </ul>
                            ))}
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserGuide;
