import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/icon";
import { useProperties } from "./react-utils.js";

export const IconComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    lazy,
    external,
    name,
    src,
    externaltype,
    viewbox,
    theme,
    externalType,
    externalUrlBuilder,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "externalType", props.externalType);
  useProperties(ref, "externalUrlBuilder", props.externalUrlBuilder);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    layout: () => ref.current.layout(),
  }));

  return React.createElement(
    "forge-icon",
    {
      ref,
      ...filteredProps,
      name: props.name,
      src: props.src,
      externalType: props.externaltype,
      viewbox: props.viewbox,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      lazy: props.lazy ? "" : undefined,
      external: props.external ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
