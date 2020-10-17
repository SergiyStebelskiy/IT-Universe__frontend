import React, { useState, useRef } from "react";
import s from "./SearchBar.module.scss";
import Input from "components/Input/Input";
import services from "services";
import Avatar from "components/Avatar/Avatar";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useOutsideClicker from "hooks/useOutsideClicker";

const SearchBar = () => {
  const history = useHistory();
  const [searchVal, setSearchVal] = useState("");
  const [users, setUsers] = useState([]);

  const dropdownRef = useRef(null);

  const handleClear = () => {
    setUsers([]);
    setSearchVal("");
  };
  useOutsideClicker(dropdownRef, () => handleClear());

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearchVal(val);
    if (val.length) {
      services.userServices.searchUsers(val).then((res) => {
        setUsers(res.data);
      });
    } else {
      setUsers([]);
    }
  };
  return (
    <div className={s.searchBar} ref={dropdownRef}>
      <Input
        className={s.searchField}
        placeholder="Search user"
        variant="outlined"
        size="small"
        value={searchVal}
        onChange={handleSearch}
      />
      {users.length > 0 && (
        <ul className={s.users}>
          {users.map((item, index) => (
            <li
              className={s.item}
              key={index}
              onClick={() => {
                history.push(`/users/${item._id}`);
                handleClear();
              }}
            >
              <Avatar
                className={s.avatar}
                avatar={{ index: item.avatarIndex, name: item.name }}
              />
              <div className={s.userData}>
                <Typography className={s.name} variant="body2">
                  {item.name}
                </Typography>
                <Typography className={s.email} variant="body2">
                  {item.email}
                </Typography>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchBar;
