import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/date-picker";
import { useEventListener, useProperties } from "./react-utils.js";

export const DatePickerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    allowInvalidDate,
    disabled,
    masked,
    open,
    showClear,
    showMaskFormat,
    showToday,
    value,
    disabledDaysOfWeek,
    locale,
    maskFormat,
    max,
    min,
    popupClasses,
    valueMode,
    yearRange,
    disabledDates,
    notifyInputValueChanges,
    parseCallback,
    formatCallback,
    prepareMaskCallback,
    disableDayCallback,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-date-picker-change",
    props.onForgeDatePickerChange
  );
  useEventListener(ref, "forge-date-picker-open", props.onForgeDatePickerOpen);
  useEventListener(
    ref,
    "forge-date-picker-close",
    props.onForgeDatePickerClose
  );
  useEventListener(
    ref,
    "forge-date-picker-input",
    props.onForgeDatePickerInput
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "disabledDates", props.disabledDates);
  useProperties(ref, "notifyInputValueChanges", props.notifyInputValueChanges);
  useProperties(ref, "parseCallback", props.parseCallback);
  useProperties(ref, "formatCallback", props.formatCallback);
  useProperties(ref, "prepareMaskCallback", props.prepareMaskCallback);
  useProperties(ref, "disableDayCallback", props.disableDayCallback);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-date-picker",
    {
      ref,
      ...filteredProps,
      value: props.value,
      "disabled-days-of-week":
        props.disabledDaysOfWeek || props["disabled-days-of-week"],
      locale: props.locale,
      "mask-format": props.maskFormat || props["mask-format"],
      max: props.max,
      min: props.min,
      "popup-classes": props.popupClasses || props["popup-classes"],
      "value-mode": props.valueMode || props["value-mode"],
      "year-range": props.yearRange || props["year-range"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "allow-invalid-date": props.allowInvalidDate ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      masked: props.masked ? "" : undefined,
      open: props.open ? "" : undefined,
      "show-clear": props.showClear ? "" : undefined,
      "show-mask-format": props.showMaskFormat ? "" : undefined,
      "show-today": props.showToday ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
