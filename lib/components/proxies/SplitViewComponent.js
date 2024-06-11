import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/split-view";

export const SplitViewComponent = forwardRef((props, forwardedRef) => {
  const {
    disabled,
    allowClose,
    autoClose,
    orientation,
    autoCloseThreshold,
    ...filteredProps
  } = props;

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    layerSlottedPanels: (target) => ref.current.layerSlottedPanels(target),
    unlayerSlottedPanels: () => ref.current.unlayerSlottedPanels(),
    update: (config) => ref.current.update(config),
    refit: () => ref.current.refit(),
  }));

  return React.createElement(
    "forge-split-view",
    {
      ...filteredProps,
      orientation: props.orientation,
      "auto-close-threshold":
        props.autoCloseThreshold || props["auto-close-threshold"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      "allow-close": props.allowClose ? "" : undefined,
      "auto-close": props.autoClose ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
