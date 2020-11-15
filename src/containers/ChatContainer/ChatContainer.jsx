import React, { useState, useEffect } from "react";
import s from "./ChatContainer.module.scss";
import UsersBar from "./components/UsersBar/UsersBar";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import SendMessageBar from "./components/SendMessageBar/SendMessageBar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import services from "services";
import { CircularProgress } from "@material-ui/core";
import socket from "socket";

const ChatContainer = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { user, onlineUsers } = useSelector((state) => state);

  useEffect(() => {
    services.chatServices.getUserChats(user._id).then((res) => {
      setChats(res.data);
    });
  }, [user._id]);
  useEffect(() => {
    setLoading(true);
    if (params.id) {
      services.chatServices.getChat(params.id).then((res) => {
        const newUsers = res.data.users.map((user) => {
          return {
            ...user,
            online: Boolean(
              onlineUsers.data.filter((e) => user.email === e.email).length
            ),
          };
        });
        setCurrentChat({ ...res.data, users: newUsers });
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [params.id, onlineUsers]);

  useEffect(() => {
    currentChat &&
      socket.on("ADD_MESSAGE", (message) => {
        setCurrentChat({
          ...currentChat,
          messages: [...currentChat.messages, message],
        });
      });
  }, [currentChat]);

  const handleAddMessage = async (text) => {
    await services.chatServices
      .addMessage(params.id, { author: user._id, text })
      .then((res) => {
        setCurrentChat({
          ...currentChat,
          messages: [...currentChat.messages, res.data],
        });
        const recipient = currentChat.users.filter(
          (e) => e.email !== user.email
        )[0];
        socket.emit("ADD_MESSAGE", {
          recipient: recipient.email,
          message: res.data,
        });
      });
  };
  return (
    <div className={s.chatWrap}>
      <UsersBar data={chats} user={user} />
      {currentChat && !loading && (
        <div className={s.chat}>
          <Header
            data={currentChat.users.filter((e) => e._id !== user._id)[0]}
          />
          <div className={s.messagesWrap}>
            <Messages data={currentChat.messages} user={user} />
          </div>
          <SendMessageBar onSubmit={handleAddMessage} />
        </div>
      )}
      {!currentChat && !loading && (
        <div className={s.emptyState}>Please, choose your companion</div>
      )}
      {loading && (
        <div className="loaderWrap justifyCenter alignCenter">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
export default ChatContainer;
