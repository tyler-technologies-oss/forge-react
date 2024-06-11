import React, { forwardRef, useImperativeHandle } from "react";
import "@tylertech/forge/esm/avatar";

export const AvatarComponent = forwardRef((props, forwardedRef) => {
  const { text, letterCount, imageUrl, ...filteredProps } = props;

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-avatar",
    {
      ...filteredProps,
      text: props.text,
      "letter-count": props.letterCount || props["letter-count"],
      "image-url": props.imageUrl || props["image-url"],
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
