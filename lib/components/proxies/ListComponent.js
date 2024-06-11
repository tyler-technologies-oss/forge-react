import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/list";

export const ListComponent = forwardRef((props, forwardedRef) => {
  const {
    dense,
    indented,
    twoLine,
    threeLine,
    wrap,
    navlist,
    noninteractive,
    selectedValue,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-list",
    {
      ...filteredProps,
      "selected-value": props.selectedValue || props["selected-value"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      dense: props.dense ? "" : undefined,
      indented: props.indented ? "" : undefined,
      "two-line": props.twoLine ? "" : undefined,
      "three-line": props.threeLine ? "" : undefined,
      wrap: props.wrap ? "" : undefined,
      navlist: props.navlist ? "" : undefined,
      noninteractive: props.noninteractive ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
