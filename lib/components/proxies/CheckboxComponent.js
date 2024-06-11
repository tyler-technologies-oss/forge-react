import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/checkbox";
import { useEventListener, useProperties } from "./react-utils.js";

export const CheckboxComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    checked,
    defaultchecked,
    indeterminate,
    value,
    disabled,
    required,
    readonly,
    dense,
    labelPosition,
    defaultChecked,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "defaultChecked", props.defaultChecked);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    toggle: (force) => ref.current.toggle(force),
  }));

  return React.createElement(
    "forge-checkbox",
    {
      ref,
      ...filteredProps,
      checked: props.checked,
      defaultChecked: props.defaultchecked,
      indeterminate: props.indeterminate,
      value: props.value,
      disabled: props.disabled,
      required: props.required,
      readonly: props.readonly,
      dense: props.dense,
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
