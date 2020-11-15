import React, { useEffect } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ADMIN, GUEST, USER } from "helpers/userRoles";
import socket from "socket";
import { setOnlineUsers } from "actions/onlineUsers";
import { connect } from "react-redux";
import services from "services";

const RouteWithSubRoutes = ({
  allowed,
  exact,
  path,
  Component,
  setOnlineUsers,
}) => {
  const { user, onlineUsers } = useSelector((state) => state);
  useEffect(() => {
    if (user.type !== GUEST) {
      socket.emit("CONNECT", user.email);
      socket.on("ONLINE_USERS", (users) => {
        console.log("online users:", users);
        setOnlineUsers({ data: [...users, user] });
      });
    }
    if (!onlineUsers.flag && user.type !== GUEST) {
      services.userServices.getOnlineUsers().then((res) => {
        setOnlineUsers({ data: res.data, flag: true });
      });
    }
  }, [user]);

  if (!allowed.includes(user.type)) {
    switch (user.type) {
      case GUEST:
        return <Redirect to="/login" />;
      case USER:
        return <Redirect to="/profile" />;
      case ADMIN:
        return <Redirect to="/profile" />;
      default:
        return <Redirect to="/login" />;
    }
  }
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => <Component {...props} />}
    ></Route>
  );
};

export default connect(null, { setOnlineUsers })(
  withRouter(RouteWithSubRoutes)
);
