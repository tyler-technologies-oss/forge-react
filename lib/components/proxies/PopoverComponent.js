import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/popover";
import { useEventListener, useProperties } from "./react-utils.js";

export const PopoverComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    noAnchor,
    open,
    inline,
    shift,
    persistent,
    arrow,
    animationType,
    triggerType,
    longpressDelay,
    persistentHover,
    hoverDismissDelay,
    hoverDelay,
    preset,
    anchor,
    placement,
    positionStrategy,
    offset,
    hide,
    flip,
    boundary,
    overlay,
    anchorElement,
    boundaryElement,
    fallbackPlacements,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-popover-beforetoggle",
    props.onForgePopoverBeforetoggle
  );
  useEventListener(ref, "forge-popover-toggle", props.onForgePopoverToggle);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "overlay", props.overlay);
  useProperties(ref, "anchorElement", props.anchorElement);
  useProperties(ref, "boundaryElement", props.boundaryElement);
  useProperties(ref, "fallbackPlacements", props.fallbackPlacements);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    hideAsync: () => ref.current.hideAsync(),
    position: () => ref.current.position(),
  }));

  return React.createElement(
    "forge-popover",
    {
      ref,
      ...filteredProps,
      arrow: props.arrow,
      "animation-type": props.animationType || props["animation-type"],
      "trigger-type": props.triggerType || props["trigger-type"],
      "longpress-delay": props.longpressDelay || props["longpress-delay"],
      "persistent-hover": props.persistentHover || props["persistent-hover"],
      "hover-dismiss-delay":
        props.hoverDismissDelay || props["hover-dismiss-delay"],
      "hover-delay": props.hoverDelay || props["hover-delay"],
      preset: props.preset,
      anchor: props.anchor,
      placement: props.placement,
      "position-strategy": props.positionStrategy || props["position-strategy"],
      offset: props.offset,
      hide: props.hide,
      flip: props.flip,
      boundary: props.boundary,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "no-anchor": props.noAnchor ? "" : undefined,
      open: props.open ? "" : undefined,
      inline: props.inline ? "" : undefined,
      shift: props.shift ? "" : undefined,
      persistent: props.persistent ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
