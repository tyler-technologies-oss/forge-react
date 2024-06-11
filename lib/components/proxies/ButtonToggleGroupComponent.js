import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/button-toggle-group";
import { useEventListener } from "./react-utils.js";

export const ButtonToggleGroupComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    outlined,
    multiple,
    stretch,
    mandatory,
    vertical,
    disabled,
    readonly,
    dense,
    value,
    theme,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-button-toggle-group-change",
    props.onForgeButtonToggleGroupChange
  );

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-button-toggle-group",
    {
      ref,
      ...filteredProps,
      value: props.value,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      outlined: props.outlined ? "" : undefined,
      multiple: props.multiple ? "" : undefined,
      stretch: props.stretch ? "" : undefined,
      mandatory: props.mandatory ? "" : undefined,
      vertical: props.vertical ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      readonly: props.readonly ? "" : undefined,
      dense: props.dense ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
