import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/deprecated-button";

export const DeprecatedButtonComponent = forwardRef((props, forwardedRef) => {
  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-deprecated-button",
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
