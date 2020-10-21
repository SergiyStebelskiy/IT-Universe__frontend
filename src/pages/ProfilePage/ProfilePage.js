import React, { useState, useEffect, Fragment } from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, CircularProgress } from "@material-ui/core";
import services from "services";
import { setUser } from "actions/user";
import { connect } from "react-redux";
import { USER } from "helpers/userRoles";
import ProfileContainer from "containers/ProfileContainer/ProfileContainer";

const ProfilePage = ({ setUser }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    services.profileServices.getSelf().then(({ data }) => {
      setProfile(data);
      setUser({
        type: USER,
        ...data,
      });
    });
  }, [setUser]);
  return (
    <Fragment>
      {profile ? (
        <MainLayout>
          <Container>
            <ProfileContainer data={profile} />
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

export default connect(null, { setUser })(ProfilePage);
