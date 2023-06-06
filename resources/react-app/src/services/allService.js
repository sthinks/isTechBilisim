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
const getSearch = (value, lang) => {
    return axiosClient
        .get(`/search/${value}`, {
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
const getAllGuide = () => {
    return axiosClient
        .get(`/all-guide`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const postFrenchies = (value) => {
    return axiosClient
        .post(`/franchise-contact`, value)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const postContact = (value) => {
    return axiosClient
        .post(`/contact`, value)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const postCheckOrginal = (value) => {
    return axiosClient
        .post("/is-original", {
            serial_no: value,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};

const loginAdmin = (value) => {
    return axiosClient
        .post("/login", value)
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
    getAllGuide,
    postFrenchies,
    postContact,
    postCheckOrginal,
    loginAdmin,
};
export default salesPointService;
