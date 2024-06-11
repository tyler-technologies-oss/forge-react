import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/app-bar";
import { useEventListener } from "./react-utils.js";

export const AppBarComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const { titleText, elevation, theme, href, ...filteredProps } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-app-bar-navigate", props.onForgeAppBarNavigate);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-app-bar",
    {
      ref,
      ...filteredProps,
      "title-text": props.titleText || props["title-text"],
      elevation: props.elevation,
      theme: props.theme,
      href: props.href,
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
