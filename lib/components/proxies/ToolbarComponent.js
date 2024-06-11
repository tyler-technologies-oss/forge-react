import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/toolbar";

export const ToolbarComponent = forwardRef((props, forwardedRef) => {
  const {
    inverted,
    noDivider,
    noBorder,
    noPadding,
    autoHeight,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-toolbar",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      inverted: props.inverted ? "" : undefined,
      "no-divider": props.noDivider ? "" : undefined,
      "no-border": props.noBorder ? "" : undefined,
      "no-padding": props.noPadding ? "" : undefined,
      "auto-height": props.autoHeight ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
