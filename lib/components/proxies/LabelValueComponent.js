import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/label-value";
import { useProperties } from "./react-utils.js";

export const LabelValueComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { empty, ellipsis, inline, dense, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "dense", props.dense);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-label-value",
    {
      ref,
      ...filteredProps,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      empty: props.empty ? "" : undefined,
      ellipsis: props.ellipsis ? "" : undefined,
      inline: props.inline ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
