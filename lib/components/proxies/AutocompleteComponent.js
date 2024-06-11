import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/autocomplete";
import { useProperties } from "./react-utils.js";

export const AutocompleteComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    mode,
    multiple,
    value,
    debounce,
    filterOnFocus,
    filterFocusFirst,
    allowUnmatched,
    popupTarget,
    filterText,
    optionBuilder,
    filter,
    selectedTextBuilder,
    open,
    matchKey,
    isInitialized,
    popupElement,
    beforeValueChange,
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
  useProperties(ref, "mode", props.mode);
  useProperties(ref, "multiple", props.multiple);
  useProperties(ref, "value", props.value);
  useProperties(ref, "debounce", props.debounce);
  useProperties(ref, "filterOnFocus", props.filterOnFocus);
  useProperties(ref, "filterFocusFirst", props.filterFocusFirst);
  useProperties(ref, "allowUnmatched", props.allowUnmatched);
  useProperties(ref, "popupTarget", props.popupTarget);
  useProperties(ref, "filterText", props.filterText);
  useProperties(ref, "optionBuilder", props.optionBuilder);
  useProperties(ref, "filter", props.filter);
  useProperties(ref, "selectedTextBuilder", props.selectedTextBuilder);
  useProperties(ref, "open", props.open);
  useProperties(ref, "matchKey", props.matchKey);
  useProperties(ref, "isInitialized", props.isInitialized);
  useProperties(ref, "popupElement", props.popupElement);
  useProperties(ref, "beforeValueChange", props.beforeValueChange);
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
    openDropdown: () => ref.current.openDropdown(),
    closeDropdown: () => ref.current.closeDropdown(),
    forceFilter: (opts) => ref.current.forceFilter(opts),
  }));

  return React.createElement(
    "forge-autocomplete",
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
