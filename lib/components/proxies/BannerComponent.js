import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/banner";
import { useEventListener, useProperties } from "./react-utils.js";

export const BannerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { dismissed, persistent, theme, canDismiss, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-banner-before-dismiss",
    props.onForgeBannerBeforeDismiss
  );
  useEventListener(ref, "forge-banner-dismissed", props.onForgeBannerDismissed);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "canDismiss", props.canDismiss);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-banner",
    {
      ref,
      ...filteredProps,
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      dismissed: props.dismissed ? "" : undefined,
      persistent: props.persistent ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
