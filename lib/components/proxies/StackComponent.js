import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/stack";

export const StackComponent = forwardRef((props, forwardedRef) => {
  const { inline, wrap, stretch, gap, alignment, justify, ...filteredProps } =
    props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-stack",
    {
      ...filteredProps,
      gap: props.gap,
      alignment: props.alignment,
      justify: props.justify,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      inline: props.inline ? "" : undefined,
      wrap: props.wrap ? "" : undefined,
      stretch: props.stretch ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
