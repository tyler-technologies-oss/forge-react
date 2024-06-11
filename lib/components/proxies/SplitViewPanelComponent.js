import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/split-view-panel";
import { useEventListener } from "./react-utils.js";

export const SplitViewPanelComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    disabled,
    allowClose,
    autoClose,
    resizable,
    size,
    min,
    max,
    accessibleLabel,
    autoCloseThreshold,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-split-view-panel-will-resize",
    props.onForgeSplitViewPanelWillResize
  );
  useEventListener(
    ref,
    "forge-split-view-panel-resize-start",
    props.onForgeSplitViewPanelResizeStart
  );
  useEventListener(
    ref,
    "forge-split-view-panel-resize-end",
    props.onForgeSplitViewPanelResizeEnd
  );
  useEventListener(
    ref,
    "forge-split-view-panel-resize",
    props.onForgeSplitViewPanelResize
  );
  useEventListener(
    ref,
    "forge-split-view-panel-will-open",
    props.onForgeSplitViewPanelWillOpen
  );
  useEventListener(
    ref,
    "forge-split-view-panel-will-close",
    props.onForgeSplitViewPanelWillClose
  );
  useEventListener(
    ref,
    "forge-split-view-panel-did-open",
    props.onForgeSplitViewPanelDidOpen
  );
  useEventListener(
    ref,
    "forge-split-view-panel-did-close",
    props.onForgeSplitViewPanelDidClose
  );

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    getContentSize: () => ref.current.getContentSize(),
    getCollapsibleSize: () => ref.current.getCollapsibleSize(),
    setContentSize: (size) => ref.current.setContentSize(size),
    update: (config) => ref.current.update(config),
  }));

  return React.createElement(
    "forge-split-view-panel",
    {
      ref,
      ...filteredProps,
      resizable: props.resizable,
      size: props.size,
      min: props.min,
      max: props.max,
      "accessible-label": props.accessibleLabel || props["accessible-label"],
      "auto-close-threshold":
        props.autoCloseThreshold || props["auto-close-threshold"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      "allow-close": props.allowClose ? "" : undefined,
      "auto-close": props.autoClose ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
