import { SET_ONLINE_USERS } from "helpers/constants";

let initialState = {
  data: [],
  flag: false,
};

const onlineUsers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ONLINE_USERS:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
export default onlineUsers;
