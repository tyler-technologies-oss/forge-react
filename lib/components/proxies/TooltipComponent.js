import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/tooltip";
import { useProperties } from "./react-utils.js";

export const TooltipComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    type,
    anchor,
    placement,
    delay,
    offset,
    flip,
    boundary,
    fallbackPlacements,
    triggerType,
    target,
    position,
    boundaryElement,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "target", props.target);
  useProperties(ref, "position", props.position);
  useProperties(ref, "boundaryElement", props.boundaryElement);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-tooltip",
    {
      ref,
      ...filteredProps,
      type: props.type,
      anchor: props.anchor,
      placement: props.placement,
      delay: props.delay,
      offset: props.offset,
      flip: props.flip,
      boundary: props.boundary,
      "fallback-placements":
        props.fallbackPlacements || props["fallback-placements"],
      "trigger-type": props.triggerType || props["trigger-type"],
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
