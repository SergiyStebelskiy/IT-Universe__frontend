import React from "react";
import s from "./Header.module.scss";
import Avatar from "components/Avatar/Avatar";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Header = ({ data = {} }) => {
  const history = useHistory();
  return (
    <header
      className={s.chatHeader}
      onClick={() => history.push(`/users/${data._id}`)}
    >
      <Avatar
        avatar={{ name: data.name, index: data.avatarIndex }}
        online={data.online}
      />
      <div className={s.data}>
        <Typography className={s.userName} variant="h6">
          {data.name}
        </Typography>
        <Typography className={s.userEmail} variant="body1">
          {data.email}
        </Typography>
      </div>
    </header>
  );
};
export default Header;
