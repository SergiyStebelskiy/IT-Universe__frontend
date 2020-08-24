import React from "react";
import s from "./Button.module.scss";
import classNames from "classnames";
import Btn from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { Check } from "@material-ui/icons";
import { CircularProgress } from "@material-ui/core";

const Button = (props) => {
	const { loading, success, startIcon, children, className, ...rest } = props;
	return (
		<Btn startIcon={success ? <Check /> : startIcon} {...rest} className={classNames(s.btn, className)}>
			{loading ? <CircularProgress color="inherit" size={30} /> : children}
		</Btn>
	);
};

Button.propTypes = {
	loading: PropTypes.bool,
	success: PropTypes.bool
};

Button.defaultProps = {
	loading: false,
	success: false
};

export default Button;
