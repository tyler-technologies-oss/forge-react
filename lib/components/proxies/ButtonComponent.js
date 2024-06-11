import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/button";
import { useEventListener, useProperties } from "./react-utils.js";

export const ButtonComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    fullWidth,
    disabled,
    popoverIcon,
    dense,
    pill,
    type,
    variant,
    name,
    value,
    theme,
    form,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "click", props.onClick);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "form", props.form);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    click: () => ref.current.click(),
    focus: (options) => ref.current.focus(options),
  }));

  return React.createElement(
    "forge-button",
    {
      ref,
      ...filteredProps,
      type: props.type,
      variant: props.variant,
      name: props.name,
      value: props.value,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "full-width": props.fullWidth ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      "popover-icon": props.popoverIcon ? "" : undefined,
      dense: props.dense ? "" : undefined,
      pill: props.pill ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
