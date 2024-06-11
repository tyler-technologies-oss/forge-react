import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/dialog";
import { useEventListener, useProperties } from "./react-utils.js";

export const DialogComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    persistent,
    fullscreen,
    moveable,
    mode,
    type,
    animationtype,
    preset,
    trigger,
    positionstrategy,
    sizestrategy,
    placement,
    animationType,
    triggerElement,
    positionStrategy,
    sizeStrategy,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-dialog-open", props.onForgeDialogOpen);
  useEventListener(ref, "forge-dialog-close", props.onForgeDialogClose);
  useEventListener(
    ref,
    "forge-dialog-before-close",
    props.onForgeDialogBeforeClose
  );
  useEventListener(
    ref,
    "forge-dialog-move-start",
    props.onForgeDialogMoveStart
  );
  useEventListener(ref, "forge-dialog-move", props.onForgeDialogMove);
  useEventListener(ref, "forge-dialog-move-end", props.onForgeDialogMoveEnd);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "animationType", props.animationType);
  useProperties(ref, "triggerElement", props.triggerElement);
  useProperties(ref, "positionStrategy", props.positionStrategy);
  useProperties(ref, "sizeStrategy", props.sizeStrategy);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    show: () => ref.current.show(),
    hide: () => ref.current.hide(),
  }));

  return React.createElement(
    "forge-dialog",
    {
      ref,
      ...filteredProps,
      mode: props.mode,
      type: props.type,
      animationType: props.animationtype,
      preset: props.preset,
      trigger: props.trigger,
      positionStrategy: props.positionstrategy,
      sizeStrategy: props.sizestrategy,
      placement: props.placement,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      open: props.open ? "" : undefined,
      persistent: props.persistent ? "" : undefined,
      fullscreen: props.fullscreen ? "" : undefined,
      moveable: props.moveable ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
