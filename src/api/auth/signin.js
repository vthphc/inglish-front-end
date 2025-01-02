import axios from "../../utils/axios.config";

const signinApi = (email, password) => {
    const URL_API = `/auth/login`;
    const data = {
        email,
        password,
    };
    return axios.post(URL_API, data);
};

export { signinApi };
