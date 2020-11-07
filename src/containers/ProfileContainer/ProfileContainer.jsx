import React from "react";
import s from "./ProfileContainer.module.scss";
import { Typography, Grid } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import PostCard from "components/PostCard/PostCard";
import { useHistory, useParams } from "react-router-dom";
import Button from "components/Button/Button";
import services from "services";
import { useSelector } from "react-redux";

const ProfileContainer = ({ data, preview }) => {
  const history = useHistory();
  const params = useParams();
  const user = useSelector((state) => state.user);

  const handleCreateChat = () => {
    services.chatServices
      .createChat({ users: [params.id, user._id] })
      .then((res) => {
        history.push(`/chats/${res.data._id}`);
      });
  };
  const { avatarIndex, name, email, posts } = data;
  return (
    <div className={s.profileHeader}>
      <div className={s.profileBar}>
        <Avatar
          className={s.avatar}
          size="large"
          avatar={{
            index: avatarIndex,
            name: name,
          }}
        />
        <Typography className={s.name} variant="h4">
          {name}
        </Typography>
        <Typography className={s.email} variant="subtitle1">
          {email}
        </Typography>
        {preview && params.id !== user._id && (
          <Button
            className={s.chatBtn}
            variant="contained"
            color="primary"
            size="small"
            onClick={handleCreateChat}
          >
            Chat
          </Button>
        )}
      </div>
      <Grid container component="ul" spacing={2} className={s.userPostsWrap}>
        {posts.map((post) => (
          <Grid item component="li" xs={6} key={post._id}>
            <PostCard
              data={post}
              onRead={(e) => history.push(`/posts/${e._id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ProfileContainer;
