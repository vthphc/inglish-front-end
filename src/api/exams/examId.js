import axios from "../../utils/axios.config";

const getExamByIdApi = (examId) => {
	const URL_API = `/exams/${examId}`;
	return axios.get(URL_API);
};

export { getExamByIdApi };
