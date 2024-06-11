import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/field";
import { useEventListener, useProperties } from "./react-utils.js";

export const FieldComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    floatLabel,
    invalid,
    required,
    optional,
    disabled,
    dense,
    popoverIcon,
    popoverExpanded,
    multiline,
    focusIndicatorAllowFocus,
    labelPosition,
    labelAlignment,
    variant,
    theme,
    shape,
    density,
    supportTextInset,
    focusIndicatorTarget,
    focusIndicatorFocusMode,
    focusIndicatorTargetElement,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-field-popover-icon-click",
    props.onForgeFieldPopoverIconClick
  );

  /** Properties - run whenever a property has changed */
  useProperties(
    ref,
    "focusIndicatorTargetElement",
    props.focusIndicatorTargetElement
  );

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    floatLabelWithoutAnimation: (value) =>
      ref.current.floatLabelWithoutAnimation(value),
  }));

  return React.createElement(
    "forge-field",
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
      "focus-indicator-target":
        props.focusIndicatorTarget || props["focus-indicator-target"],
      "focus-indicator-focus-mode":
        props.focusIndicatorFocusMode || props["focus-indicator-focus-mode"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "float-label": props.floatLabel ? "" : undefined,
      invalid: props.invalid ? "" : undefined,
      required: props.required ? "" : undefined,
      optional: props.optional ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      dense: props.dense ? "" : undefined,
      "popover-icon": props.popoverIcon ? "" : undefined,
      "popover-expanded": props.popoverExpanded ? "" : undefined,
      multiline: props.multiline ? "" : undefined,
      "focus-indicator-allow-focus": props.focusIndicatorAllowFocus
        ? ""
        : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
