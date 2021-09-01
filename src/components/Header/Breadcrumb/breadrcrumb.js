import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

export const BreadcrumbContext = React.createContext();

export const push = (payload) => ({ type: "PUSH", payload });
export const replace = (payload) => ({ type: "REPLACE", payload });

Breadcrumbs.children = PropTypes.func.isRequired;

export default function Breadcrumbs({ children }) {
  const [breadcrumbs, dispatch] = React.useReducer(reducer, []);

  return (
    <BreadcrumbContext.Provider value={dispatch}>
      {children({ breadcrumbs })}
    </BreadcrumbContext.Provider>
  );
}

export const Breadcrumb = withRouter(({ location, title, children }) => {
  const dispatch = React.useContext(BreadcrumbContext);
  const titleRef = React.useRef();
  const [prevTitle, setPrevTitle] = React.useState(title);
  titleRef.current = title;

  React.useEffect(() => {
    const crumb = {
      to: location.pathname + (location.search || ""),
      state: location.state,
      children: titleRef.current,
    };

    dispatch(push(crumb));
  }, [location, dispatch]);

  if (title !== prevTitle) {
    const crumb = {
      to: location.pathname + (location.search || ""),
      children: title,
    };

    dispatch(replace(crumb));
    setPrevTitle(title);
  }

  return children || null;
});

function reducer(breadcrumbs, { type, payload }) {
  switch (type) {
    case "PUSH": {
      if (!payload.children) return [];

      if (payload.state && payload.state.breadcrumb === "reset") {
        breadcrumbs = [];
      } else {
        const idx = breadcrumbs.findIndex(
          (crumb) => crumb.children === payload.children
        );
        if (idx >= 0) breadcrumbs = breadcrumbs.slice(0, idx);
      }

      return breadcrumbs.concat([payload]);
    }
    case "REPLACE": {
      const idx = breadcrumbs.findIndex(
        (crumb) => crumb.children === payload.children
      );
      if (idx >= 0) breadcrumbs = breadcrumbs.slice(0, idx + 1);
      breadcrumbs[breadcrumbs.length - 1].children = payload.children;
      return [...breadcrumbs];
    }
    default: {
      throw new Error(`Unexpected type: ${type}`);
    }
  }
}
