import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/expansion-panel";
import { useEventListener } from "./react-utils.js";

export const ExpansionPanelComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, orientation, animationType, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-expansion-panel-toggle",
    props.onForgeExpansionPanelToggle
  );
  useEventListener(
    ref,
    "forge-expansion-panel-animation-complete",
    props.onForgeExpansionPanelAnimationComplete
  );

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    toggle: () => ref.current.toggle(),
  }));

  return React.createElement(
    "forge-expansion-panel",
    {
      ref,
      ...filteredProps,
      orientation: props.orientation,
      "animation-type": props.animationType || props["animation-type"],
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
