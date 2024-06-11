import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/skeleton";

export const SkeletonComponent = forwardRef((props, forwardedRef) => {
  const {
    formField,
    button,
    chip,
    listItem,
    text,
    avatar,
    stretch,
    ...filteredProps
  } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-skeleton",
    {
      ...filteredProps,
      "form-field": props.formField || props["form-field"],
      button: props.button,
      chip: props.chip,
      "list-item": props.listItem || props["list-item"],
      text: props.text,
      avatar: props.avatar,
      stretch: props.stretch,
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
