import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/text-field";
import { useEventListener, useProperties } from "./react-utils.js";

export const TextFieldComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    showClear,
    invalid,
    required,
    optional,
    disabled,
    floatLabel,
    dense,
    popoverIcon,
    popoverExpanded,
    labelPosition,
    labelAlignment,
    variant,
    theme,
    shape,
    density,
    supportTextInset,
    popoverTargetElement,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-text-field-clear", props.onForgeTextFieldClear);
  useEventListener(
    ref,
    "forge-field-popover-icon-click",
    props.onForgeFieldPopoverIconClick
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "popoverTargetElement", props.popoverTargetElement);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    floatLabelWithoutAnimation: (value) =>
      ref.current.floatLabelWithoutAnimation(value),
  }));

  return React.createElement(
    "forge-text-field",
    {
      ref,
      ...filteredProps,
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
      "show-clear": props.showClear ? "" : undefined,
      invalid: props.invalid ? "" : undefined,
      required: props.required ? "" : undefined,
      optional: props.optional ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      "float-label": props.floatLabel ? "" : undefined,
      dense: props.dense ? "" : undefined,
      "popover-icon": props.popoverIcon ? "" : undefined,
      "popover-expanded": props.popoverExpanded ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
