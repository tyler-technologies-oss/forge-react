import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/drawer";
import { useEventListener } from "./react-utils.js";

export const DrawerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, direction, ...filteredProps } = props;

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
    "forge-drawer",
    {
      ref,
      ...filteredProps,
      direction: props.direction,
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
