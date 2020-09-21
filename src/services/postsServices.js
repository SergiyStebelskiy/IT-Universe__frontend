import axios from "../axios";

export default {
	getPosts: async () => {
		try {
			return await axios.get("/posts");
		} catch (error) {
			throw error;
		}
	},
	getPost: async (id) => {
		try {
			return await axios.get(`/posts/${id}`);
		} catch (error) {
			throw error;
		}
	}
};
