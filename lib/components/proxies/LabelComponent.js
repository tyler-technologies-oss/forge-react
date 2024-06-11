import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/label";
import { useProperties } from "./react-utils.js";

export const LabelComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    dynamic,
    nonInteractive,
    legend,
    forElement,
    clickTarget,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "forElement", props.forElement);
  useProperties(ref, "clickTarget", props.clickTarget);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    update: () => ref.current.update(),
  }));

  return React.createElement(
    "forge-label",
    {
      ref,
      ...filteredProps,
      for: props.for,
      class: props.className,
      exportparts: props.exportparts,
      part: props.part,
      tabindex: props.tabIndex,
      dynamic: props.dynamic ? "" : undefined,
      "non-interactive": props.nonInteractive ? "" : undefined,
      legend: props.legend ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
