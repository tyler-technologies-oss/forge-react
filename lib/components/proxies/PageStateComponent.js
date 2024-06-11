import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/page-state";

export const PageStateComponent = forwardRef((props, forwardedRef) => {
  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-page-state",
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
