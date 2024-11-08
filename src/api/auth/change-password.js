import axios from "../../utils/axios.config";

const changeInfoApi = (username, email, oldPassword, newPassword) => {
	const URL_API = `/auth/change-info`;
	const data = {
		username,
		email,
		oldPassword,
		newPassword,
	};
	return axios.patch(URL_API, data);
};

export { changeInfoApi };
