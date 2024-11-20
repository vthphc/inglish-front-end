import axios from "../../utils/axios.config";

const getAccountApi = () => {
	const URL_API = `/account`;
	return axios.get(URL_API);
};

const postExamScoreApi = (examId, score) => {
	const URL_API = `/account/exam/${examId}`;
	return axios.post(URL_API, { score });
};

export { getAccountApi, postExamScoreApi };
