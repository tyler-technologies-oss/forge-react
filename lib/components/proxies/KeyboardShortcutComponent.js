import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/keyboard-shortcut";
import { useEventListener, useProperties } from "./react-utils.js";

export const KeyboardShortcutComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    global,
    allowWhileTyping,
    preventDefault,
    capture,
    useCode,
    disabled,
    keyBinding,
    target,
    activateCallback,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-keyboard-shortcut-activate",
    props.onForgeKeyboardShortcutActivate
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "activateCallback", props.activateCallback);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-keyboard-shortcut",
    {
      ref,
      ...filteredProps,
      "key-binding": props.keyBinding || props["key-binding"],
      target: props.target,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      global: props.global ? "" : undefined,
      "allow-while-typing": props.allowWhileTyping ? "" : undefined,
      "prevent-default": props.preventDefault ? "" : undefined,
      capture: props.capture ? "" : undefined,
      "use-code": props.useCode ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
