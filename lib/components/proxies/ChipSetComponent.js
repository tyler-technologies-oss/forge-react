import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/chip-set";

export const ChipSetComponent = forwardRef((props, forwardedRef) => {
  const { vertical, dense, disabled, invalid, type, theme, ...filteredProps } =
    props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-chip-set",
    {
      ...filteredProps,
      type: props.type,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      vertical: props.vertical ? "" : undefined,
      dense: props.dense ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      invalid: props.invalid ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
