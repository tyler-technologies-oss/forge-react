import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/scaffold";

export const ScaffoldComponent = forwardRef((props, forwardedRef) => {
  const { viewport, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-scaffold",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      viewport: props.viewport ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
