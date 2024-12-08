import axios from "../../utils/axios.config";

const getPhrasesApiByUserId = (userId) => {
    const URL_API = `/phrases/user/${userId}`;
    return axios.get(URL_API);
};

export { getPhrasesApiByUserId };