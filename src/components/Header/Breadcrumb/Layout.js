import React from "react";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./breadrcrumb";
import Header from "../index"
import './styles.css'

// Renders the top-level navigation and the
// breadcrumbs.
export default function Layout({ children }) {
  return (
    <>
      <Header />

      <Breadcrumbs>
        {({ breadcrumbs }) => (
          <>
            <ul className="breadcrumb">
              {breadcrumbs.reduce(
                (list, crumb, index) => {
                  list.push(
                    <li key={index + 1}>
                      <NavLink
                        to={crumb.to}
                        exact
                        activeClassName="navlink-active"
                      >
                        {crumb.children}
                      </NavLink>
                    </li>
                  );
                  return list;
                },
                [
                  <li key="0">
                    <NavLink
                      to={{ pathname: "/", state: { breadcrumb: "reset" } }}
                      exact
                      activeStyle={{ display: "none" }}
                      state={{ breadcrumb: "reset" }}
                    >
                      Home
                    </NavLink>
                  </li>
                ]
              )}
            </ul>

            {/* 
            Render children inside the Breadcrumbs to 
            provide Context to the rest of the app 
            */}
            {children}
          </>
        )}
      </Breadcrumbs>
    </>
  );
}
