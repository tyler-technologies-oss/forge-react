import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/overlay";
import { useEventListener, useProperties } from "./react-utils.js";

export const OverlayComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    anchor,
    noAnchor,
    open,
    inline,
    placement,
    positionStrategy,
    hide,
    persistent,
    shift,
    flip,
    positionPlacement,
    boundary,
    fallbackPlacements,
    arrowElement,
    arrowElementOffset,
    anchorElement,
    offset,
    boundaryElement,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-overlay-light-dismiss",
    props.onForgeOverlayLightDismiss
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "arrowElement", props.arrowElement);
  useProperties(ref, "arrowElementOffset", props.arrowElementOffset);
  useProperties(ref, "anchorElement", props.anchorElement);
  useProperties(ref, "offset", props.offset);
  useProperties(ref, "boundaryElement", props.boundaryElement);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-overlay",
    {
      ref,
      ...filteredProps,
      anchor: props.anchor,
      "no-anchor": props.noAnchor || props["no-anchor"],
      open: props.open,
      inline: props.inline,
      placement: props.placement,
      "position-strategy": props.positionStrategy || props["position-strategy"],
      hide: props.hide,
      persistent: props.persistent,
      shift: props.shift,
      flip: props.flip,
      "position-placement":
        props.positionPlacement || props["position-placement"],
      boundary: props.boundary,
      "fallback-placements":
        props.fallbackPlacements || props["fallback-placements"],
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
