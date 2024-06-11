import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/fab";
import { useEventListener } from "./react-utils.js";

export const FloatingActionButtonComponent = forwardRef(
  (props, forwardedRef) => {
    const ref = useRef(null);
    const {
      disabled,
      popoverIcon,
      dense,
      theme,
      density,
      elevation,
      type,
      name,
      value,
      ...filteredProps
    } = props;

    /** Event listeners - run once */
    useEventListener(ref, "click", props.onClick);

    /** Methods - uses `useImperativeHandle` hook to pass ref to component */
    useImperativeHandle(forwardedRef, () => ({
      click: () => ref.current.click(),
      focus: (options) => ref.current.focus(options),
    }));

    return React.createElement(
      "forge-fab",
      {
        ref,
        ...filteredProps,
        theme: props.theme,
        density: props.density,
        elevation: props.elevation,
        type: props.type,
        name: props.name,
        value: props.value,
        class: props.className,
        exportparts: props.exportparts,
        for: props.htmlFor,
        part: props.part,
        tabindex: props.tabIndex,
        disabled: props.disabled ? "" : undefined,
        "popover-icon": props.popoverIcon ? "" : undefined,
        dense: props.dense ? "" : undefined,
        style: { ...props.style },
      },
      props.children
    );
  }
);
