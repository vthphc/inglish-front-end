import axios from "../../utils/axios.config";

const postExamResult = (userId, examId, data) => {
	const { selectedAnswers, score } = { ...data };
	const body = { examId, selectedAnswers, score };
	const URL_API = `/users/${userId}/exams-taken`;
    console.log("body: ", body);
	return axios.post(URL_API, body);
};

export { postExamResult };
