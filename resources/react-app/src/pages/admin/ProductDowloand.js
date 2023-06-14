import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsArrowRight, BsCloudDownload, BsXLg } from "react-icons/bs";
import "react-datepicker/dist/react-datepicker.css";
import tr from "date-fns/locale/tr";
import adminService from "../../services/adminService";
import { registerLocale, setDefaultLocale } from "react-datepicker";
function ProductDowloand() {
    registerLocale("tr", tr);
    const [modal, setModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const submitDate = async () => {
        const monthDif = monthDifference(startDate, endDate);
        if (monthDif < 6) {
            setModal(false);

            const firstDate = `${startDate.getFullYear()}-${
                startDate.getMonth() + 1
            }-${startDate.getDate()}`;
            const secondDate = `${endDate.getFullYear()}-${
                endDate.getMonth() + 1
            }-${endDate.getDate()}`;

            const url = `/api/export?start=${firstDate}&end=${secondDate}`;
            window.open(url);
        } else {
            setModal(true);
        }
    };

    const monthDifference = (dateFirst, dateSecond) => {
        var yil1 = dateFirst.getFullYear();
        var ay1 = dateFirst.getMonth();
        var yil2 = dateSecond.getFullYear();
        var ay2 = dateSecond.getMonth();

        var ayFarki = (yil2 - yil1) * 12 + (ay2 - ay1);

        return ayFarki;
    };
    return (
        <div className="">
            <div className="px-3">
                <p className="text-xl">
                    İndirmek istediğiniz ürünlerin kayıt tarihi aralığını
                    girerek indirebilirsiniz.
                </p>
                <p className="text-sm">
                    (Tarih aralığını maksimum 6 ay aralığında seçerek indirme
                    işleminizi gerçekleştirebilirsiniz.)
                </p>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-start w-full items-end mt-5">
                    <div>
                        <p className="mx-2 mb-2 font-semibold text-xl">
                            Başlangıç Tarihi
                        </p>
                        <DatePicker
                            className="h-10 bg-white shadow-contactShadow mx-2 px-5"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            locale="tr"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div>
                        <BsArrowRight className="text-2xl mb-2" />
                    </div>
                    <div>
                        <p className="mx-2 mb-2 font-semibold text-xl">
                            Bitiş Tarihi
                        </p>
                        <DatePicker
                            className="h-10 bg-white shadow-contactShadow mx-2 px-5"
                            selected={endDate}
                            locale="tr"
                            onChange={(date) => setEndDate(date)}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-5 px-2">
                <button
                    type="button"
                    className="w-32 flex justify-between items-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => submitDate()}
                >
                    <BsCloudDownload className="text-2xl font-semibold" />
                    <p className="text-xl">İndir</p>
                </button>
            </div>

            {modal && (
                <div className="px-2 mt-4 bg-red-500 text-white rounded-xl py-3 flex justify-between items-center">
                    <p>Lütfen ay aralığını 6 aydan küçük yapınız.</p>

                    <BsXLg
                        onClick={() => setModal(false)}
                        className=" rounded-sm cursor-pointer bg-white text-2xl text-black hover:scale-125 duration-150 delay-200"
                    />
                </div>
            )}
        </div>
    );
}

export default ProductDowloand;
