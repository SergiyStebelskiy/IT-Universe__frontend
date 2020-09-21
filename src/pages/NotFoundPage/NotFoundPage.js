import React from "react";
import s from "./NotFoundPage.module.scss";
import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
	const history = useHistory();
	return (
		<div className={s.notFoundPage}>
			<IconButton
				onClick={() => history.goBack()}
				className={s.backBtn}
				color="primary"
				aria-label="back"
				component="span"
			>
				<ArrowBack />
			</IconButton>
		</div>
	);
};

export default NotFoundPage;
