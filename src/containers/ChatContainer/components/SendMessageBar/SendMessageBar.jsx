import React, { useState } from "react";
import s from "./SendMessageBar.module.scss";
import Input from "components/Input/Input";

const SendMessageBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  return (
    <form
      className={s.sendMessageForm}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value).then(() => setValue(""));
      }}
      noValidate
    >
      <Input
        className={s.field}
        placeholder="Send a message"
        variant="outlined"
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
        autoFocus
      />
    </form>
  );
};
export default SendMessageBar;
