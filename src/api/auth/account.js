import axios from "../../utils/axios.config";

const getAccountApi = () => {
    const URL_API = `/account`;
    return axios.get(URL_API);
};

export { getAccountApi };
