import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/chip";
import { useEventListener } from "./react-utils.js";

export const ChipComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    selected,
    invalid,
    disabled,
    dense,
    type,
    value,
    theme,
    href,
    target,
    download,
    rel,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-chip-delete", props.onForgeChipDelete);
  useEventListener(ref, "forge-chip-select", props.onForgeChipSelect);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-chip",
    {
      ref,
      ...filteredProps,
      type: props.type,
      value: props.value,
      theme: props.theme,
      href: props.href,
      target: props.target,
      download: props.download,
      rel: props.rel,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? "" : undefined,
      invalid: props.invalid ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      dense: props.dense ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
