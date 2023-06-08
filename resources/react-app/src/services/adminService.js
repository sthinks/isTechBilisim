import axiosAdmin from "../utils/axiosAdmin";
const postCheckOrginalAdmin = (value) => {
    return axiosAdmin
        .post("/is-original-admin", {
            serial_no: value,
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
const importData = (file) => {
    return axiosAdmin
        .post(`/import`, file)
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
};
export default salesPointService;
