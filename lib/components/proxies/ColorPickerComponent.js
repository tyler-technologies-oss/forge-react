import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/color-picker";
import { useEventListener, useProperties } from "./react-utils.js";

export const ColorPickerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    allowOpacity,
    debounceChangeEvent,
    value,
    rgba,
    hsva,
    opacity,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-color-picker-change",
    props.onForgeColorPickerChange
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "rgba", props.rgba);
  useProperties(ref, "hsva", props.hsva);
  useProperties(ref, "opacity", props.opacity);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-color-picker",
    {
      ref,
      ...filteredProps,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "allow-opacity": props.allowOpacity ? "" : undefined,
      "debounce-change-event": props.debounceChangeEvent ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
