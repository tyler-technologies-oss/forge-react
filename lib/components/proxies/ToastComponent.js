import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/toast";
import { useEventListener } from "./react-utils.js";

export const ToastComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    dismissible,
    duration,
    placement,
    actionText,
    dismissLabel,
    theme,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-toast-action", props.onForgeToastAction);
  useEventListener(ref, "forge-toast-close", props.onForgeToastClose);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    show: () => ref.current.show(),
    hide: () => ref.current.hide(),
  }));

  return React.createElement(
    "forge-toast",
    {
      ref,
      ...filteredProps,
      duration: props.duration,
      placement: props.placement,
      "action-text": props.actionText || props["action-text"],
      "dismiss-label": props.dismissLabel || props["dismiss-label"],
      theme: props.theme,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      dismissible: props.dismissible ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
