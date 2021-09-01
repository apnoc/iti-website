import React from "react";

// Route components don't re-mount when the route changes
// if the new route is rendered by the same component
// as the old route. This remounts the component in
// case there is internal state which we want to be
// reset when the route changes.
export default function withRouteRemount(Component) {
  return props => {
    const { location, match } = props;
    const key = JSON.stringify({ to: location.pathname, params: match.params });
    return <Component key={key} {...props} />;
  };
}
