import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/focus-indicator";
import { useProperties } from "./react-utils.js";

export const FocusIndicatorComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    active,
    inward,
    circular,
    allowFocus,
    target,
    focusMode,
    targetElement,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "targetElement", props.targetElement);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-focus-indicator",
    {
      ref,
      ...filteredProps,
      target: props.target,
      "focus-mode": props.focusMode || props["focus-mode"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      active: props.active ? "" : undefined,
      inward: props.inward ? "" : undefined,
      circular: props.circular ? "" : undefined,
      "allow-focus": props.allowFocus ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
