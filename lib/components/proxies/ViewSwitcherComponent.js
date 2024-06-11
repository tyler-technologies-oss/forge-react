import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/view-switcher";
import { useProperties } from "./react-utils.js";

export const ViewSwitcherComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { index, animationType, ...filteredProps } = props;

  /** Properties - run whenever a property has changed */
  useProperties(ref, "index", props.index);
  useProperties(ref, "animationType", props.animationType);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    next: () => ref.current.next(),
    previous: () => ref.current.previous(),
    goToStart: () => ref.current.goToStart(),
    goToEnd: () => ref.current.goToEnd(),
  }));

  return React.createElement(
    "forge-view-switcher",
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
