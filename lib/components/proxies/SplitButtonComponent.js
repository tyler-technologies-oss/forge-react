import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/split-button";

export const SplitButtonComponent = forwardRef((props, forwardedRef) => {
  const { disabled, dense, pill, variant, theme, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-split-button",
    {
      ...filteredProps,
      variant: props.variant,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      dense: props.dense ? "" : undefined,
      pill: props.pill ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
