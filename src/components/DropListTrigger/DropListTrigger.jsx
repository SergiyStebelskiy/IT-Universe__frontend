import React, { useState } from "react";
import PropTypes from "prop-types";
import DropdownMenu from "components/DropdownMenu/DropdownMenu";
import { MoreVert } from "@material-ui/icons";
import classNames from "classnames";
import s from "./DropListTrigger.module.scss";

const DropListTrigger = ({ data, className }) => {
	const [ anchorEl, setAnchorEl ] = useState(null);
	const open = Boolean(anchorEl);

	return (
		<div className={classNames(s.wrapDropListTrigger, className)}>
			<button className={s.trigger} onClick={(e) => setAnchorEl(e.currentTarget)}>
				<MoreVert className={s.menu} />
			</button>
			<DropdownMenu nodeEl={anchorEl} data={data} onClose={() => setAnchorEl(null)} open={open} />
		</div>
	);
};

DropListTrigger.propTypes = {
	data: PropTypes.array
};

DropListTrigger.defaultProps = {
	data: []
};

export default DropListTrigger;
