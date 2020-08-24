import React, { useState, useEffect, Fragment } from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, Typography } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import s from "./ProfilePage.module.scss";
import services from "services";
import { useSelector } from "react-redux";

const ProfilePage = () => {
	const [ profile, setProfile ] = useState(null);
	const user = useSelector((state) => state.user);
	useEffect(
		() => {
			if (user._id) {
				setProfile(user);
			} else {
				services.profileServices.getSelf().then(({ data }) => setProfile(data));
			}
		},
		[ user ]
	);
	return (
		<Fragment>
			{profile && (
				<MainLayout>
					<Container>
						<div className={s.profileHeader}>
							<div className={s.profileBar}>
								<Avatar
									className={s.avatar}
									size="large"
									avatar={{
										index: profile.avatarIndex,
										name: profile.name
									}}
								/>
								<Typography className={s.name} variant="h4">
									{profile.name}
								</Typography>
								<Typography className={s.email} variant="subtitle1">
									{profile.email}
								</Typography>
							</div>
						</div>
					</Container>
				</MainLayout>
			)}
		</Fragment>
	);
};

export default ProfilePage;
