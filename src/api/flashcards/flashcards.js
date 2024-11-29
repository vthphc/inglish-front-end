import axios from "../../utils/axios.config";

const getFlashcardsByUserApi = (userId) => {
	const URL_API = `/flashcards/user/${userId}`; //userId trong request r nên không cần truyền vào api này
	return axios.get(URL_API);
};

const postFlashcardApi = (topic) => {
	const URL_API = `/flashcards`;
	return axios.post(URL_API, topic);
};

const getFlashcardById = (flashcardId) => {
	const URL_API = `/flashcards/${flashcardId}`;
	return axios.get(URL_API);
}

export { getFlashcardsByUserApi, postFlashcardApi, getFlashcardById };
