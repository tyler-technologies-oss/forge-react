import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/select-dropdown";
import { useProperties } from "./react-utils.js";

export const SelectDropdownComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    multiple,
    open,
    value,
    selectedIndex,
    target,
    selectedTextTarget,
    syncSelectedText,
    options,
    optionBuilder,
    selectedTextBuilder,
    beforeValueChange,
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
  useProperties(ref, "target", props.target);
  useProperties(ref, "selectedTextTarget", props.selectedTextTarget);
  useProperties(ref, "syncSelectedText", props.syncSelectedText);
  useProperties(ref, "options", props.options);
  useProperties(ref, "optionBuilder", props.optionBuilder);
  useProperties(ref, "selectedTextBuilder", props.selectedTextBuilder);
  useProperties(ref, "beforeValueChange", props.beforeValueChange);
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
    appendOptions: (options) => ref.current.appendOptions(options),
    selectAll: () => ref.current.selectAll(),
    deselectAll: () => ref.current.deselectAll(),
  }));

  return React.createElement(
    "forge-select-dropdown",
    {
      ref,
      ...filteredProps,
      value: props.value,
      "selected-index": props.selectedIndex || props["selected-index"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      multiple: props.multiple ? "" : undefined,
      open: props.open ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
