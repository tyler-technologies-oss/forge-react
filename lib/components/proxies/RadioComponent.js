import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/radio";

export const RadioComponent = forwardRef((props, forwardedRef) => {
  const {
    checked,
    defaultChecked,
    dense,
    disabled,
    required,
    readonly,
    value,
    labelPosition,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-radio",
    {
      ...filteredProps,
      value: props.value,
      "label-position": props.labelPosition || props["label-position"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      checked: props.checked ? "" : undefined,
      "default-checked": props.defaultChecked ? "" : undefined,
      dense: props.dense ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      required: props.required ? "" : undefined,
      readonly: props.readonly ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
