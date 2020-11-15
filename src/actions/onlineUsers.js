import { SET_ONLINE_USERS } from "helpers/constants";

export const setOnlineUsers = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: SET_ONLINE_USERS,
      payload,
    });
  };
};
