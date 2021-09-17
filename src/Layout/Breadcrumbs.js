import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import "./Breadcrumb.css";

const PureBreadcrumbs = ({ breadcrumbs }) => (
  <ul className="breadcrumbslist p-2 ">
    {breadcrumbs.map(({ breadcrumb, match }, index) => (
      <li className="navlink-active " key={match.url}>
        <Link to={match.url || ""}>{breadcrumb}</Link>
        {index < breadcrumbs.length - 1 && ">"}
      </li>
    ))}
  </ul>
);

export default withBreadcrumbs()(PureBreadcrumbs);
