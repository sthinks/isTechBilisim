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
const getAllBlogs = () => {
    return axiosClient
        .get("/blog")
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getByBlog = (slug) => {
    return axiosClient
        .get(`/blog/${slug}`)
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
const salesPointService = {
    getSalesPoint,
    getAllProduct,
    getAllBrand,
    getAllBlogs,
    getByBlog,
    getAllHomeSlider,
    getBrandOfProduct,
};
export default salesPointService;
