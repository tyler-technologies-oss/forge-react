import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/select";
import { useEventListener, useProperties } from "./react-utils.js";

export const SelectComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    multiple,
    open,
    invalid,
    required,
    optional,
    disabled,
    floatlabel,
    dense,
    popovericon,
    label,
    placeholder,
    value,
    selectedIndex,
    labelPosition,
    labelAlignment,
    variant,
    theme,
    shape,
    density,
    supportTextInset,
    floatLabel,
    options,
    optionBuilder,
    selectedTextBuilder,
    beforeValueChange,
    popoverIcon,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-select-scrolled-bottom",
    props.onForgeSelectScrolledBottom
  );
  useEventListener(ref, "change", props.onChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "floatLabel", props.floatLabel);
  useProperties(ref, "options", props.options);
  useProperties(ref, "optionBuilder", props.optionBuilder);
  useProperties(ref, "selectedTextBuilder", props.selectedTextBuilder);
  useProperties(ref, "beforeValueChange", props.beforeValueChange);
  useProperties(ref, "popoverIcon", props.popoverIcon);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    floatLabelWithoutAnimation: (value) =>
      ref.current.floatLabelWithoutAnimation(value),
  }));

  return React.createElement(
    "forge-select",
    {
      ref,
      ...filteredProps,
      label: props.label,
      placeholder: props.placeholder,
      value: props.value,
      "selected-index": props.selectedIndex || props["selected-index"],
      "label-position": props.labelPosition || props["label-position"],
      "label-alignment": props.labelAlignment || props["label-alignment"],
      variant: props.variant,
      theme: props.theme,
      shape: props.shape,
      density: props.density,
      "support-text-inset":
        props.supportTextInset || props["support-text-inset"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      multiple: props.multiple ? "" : undefined,
      open: props.open ? "" : undefined,
      invalid: props.invalid ? "" : undefined,
      required: props.required ? "" : undefined,
      optional: props.optional ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      floatLabel: props.floatlabel ? "" : undefined,
      dense: props.dense ? "" : undefined,
      popoverIcon: props.popovericon ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
