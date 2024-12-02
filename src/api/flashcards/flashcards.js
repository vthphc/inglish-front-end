import axios from "../../utils/axios.config";

const getFlashcardsByUserApi = (userId) => {
    const URL_API = `/flashcards/user/${userId}`; //userId trong request r nên không cần truyền vào api này
    return axios.get(URL_API);
};

const postFlashcardApi = (topic, userId) => {
    const URL_API = `/flashcardsCompletion`;
    const data = {
        topic,
        userId,
    };
    return axios.post(URL_API, data);
};

const getFlashcardById = (flashcardId) => {
    const URL_API = `/flashcards/${flashcardId}`;
    return axios.get(URL_API);
};

const deleteFlashcardApi = (flashcardId) => {
	const URL_API = `/flashcards/${flashcardId}`;
	return axios.delete(URL_API);
};

export { getFlashcardsByUserApi, postFlashcardApi, getFlashcardById, deleteFlashcardApi };
