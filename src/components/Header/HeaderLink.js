import React from "react";
import { NavLink } from "react-router-dom";


// Reset the breadcrumb when any top-level
// navigation links are clicked.
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