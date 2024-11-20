import axios from "../../utils/axios.config";

const getLessonByIdApi = (lessonId) => {
	const URL_API = `/lessons/${lessonId}`;
	return axios.get(URL_API);
};

export { getLessonByIdApi };
