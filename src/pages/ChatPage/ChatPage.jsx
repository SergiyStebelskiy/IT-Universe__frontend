import React from "react";
import s from "./ChatPage.module.scss";
import MainLayout from "layouts/MainLayout/MainLayout";
import ChatContainer from "containers/ChatContainer/ChatContainer";

const ChatPage = () => {
  return (
    <MainLayout className={s.chatPage}>
      <ChatContainer />
    </MainLayout>
  );
};

export default ChatPage;
