import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/time-picker";
import { useProperties } from "./react-utils.js";

export const TimePickerComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    value,
    open,
    allowSeconds,
    masked,
    showMaskFormat,
    use24HourTime,
    allowInvalidTime,
    min,
    max,
    restrictedTimes,
    startTime,
    step,
    allowInput,
    showNow,
    showHourOptions,
    customOptions,
    validationCallback,
    parseCallback,
    formatCallback,
    coercionCallback,
    prepareMaskCallback,
    disabled,
    popupClasses,
    allowDropdown,
    popupTarget,
    ...filteredProps
  } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "value", props.value);
  useProperties(ref, "open", props.open);
  useProperties(ref, "allowSeconds", props.allowSeconds);
  useProperties(ref, "masked", props.masked);
  useProperties(ref, "showMaskFormat", props.showMaskFormat);
  useProperties(ref, "use24HourTime", props.use24HourTime);
  useProperties(ref, "allowInvalidTime", props.allowInvalidTime);
  useProperties(ref, "min", props.min);
  useProperties(ref, "max", props.max);
  useProperties(ref, "restrictedTimes", props.restrictedTimes);
  useProperties(ref, "startTime", props.startTime);
  useProperties(ref, "step", props.step);
  useProperties(ref, "allowInput", props.allowInput);
  useProperties(ref, "showNow", props.showNow);
  useProperties(ref, "showHourOptions", props.showHourOptions);
  useProperties(ref, "customOptions", props.customOptions);
  useProperties(ref, "validationCallback", props.validationCallback);
  useProperties(ref, "parseCallback", props.parseCallback);
  useProperties(ref, "formatCallback", props.formatCallback);
  useProperties(ref, "coercionCallback", props.coercionCallback);
  useProperties(ref, "prepareMaskCallback", props.prepareMaskCallback);
  useProperties(ref, "disabled", props.disabled);
  useProperties(ref, "popupClasses", props.popupClasses);
  useProperties(ref, "allowDropdown", props.allowDropdown);
  useProperties(ref, "popupTarget", props.popupTarget);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-time-picker",
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
