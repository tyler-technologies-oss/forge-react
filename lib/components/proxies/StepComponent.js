import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/step";

export const StepComponent = forwardRef((props, forwardedRef) => {
  const {
    selected,
    editable,
    completed,
    error,
    alternative,
    disabled,
    vertical,
    expanded,
    ignoreUserExpansion,
    index,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-step",
    {
      ...filteredProps,
      index: props.index,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      selected: props.selected ? "" : undefined,
      editable: props.editable ? "" : undefined,
      completed: props.completed ? "" : undefined,
      error: props.error ? "" : undefined,
      alternative: props.alternative ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      vertical: props.vertical ? "" : undefined,
      expanded: props.expanded ? "" : undefined,
      "ignore-user-expansion": props.ignoreUserExpansion ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
