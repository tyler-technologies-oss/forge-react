import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/menu";
import { useProperties } from "./react-utils.js";

export const MenuComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    open,
    options,
    selectedIndex,
    selectedValue,
    placement,
    fallbackPlacements,
    dense,
    iconClass,
    persistSelection,
    mode,
    popupOffset,
    optionBuilder,
    popupElement,
    popupClasses,
    popupHeaderBuilder,
    popupFooterBuilder,
    syncPopupWidth,
    optionLimit,
    observeScroll,
    observeScrollThreshold,
    constrainPopupWidth,
    wrapOptionText,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "open", props.open);
  useProperties(ref, "options", props.options);
  useProperties(ref, "selectedIndex", props.selectedIndex);
  useProperties(ref, "selectedValue", props.selectedValue);
  useProperties(ref, "placement", props.placement);
  useProperties(ref, "fallbackPlacements", props.fallbackPlacements);
  useProperties(ref, "dense", props.dense);
  useProperties(ref, "iconClass", props.iconClass);
  useProperties(ref, "persistSelection", props.persistSelection);
  useProperties(ref, "mode", props.mode);
  useProperties(ref, "popupOffset", props.popupOffset);
  useProperties(ref, "optionBuilder", props.optionBuilder);
  useProperties(ref, "popupElement", props.popupElement);
  useProperties(ref, "popupClasses", props.popupClasses);
  useProperties(ref, "popupHeaderBuilder", props.popupHeaderBuilder);
  useProperties(ref, "popupFooterBuilder", props.popupFooterBuilder);
  useProperties(ref, "syncPopupWidth", props.syncPopupWidth);
  useProperties(ref, "optionLimit", props.optionLimit);
  useProperties(ref, "observeScroll", props.observeScroll);
  useProperties(ref, "observeScrollThreshold", props.observeScrollThreshold);
  useProperties(ref, "constrainPopupWidth", props.constrainPopupWidth);
  useProperties(ref, "wrapOptionText", props.wrapOptionText);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    propagateKeyEvent: (evt) => ref.current.propagateKeyEvent(evt),
  }));

  return React.createElement(
    "forge-menu",
    {
      ref,
      ...filteredProps,
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
