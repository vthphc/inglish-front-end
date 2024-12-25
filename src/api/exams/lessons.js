import axios from "../../utils/axios.config";

const getAIExplanationApi = (lessonId, questions) => {
    const URL_API = `/lessonCompletion/reading`;
    return axios.get(URL_API);
};

export { getAIExplanationApi };