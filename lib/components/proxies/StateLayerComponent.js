import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/state-layer";
import { useProperties } from "./react-utils.js";

export const StateLayerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, target, targetElement, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "targetElement", props.targetElement);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    playAnimation: (coords) => ref.current.playAnimation(coords),
  }));

  return React.createElement(
    "forge-state-layer",
    {
      ref,
      ...filteredProps,
      target: props.target,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
