import axios from "../../utils/axios.config";

const postExamResult = (userId, examId, title, data) => {
	const { selectedAnswers, score } = { ...data };
	const body = { examId, title, selectedAnswers, score };
	const URL_API = `/users/${userId}/exams-taken`;
	console.log("body: ", body);
	return axios.post(URL_API, body);
};

const getExamHistory = (userId) => {
	const URL_API = `/users/${userId}/exams-taken`;
	return axios.get(URL_API);
};

const getExamHistoryById = (userId, examId) => {
	const URL_API = `/users/${userId}/exams-taken/${examId}`;
	return axios.get(URL_API);
};

export { postExamResult, getExamHistory, getExamHistoryById };
