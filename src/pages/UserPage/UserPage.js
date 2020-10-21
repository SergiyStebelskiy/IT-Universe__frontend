import React, { useState, useEffect, Fragment } from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, CircularProgress } from "@material-ui/core";
import services from "services";
import ProfileContainer from "containers/ProfileContainer/ProfileContainer";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [profile, setProfile] = useState(null);
  const params = useParams();
  useEffect(() => {
    services.userServices.getUser(params.id).then(({ data }) => {
      setProfile(data);
    });
  }, [params.id]);
  return (
    <Fragment>
      {profile ? (
        <MainLayout>
          <Container>
            <ProfileContainer data={profile} preview />
          </Container>
        </MainLayout>
      ) : (
        <div className="loaderWrap justifyCenter alignCenter">
          <CircularProgress />
        </div>
      )}
    </Fragment>
  );
};

export default UserPage;
