import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/icon-button";
import { useEventListener, useProperties } from "./react-utils.js";

export const IconButtonComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    toggle,
    on,
    disabled,
    popoverIcon,
    dense,
    variant,
    theme,
    shape,
    density,
    type,
    name,
    value,
    form,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "click", props.onClick);
  useEventListener(
    ref,
    "forge-icon-button-toggle",
    props.onForgeIconButtonToggle
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "form", props.form);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    click: () => ref.current.click(),
    focus: (options) => ref.current.focus(options),
  }));

  return React.createElement(
    "forge-icon-button",
    {
      ref,
      ...filteredProps,
      variant: props.variant,
      theme: props.theme,
      shape: props.shape,
      density: props.density,
      type: props.type,
      name: props.name,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      toggle: props.toggle ? "" : undefined,
      on: props.on ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      "popover-icon": props.popoverIcon ? "" : undefined,
      dense: props.dense ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
