import { LOGIN, LOGOUT } from "helpers/constants";
import { remove } from "helpers/localStorage";

export const login = (user) => {
	return async (dispatch) => {
		dispatch({
			type: LOGIN,
			payload: user
		});
	};
};

export const logout = () => {
	return async (dispatch) => {
		dispatch({
			type: LOGOUT
		});
		remove("accessToken");
		remove("currentUser");
	};
};
