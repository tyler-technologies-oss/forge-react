import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/button-area";
import { useEventListener } from "./react-utils.js";

export const ButtonAreaComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "click", props.onClick);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-button-area",
    {
      ref,
      ...filteredProps,
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
