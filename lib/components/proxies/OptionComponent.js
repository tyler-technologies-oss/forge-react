import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/option";
import { useProperties } from "./react-utils.js";

export const OptionComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    disabled,
    divider,
    value,
    label,
    secondaryLabel,
    optionClass,
    leadingIcon,
    leadingIconClass,
    leadingIconType,
    trailingIcon,
    trailingIconClass,
    trailingIconType,
    leadingIconComponentProps,
    trailingIconComponentProps,
    leadingBuilder,
    trailingBuilder,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(
    ref,
    "leadingIconComponentProps",
    props.leadingIconComponentProps
  );
  useProperties(
    ref,
    "trailingIconComponentProps",
    props.trailingIconComponentProps
  );
  useProperties(ref, "leadingBuilder", props.leadingBuilder);
  useProperties(ref, "trailingBuilder", props.trailingBuilder);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-option",
    {
      ref,
      ...filteredProps,
      value: props.value,
      label: props.label,
      "secondary-label": props.secondaryLabel || props["secondary-label"],
      "option-class": props.optionClass || props["option-class"],
      "leading-icon": props.leadingIcon || props["leading-icon"],
      "leading-icon-class":
        props.leadingIconClass || props["leading-icon-class"],
      "leading-icon-type": props.leadingIconType || props["leading-icon-type"],
      "trailing-icon": props.trailingIcon || props["trailing-icon"],
      "trailing-icon-class":
        props.trailingIconClass || props["trailing-icon-class"],
      "trailing-icon-type":
        props.trailingIconType || props["trailing-icon-type"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      divider: props.divider ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
