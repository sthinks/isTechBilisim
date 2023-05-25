import axiosClient from "../utils/axiosClient";

const getSalesPoint = () => {
    return axiosClient
        .get("/sales-points")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getAllProduct = () => {
    return axiosClient
        .get("/product")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getAllBrand = () => {
    return axiosClient
        .get("/brand")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getAllBlogs = (lang) => {
    return axiosClient
        .get("/blog", {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getByBlog = (slug, lang) => {
    return axiosClient
        .get(`/blog/${slug}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept-Language": lang,
            },
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getAllHomeSlider = () => {
    return axiosClient
        .get("/home-slider")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getBrandOfProduct = (value) => {
    return axiosClient
        .get(`/product-of-the-brand/${value}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getSearch = (value) => {
    return axiosClient
        .get(`/search/${value}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const salesPointService = {
    getSalesPoint,
    getAllProduct,
    getAllBrand,
    getAllBlogs,
    getByBlog,
    getAllHomeSlider,
    getBrandOfProduct,
    getSearch,
};
export default salesPointService;
