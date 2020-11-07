import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MUBadge from "@material-ui/core/Badge";

const Badge = (props) => {
  const { online, children } = props;
  const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: online ? "#44b700" : "#b5b5b5",
      color: online ? "#44b700" : "#b5b5b5",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: online ? "$ripple 1.2s infinite ease-in-out" : "none",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(MUBadge);
  return (
    <StyledBadge
      {...props}
      overlap="circle"
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      variant="dot"
      invisible={online === undefined}
    >
      {children}
    </StyledBadge>
  );
};
export default Badge;
