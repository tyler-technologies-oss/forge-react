import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/radio-group";

export const RadioGroupComponent = forwardRef((props, forwardedRef) => {
  const { disabled, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-radio-group",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
