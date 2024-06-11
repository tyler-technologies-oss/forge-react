import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/backdrop";

export const BackdropComponent = forwardRef((props, forwardedRef) => {
  const { visible, fixed, ...filteredProps } = props;

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    show: () => ref.current.show(),
    hide: () => ref.current.hide(),
    fadeIn: () => ref.current.fadeIn(),
    fadeOut: () => ref.current.fadeOut(),
  }));

  return React.createElement(
    "forge-backdrop",
    {
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      visible: props.visible ? "" : undefined,
      fixed: props.fixed ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
