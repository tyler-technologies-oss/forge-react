import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/tab";
import { useEventListener } from "./react-utils.js";

export const TabComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    disabled,
    selected,
    vertical,
    stacked,
    secondary,
    inverted,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-tab-select", props.onForgeTabSelect);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-tab",
    {
      ref,
      ...filteredProps,
      disabled: props.disabled,
      selected: props.selected,
      vertical: props.vertical,
      stacked: props.stacked,
      secondary: props.secondary,
      inverted: props.inverted,
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
