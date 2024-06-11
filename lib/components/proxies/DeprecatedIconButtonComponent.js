import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/deprecated-icon-button";
import { useEventListener } from "./react-utils.js";

export const DeprecatedIconButtonComponent = forwardRef(
  (props, forwardedRef) => {
    const ref = useRef(null);

    /** Event listeners - run once */
    useEventListener(
      ref,
      "forge-icon-button-toggle",
      props.onForgeIconButtonToggle
    );

    useImperativeHandle(forwardedRef, () => ({}));

    return React.createElement(
      "forge-deprecated-icon-button",
      {
        ref,
        ...props,
        class: props.className,
        exportparts: props.exportparts,
        for: props.htmlFor,
        part: props.part,
        tabindex: props.tabIndex,
        style: { ...props.style },
      },
      props.children
    );
  }
);
