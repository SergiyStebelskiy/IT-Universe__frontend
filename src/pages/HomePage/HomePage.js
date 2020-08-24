import React from "react";
import s from "./HomePage.module.scss";
import MainLayout from "layouts/MainLayout/MainLayout";
import { ReactComponent as LeftBg } from "images/home-page/left-bg.svg";
import { ReactComponent as RightBg } from "images/home-page/right-bg.svg";
import { Typography } from "@material-ui/core";
import Button from "components/Button/Button";
import { useHistory } from "react-router-dom";

const Homepage = () => {
	const history = useHistory();
	return (
		<MainLayout className={s.homeLayout}>
			<div className={s.homePage}>
				<LeftBg className={s.bg} />
				<RightBg className={s.bg} />
				<div className={s.content}>
					<Typography variant="h1" className={s.title}>
						New way to follow IT life
					</Typography>
					<Typography variant="h6" className={s.subtitle}>
						IT blog and social network in one place
					</Typography>
					<Button onClick={() => history.push("/registration")} variant="outlined" className={s.btn}>
						Registration
					</Button>
				</div>
			</div>
		</MainLayout>
	);
};

export default Homepage;
