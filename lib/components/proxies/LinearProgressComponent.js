import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/linear-progress";

export const LinearProgressComponent = forwardRef((props, forwardedRef) => {
  const { determinate, progress, buffer, theme, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-linear-progress",
    {
      ...filteredProps,
      progress: props.progress,
      buffer: props.buffer,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      determinate: props.determinate ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
