import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../config.json";

axios.defaults.baseURL = configFile.apiEndpoint;

axios.interceptors.response.use(
    function (config) {
        config.url = config.url.slice(0, -1) + ".json";
        console.log(config.url);
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (res) => res,
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (!expectedErrors) {
            // console.log(error);
            toast.error("Somthing was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};
export default httpService;
