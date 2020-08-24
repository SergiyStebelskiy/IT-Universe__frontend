import React from "react";
import s from "./NotFoundPage.module.scss";
import { IconButton } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const NotFoundPage = () => {
	return (
		<div className={s.notFoundPage}>
			<IconButton className={s.backBtn} color="primary" aria-label="back" component="span">
				<ArrowBack />
			</IconButton>
		</div>
	);
};

export default NotFoundPage;
