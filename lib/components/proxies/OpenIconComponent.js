import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/open-icon";

export const OpenIconComponent = forwardRef((props, forwardedRef) => {
  const { open, orientation, rotation, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-open-icon",
    {
      ...filteredProps,
      orientation: props.orientation,
      rotation: props.rotation,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
