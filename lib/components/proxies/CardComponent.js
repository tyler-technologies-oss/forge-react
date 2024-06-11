import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/card";

export const CardComponent = forwardRef((props, forwardedRef) => {
  const { raised, noPadding, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-card",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      raised: props.raised ? "" : undefined,
      "no-padding": props.noPadding ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
