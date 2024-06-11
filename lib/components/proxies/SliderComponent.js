import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/slider";
import { useEventListener, useProperties } from "./react-utils.js";

export const SliderComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    range,
    tickmarks,
    labeled,
    disabled,
    readonly,
    dataAriaLabel,
    dataAriaLabelStart,
    dataAriaLabelEnd,
    value,
    valueStart,
    valueEnd,
    label,
    labelStart,
    labelEnd,
    min,
    max,
    step,
    name,
    nameStart,
    nameEnd,
    labelBuilder,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-slider-input", props.onForgeSliderInput);
  useEventListener(ref, "forge-slider-change", props.onForgeSliderChange);
  useEventListener(
    ref,
    "forge-slider-range-input",
    props.onForgeSliderRangeInput
  );
  useEventListener(
    ref,
    "forge-slider-range-change",
    props.onForgeSliderRangeChange
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "labelBuilder", props.labelBuilder);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-slider",
    {
      ref,
      ...filteredProps,
      "data-aria-label": props.dataAriaLabel || props["data-aria-label"],
      "data-aria-label-start":
        props.dataAriaLabelStart || props["data-aria-label-start"],
      "data-aria-label-end":
        props.dataAriaLabelEnd || props["data-aria-label-end"],
      value: props.value,
      "value-start": props.valueStart || props["value-start"],
      "value-end": props.valueEnd || props["value-end"],
      label: props.label,
      "label-start": props.labelStart || props["label-start"],
      "label-end": props.labelEnd || props["label-end"],
      min: props.min,
      max: props.max,
      step: props.step,
      name: props.name,
      "name-start": props.nameStart || props["name-start"],
      "name-end": props.nameEnd || props["name-end"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      range: props.range ? "" : undefined,
      tickmarks: props.tickmarks ? "" : undefined,
      labeled: props.labeled ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      readonly: props.readonly ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
