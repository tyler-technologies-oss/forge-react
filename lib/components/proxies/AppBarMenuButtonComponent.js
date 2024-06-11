import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/app-bar-menu-button";

export const AppBarMenuButtonComponent = forwardRef((props, forwardedRef) => {
  const { icon, ariaLabel, ariaLabelledby, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-app-bar-menu-button",
    {
      ...filteredProps,
      icon: props.icon,
      "aria-label": props.ariaLabel || props["aria-label"],
      "aria-labelledby": props.ariaLabelledby || props["aria-labelledby"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children
  );
});
