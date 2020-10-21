import React, { useRef, useEffect } from "react";
import s from "./Messages.module.scss";
import classNames from "classnames";

const Messages = ({ data = [], user = {} }) => {
  const messageRef = useRef(null);
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [data]);
  return (
    <ul className={s.messages}>
      {data.map((message, index) => (
        <li
          className={classNames(s.message, {
            [s.my]: message.author._id === user._id,
          })}
          key={index}
        >
          <span>{message.text}</span>
        </li>
      ))}
      <div ref={messageRef} className={s.fakeMessage} />
    </ul>
  );
};
export default Messages;
