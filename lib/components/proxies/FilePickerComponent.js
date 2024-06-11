import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/file-picker";
import { useProperties } from "./react-utils.js";

export const FilePickerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    multiple,
    disabled,
    compact,
    borderless,
    accept,
    maxsize,
    capture,
    maxSize,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "maxSize", props.maxSize);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-file-picker",
    {
      ref,
      ...filteredProps,
      accept: props.accept,
      maxSize: props.maxsize,
      capture: props.capture,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      multiple: props.multiple ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      compact: props.compact ? "" : undefined,
      borderless: props.borderless ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
