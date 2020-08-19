import axios from "../axios";
import { save } from "helpers/localStorage";

export default {
	registration: async (params) => {
		try {
			const result = await axios.post("/registration", params);
			return result;
		} catch (error) {
			throw error;
		}
	},
	authorization: async (params) => {
		try {
			const result = await axios.post("/login", params);
			if (result.status === 200) {
				axios.defaults.headers["Authorization"] = result.data;
			}
			save("accessToken", result.data);
			return result;
		} catch (error) {
			throw error;
		}
	}
};
