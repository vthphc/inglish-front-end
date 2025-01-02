import axios from "../../utils/axios.config";

const getPhrasesApiByUserId = (userId) => {
    const URL_API = `/phrases/user/${userId}`;
    return axios.get(URL_API);
};

const deletePhraseApi = (phraseId) => {
    const URL_API = `/phrases/${phraseId}`;
    return axios.delete(URL_API);
};

const getThisMonthPhrasesByUserApi = (userId) => {
    const URL_API = `/phrases/user/${userId}/this-month`;
    return axios.get(URL_API);
};

export { getPhrasesApiByUserId, deletePhraseApi, getThisMonthPhrasesByUserApi };
