import React from "react";
import s from "./Link.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const Reference = ({ path, children, className }) => {
	return (
		<span>
			<Link className={classNames(s.link, className)} to={path}>
				<MaterialLink component="span">{children}</MaterialLink>
			</Link>
		</span>
	);
};

Reference.propTypes = {
	path: PropTypes.node,
	children: PropTypes.node
};

Reference.defaultProps = {
	path: "",
	children: {}
};

export default Reference;
