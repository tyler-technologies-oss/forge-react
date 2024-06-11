import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/mini-drawer";
import { useEventListener } from "./react-utils.js";

export const MiniDrawerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { hover, open, direction, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-drawer-after-open",
    props.onForgeDrawerAfterOpen
  );
  useEventListener(
    ref,
    "forge-drawer-after-close",
    props.onForgeDrawerAfterClose
  );

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-mini-drawer",
    {
      ref,
      ...filteredProps,
      direction: props.direction,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      hover: props.hover ? "" : undefined,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
