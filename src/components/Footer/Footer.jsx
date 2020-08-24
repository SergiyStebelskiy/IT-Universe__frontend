import React from "react";
import s from "./Footer.module.scss";
import { Container } from "@material-ui/core";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<Container>
				<div className={s.wrap}>IT-Universe, 2020</div>
			</Container>
		</footer>
	);
};

export default Footer;
