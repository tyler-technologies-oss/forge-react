import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/divider";

export const DividerComponent = forwardRef((props, forwardedRef) => {
  const { vertical, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-divider",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      vertical: props.vertical ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
