import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/stepper";
import { useEventListener, useProperties } from "./react-utils.js";

export const StepperComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    steps,
    selectedIndex,
    linear,
    alternative,
    layoutMode,
    layoutAlign,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-step-select", props.onForgeStepSelect);
  useEventListener(
    ref,
    "forge-step-expanded-content-focusin",
    props.onForgeStepExpandedContentFocusin
  );
  useEventListener(
    ref,
    "forge-step-expanded-content-focusout",
    props.onForgeStepExpandedContentFocusout
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "steps", props.steps);
  useProperties(ref, "selectedIndex", props.selectedIndex);
  useProperties(ref, "linear", props.linear);
  useProperties(ref, "alternative", props.alternative);
  useProperties(ref, "layoutMode", props.layoutMode);
  useProperties(ref, "layoutAlign", props.layoutAlign);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-stepper",
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
