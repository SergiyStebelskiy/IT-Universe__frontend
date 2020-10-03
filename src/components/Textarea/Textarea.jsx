import React, { Fragment } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import s from "./Textarea.module.scss";
import { TextareaAutosize } from "@material-ui/core";

const Textarea = ({ className, rows, rowsMax, rowsMin, placeholder, value, onChange, onBlur, error, name }) => {
	return (
		<Fragment>
			<TextareaAutosize
				placeholder={placeholder}
				className={classNames(s.textarea, { [s.error]: error }, className)}
				rows={rows}
				rowsMax={rowsMax}
				rowsMin={rowsMin}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				name={name}
			/>
			{error && <span className="errorMessage">{error}</span>}
		</Fragment>
	);
};
Textarea.propTypes = {
	rows: PropTypes.number
};
Textarea.defaultProps = {
	rows: 2
};
export default Textarea;
