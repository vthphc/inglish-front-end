import axios from "../../utils/axios.config";

const signupApi = (username, email, password) => {
    const URL_API = `/auth/register`;
    const data = {
        username,
        email,
        password,
    };
    return axios.post(URL_API, data);
};

export { signupApi };