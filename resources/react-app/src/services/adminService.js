import axiosAdmin from "../utils/axiosAdmin";
const postCheckOrginalAdmin = (value, page) => {
    return axiosAdmin
        .post(`/is-original-deneme?page=${page}`, {
            search_value: value,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const logOutAdmin = (value) => {
    return axiosAdmin
        .post("/logout", {
            serial_no: value,
        })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const getAllSeri = (value) => {
    return axiosAdmin
        .get(`/productListSeri?page=${value}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const importData = async (file) => {
    return await axiosAdmin
        .post(`/importxls`, file)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const exportData = (start, end) => {
    return axiosAdmin
        .get(`/export`, { params: { start: start, end: end } })

        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const exportQueryData = (value) => {
    return axiosAdmin
        .post(`/denemelaa`, { search_value: value })

        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return error.response;
        });
};
const salesPointService = {
    postCheckOrginalAdmin,
    logOutAdmin,
    getAllSeri,
    importData,
    exportData,
    exportQueryData,
};
export default salesPointService;
