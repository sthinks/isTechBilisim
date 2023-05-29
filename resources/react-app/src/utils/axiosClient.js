import axios from "axios"; // i18n kütüphanesinin yolunu düzgün şekilde belirtin
import i18n from "../i18n";
const storedLanguage = localStorage.getItem("i18n");
const AxiosClient = axios.create({
    baseURL: `http://127.0.0.1:8000/api`,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": storedLanguage,
    },
});

export default AxiosClient;
