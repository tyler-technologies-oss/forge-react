import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/switch";
import { useEventListener } from "./react-utils.js";

export const SwitchComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    on,
    selected,
    defaultOn,
    value,
    dense,
    disabled,
    required,
    readonly,
    icon,
    labelPosition,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-switch-change", props.onForgeSwitchChange);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    toggle: (force) => ref.current.toggle(force),
  }));

  return React.createElement(
    "forge-switch",
    {
      ref,
      ...filteredProps,
      on: props.on,
      selected: props.selected,
      "default-on": props.defaultOn || props["default-on"],
      value: props.value,
      dense: props.dense,
      disabled: props.disabled,
      required: props.required,
      readonly: props.readonly,
      icon: props.icon,
      "label-position": props.labelPosition || props["label-position"],
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
