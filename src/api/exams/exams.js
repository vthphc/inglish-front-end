import axios from "../../utils/axios.config";

const getExamsApi = () => {
	const URL_API = `/exams`;
	return axios.get(URL_API);
};

export { getExamsApi };
