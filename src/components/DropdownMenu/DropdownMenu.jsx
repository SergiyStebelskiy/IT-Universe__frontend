import React from "react";
import { Menu, MenuItem, ListItemIcon, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const StyledMenu = withStyles({
	paper: {
		boxShadow:
			"0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)",
		minWidth: "150px",
		icon: {
			minWidth: "24px"
		}
	}
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: props.position
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: props.position
		}}
		{...props}
	/>
));

const DropdownMenu = ({ nodeEl, onClose, open, data, position }) => {
	return (
		<StyledMenu id="navigation" anchorEl={nodeEl} onClose={onClose} open={open} position={position} keepMounted>
			{data.map(({ title, icon, onClick }, index) => (
				<MenuItem onClick={onClick} key={index}>
					<ListItemIcon style={{ minWidth: "40px" }}>{icon}</ListItemIcon>
					<Typography variant="inherit">{title}</Typography>
				</MenuItem>
			))}
		</StyledMenu>
	);
};

DropdownMenu.propTypes = {
	position: PropTypes.oneOf([ "left", "right" ])
};

DropdownMenu.defaultProps = {
	position: "right"
};

export default DropdownMenu;
