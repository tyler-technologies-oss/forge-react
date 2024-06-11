import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/circular-progress";

export const CircularProgressComponent = forwardRef((props, forwardedRef) => {
  const { determinate, track, progress, theme, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-circular-progress",
    {
      ...filteredProps,
      progress: props.progress,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      determinate: props.determinate ? "" : undefined,
      track: props.track ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
