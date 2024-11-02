import axios from "../../utils/axios.config";

const sendTopicApi = (userId, topic) => {
    const URL_API = `/phraseCompletion`;
    const data = {
        userId,
        topic,
    };
    return axios.post(URL_API, data);
};

export { sendTopicApi };
