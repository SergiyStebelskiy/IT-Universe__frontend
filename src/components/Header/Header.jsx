import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import classNames from "classnames";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import Button from "components/Button/Button";
import { Person, ExitToApp, Add, QueryBuilder, Chat } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { logout } from "actions/user";
import { connect } from "react-redux";
import { load } from "helpers/localStorage";
import CreatePostPopup from "popups/CreatePostPopup/CreatePostPopup";
import NotificationBox from "components/NotificationBox/NotificationBox";
import { ADMIN } from "helpers/userRoles";
import SearchBar from "./components/SearchBar/SearchBar";

const Header = ({ className, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [createPostPopup, setCreatePostPopup] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const open = Boolean(anchorEl);
  const history = useHistory();
  const user = load("currentUser");
  const userMenu = [
    {
      title: "Profile",
      icon: <Person />,
      onClick: () => history.push("/profile"),
    },
    {
      title: "Messages",
      icon: <Chat />,
      onClick: () => history.push("/chats"),
    },
    user &&
      user.type === ADMIN && {
        title: "Requests posts",
        icon: <QueryBuilder />,
        onClick: () => history.push("/requests-posts"),
      },
    {
      title: "Create post",
      icon: <Add />,
      onClick: () => setCreatePostPopup(true),
    },
    {
      title: "Logout",
      icon: <ExitToApp />,
      onClick: () => {
        logout();
        history.push("/login");
      },
    },
  ];
  return (
    <header className={classNames(s.header, className)}>
      <Container>
        <div className={s.wrap}>
          <div className={s.col}>
            <Link to="/" className={s.logo}>
              IT-Universe
            </Link>
            <SearchBar />
          </div>
          {user ? (
            <div>
              <Avatar
                className={s.avatar}
                onClick={(e) => setAnchorEl(e.currentTarget)}
                avatar={{
                  index: user.avatarIndex,
                  name: user.name,
                }}
              />
              <DropdownMenu
                nodeEl={anchorEl}
                data={userMenu}
                onClose={() => setAnchorEl(null)}
                open={open}
              />
            </div>
          ) : (
            <div className={s.btnWrap}>
              <Button
                onClick={() => history.push("/login")}
                className={s.login}
              >
                Log in
              </Button>
              <Button
                onClick={() => history.push("/registration")}
                variant="outlined"
                className={s.registration}
              >
                Registration
              </Button>
            </div>
          )}
        </div>
      </Container>
      {createPostPopup && (
        <CreatePostPopup
          onClose={() => setCreatePostPopup(false)}
          setAlert={setAlert}
        />
      )}
      {alert.message.length > 0 && (
        <NotificationBox
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ type: "", message: "" })}
        />
      )}
    </header>
  );
};

export default connect(null, { logout })(Header);
