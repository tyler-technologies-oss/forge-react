import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/app-bar-notification-button";

export const AppBarNotificationButtonComponent = forwardRef(
  (props, forwardedRef) => {
    const {
      dot,
      showBadge,
      count,
      theme,
      icon,
      ariaLabel,
      ariaLabelledby,
      ...filteredProps
    } = props;

    useImperativeHandle(forwardedRef, () => ({}));

    return React.createElement(
      "forge-app-bar-notification-button",
      {
        ...filteredProps,
        count: props.count,
        theme: props.theme,
        icon: props.icon,
        "aria-label": props.ariaLabel || props["aria-label"],
        "aria-labelledby": props.ariaLabelledby || props["aria-labelledby"],
        class: props.className,
        exportparts: props.exportparts,
        for: props.htmlFor,
        part: props.part,
        tabindex: props.tabIndex,
        dot: props.dot ? "" : undefined,
        "show-badge": props.showBadge ? "" : undefined,
        style: { ...props.style },
      },
      props.children
    );
  }
);
