import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/badge";

export const BadgeComponent = forwardRef((props, forwardedRef) => {
  const { dot, strong, hide, theme, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-badge",
    {
      ...filteredProps,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      dot: props.dot ? "" : undefined,
      strong: props.strong ? "" : undefined,
      hide: props.hide ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
