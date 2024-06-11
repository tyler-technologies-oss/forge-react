import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/accordion";

export const AccordionComponent = forwardRef((props, forwardedRef) => {
  const { panelSelector, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-accordion",
    {
      ...filteredProps,
      "panel-selector": props.panelSelector || props["panel-selector"],
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
