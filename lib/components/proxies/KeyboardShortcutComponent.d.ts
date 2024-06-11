import { KeyboardShortcutComponent as KeyboardShortcutComponentElement } from "@tylertech/forge/esm/keyboard-shortcut";

export type { KeyboardShortcutComponentElement };

export interface KeyboardShortcutComponentProps
  extends Pick<
    React.AllHTMLAttributes<HTMLElement>,
    | "children"
    | "className"
    | "dir"
    | "exportparts"
    | "htmlFor"
    | "hidden"
    | "id"
    | "key"
    | "lang"
    | "part"
    | "ref"
    | "slot"
    | "style"
    | "tabIndex"
    | "title"
    | "translate"
    | "onClick"
    | "onFocus"
    | "onBlur"
  > {
  /** Gets/sets the global listener state. */
  global?: boolean;

  /** Gets/sets whether the callback will be called while in a text entry field. */
  allowWhileTyping?: boolean;

  /** Gets/sets whether to prevent default on keyboard events */
  preventDefault?: boolean;

  /** Gets/sets whether to use capturing on keyboard events */
  capture?: boolean;

  /** Gets/sets whether to match codes instead of keys on keyboard events. */
  useCode?: boolean;

  /** Gets/sets whether the callback will be called. */
  disabled?: boolean;

  /** Gets/sets the key binding. */
  key?: string | null | undefined;

  /** Alias for key. */
  keyBinding?: KeyboardShortcutComponentElement["keyBinding"];

  /** Gets/sets the target element selector. */
  target?: KeyboardShortcutComponentElement["target"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: string;

  /** Gets/sets whether the activation callback. */
  activateCallback?: KeyboardShortcutComponentElement["activateCallback"];

  /** Event fired when the keyboard shortcut is activated. */
  onForgeKeyboardShortcutActivate?: (
    event: CustomEvent<CustomEvent<KeyboardEvent>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-keyboard-shortcut-activate** - Event fired when the keyboard shortcut is activated.
 */
export const KeyboardShortcutComponent: React.ForwardRefExoticComponent<KeyboardShortcutComponentProps>;
