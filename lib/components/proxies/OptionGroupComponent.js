import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/option-group";
import { useProperties } from "./react-utils.js";

export const OptionGroupComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { value, text, label, options, builder, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "label", props.label);
  useProperties(ref, "options", props.options);
  useProperties(ref, "builder", props.builder);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-option-group",
    {
      ref,
      ...filteredProps,
      value: props.value,
      text: props.text,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      style: { ...props.style },
    },
    props.children
  );
});
