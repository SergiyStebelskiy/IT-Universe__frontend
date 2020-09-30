import React, { useState, useEffect, Fragment } from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import { Container, Typography, Grid, CircularProgress } from "@material-ui/core";
import Avatar from "components/Avatar/Avatar";
import s from "./ProfilePage.module.scss";
import services from "services";
import PostCard from "components/PostCard/PostCard";
import { setUser } from "actions/user";
import { connect } from "react-redux";
import { USER } from "helpers/userRoles";

const ProfilePage = ({ setUser }) => {
	const [ profile, setProfile ] = useState(null);
	useEffect(
		() => {
			services.profileServices.getSelf().then(({ data }) => {
				setProfile(data);
				setUser({
					type: USER,
					...data
				});
			});
		},
		[ setUser ]
	);
	return (
		<Fragment>
			{profile ? (
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
							<Grid container component="ul" spacing={2} className={s.userPostsWrap}>
								{profile.posts.map((post) => (
									<Grid item component="li" xs={6} key={post._id}>
										<PostCard data={post} />
									</Grid>
								))}
							</Grid>
						</div>
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
