import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/tab-bar";
import { useEventListener, useProperties } from "./react-utils.js";

export const TabBarComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    disabled,
    vertical,
    clustered,
    stacked,
    secondary,
    autoActivate,
    scrollButtons,
    activeTab,
    inverted,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-tab-bar-change", props.onForgeTabBarChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "inverted", props.inverted);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-tab-bar",
    {
      ref,
      ...filteredProps,
      "active-tab": props.activeTab || props["active-tab"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      disabled: props.disabled ? "" : undefined,
      vertical: props.vertical ? "" : undefined,
      clustered: props.clustered ? "" : undefined,
      stacked: props.stacked ? "" : undefined,
      secondary: props.secondary ? "" : undefined,
      "auto-activate": props.autoActivate ? "" : undefined,
      "scroll-buttons": props.scrollButtons ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
