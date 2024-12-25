import axios from "../../utils/axios.config";

const readingAI = (lessonId, questions) => {
	const URL_API = `/lessonCompletion/reading`;
	const data = {
		lessonId,
		questions,
	};
	return axios.post(URL_API, data);
};

export { readingAI };
