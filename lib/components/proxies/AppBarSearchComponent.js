import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/app-bar-search";
import { useEventListener } from "./react-utils.js";

export const AppBarSearchComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { disabled, value, placeholder, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-app-bar-search-input",
    props.onForgeAppBarSearchInput
  );

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-app-bar-search",
    {
      ref,
      ...filteredProps,
      value: props.value,
      placeholder: props.placeholder,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
