import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/button-toggle";
import { useEventListener } from "./react-utils.js";

export const ButtonToggleComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { selected, disabled, readonly, value, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-button-toggle-select",
    props.onForgeButtonToggleSelect
  );

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-button-toggle",
    {
      ref,
      ...filteredProps,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      readonly: props.readonly ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
