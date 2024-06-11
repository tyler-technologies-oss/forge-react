import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/inline-message";

export const InlineMessageComponent = forwardRef((props, forwardedRef) => {
  const { theme, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-inline-message",
    {
      ...filteredProps,
      theme: props.theme,
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
