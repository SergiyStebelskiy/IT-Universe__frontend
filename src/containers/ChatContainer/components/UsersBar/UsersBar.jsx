import React from "react";
import s from "./UsersBar.module.scss";
import Avatar from "components/Avatar/Avatar";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const UsersBar = ({ data = [], user }) => {
  const history = useHistory();
  const getUser = (chat) => {
    return chat.users.filter((e) => e._id !== user._id)[0];
  };
  return (
    <div className={s.usersBarWrap}>
      <ul className={s.usersBar}>
        {data.map((chat, index) => (
          <li
            className={s.user}
            key={index}
            onClick={() => {
              history.push(`/chats/${chat._id}`);
            }}
          >
            <Avatar
              avatar={{
                name: getUser(chat).name,
                index: getUser(chat).avatarIndex,
              }}
            />
            <div className={s.userData}>
              <Typography variant="h6">{getUser(chat).name}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersBar;
