import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/profile-card";

export const ProfileCardComponent = forwardRef((props, forwardedRef) => {
  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-profile-card",
    {
      ...props,
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
