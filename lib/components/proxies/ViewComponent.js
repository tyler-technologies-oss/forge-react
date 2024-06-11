import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/view";

export const ViewComponent = forwardRef((props, forwardedRef) => {
  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-view",
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
