import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/list-item";
import { useEventListener } from "./react-utils.js";

export const ListItemComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    selected,
    active,
    dense,
    indented,
    twoLine,
    threeLine,
    wrap,
    noninteractive,
    value,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-list-item-select", props.onForgeListItemSelect);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-list-item",
    {
      ref,
      ...filteredProps,
      value: props.value,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? "" : undefined,
      active: props.active ? "" : undefined,
      dense: props.dense ? "" : undefined,
      indented: props.indented ? "" : undefined,
      "two-line": props.twoLine ? "" : undefined,
      "three-line": props.threeLine ? "" : undefined,
      wrap: props.wrap ? "" : undefined,
      noninteractive: props.noninteractive ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
