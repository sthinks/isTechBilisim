import axios from "axios"; // i18n kütüphanesinin yolunu düzgün şekilde belirtin
import i18n from "../i18n";
const storedLanguage = localStorage.getItem("i18n");
const AxiosClient = axios.create({
    baseURL: `https://istechiletisim.com/api`,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": storedLanguage,
    },
});

export default AxiosClient;
