import React from "react";
import { NavLink } from "react-router-dom";

function HeaderLink({ to, ...rest }) {
  return (
    <NavLink
      {...rest}
      to={{ pathname: to, state: { breadcrumb: "reset" } }}
      activeClassName="navlink-active"
    />
  );
}

export default HeaderLink;
