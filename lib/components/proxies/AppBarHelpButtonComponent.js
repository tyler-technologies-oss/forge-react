import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/app-bar-help-button";
import { useEventListener, useProperties } from "./react-utils.js";

export const AppBarHelpButtonComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { icon, ariaLabel, ariaLabelledby, options, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-menu-select", props.onForgeMenuSelect);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "options", props.options);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-app-bar-help-button",
    {
      ref,
      ...filteredProps,
      icon: props.icon,
      "aria-label": props.ariaLabel || props["aria-label"],
      "aria-labelledby": props.ariaLabelledby || props["aria-labelledby"],
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
