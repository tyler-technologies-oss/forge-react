import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/bottom-sheet";
import { useEventListener } from "./react-utils.js";

export const BottomSheetComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { open, persistent, fullscreen, mode, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-bottom-sheet-before-close",
    props.onForgeBottomSheetBeforeClose
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-close",
    props.onForgeBottomSheetClose
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-open",
    props.onForgeBottomSheetOpen
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-drag-start",
    props.onForgeBottomSheetDragStart
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-dragged",
    props.onForgeBottomSheetDragged
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-drag-end",
    props.onForgeBottomSheetDragEnd
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-drag-cancel",
    props.onForgeBottomSheetDragCancel
  );
  useEventListener(
    ref,
    "forge-bottom-sheet-fullscreen",
    props.onForgeBottomSheetFullscreen
  );

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-bottom-sheet",
    {
      ref,
      ...filteredProps,
      mode: props.mode,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      persistent: props.persistent ? "" : undefined,
      fullscreen: props.fullscreen ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
