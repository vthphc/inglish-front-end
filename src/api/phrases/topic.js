import { body } from "motion/react-client";
import axios from "../../utils/axios.config";

const sendTopicApi = (userId, topic) => {
    const URL_API = `/phraseCompletion`;
    const data = {
        userId,
        topic,
    };
    return axios.post(URL_API, data);
};

const getPhraseContextSuggestionsApi = (topic) => {
    const URL_API = `/phraseCompletion/generateContext`;
    const data = {
        topic,
    };
    return axios.post(URL_API, data);
};

const getPhraseWithContextAndTopicApi = (userId, topic, context) => {
    const URL_API = `/phraseCompletion/phrasesWithContext`;
    const data = {
        userId,
        topic,
        context,
    };
    return axios.post(URL_API, data);
};

export {
    getPhraseContextSuggestionsApi,
    getPhraseWithContextAndTopicApi,
    sendTopicApi,
};
