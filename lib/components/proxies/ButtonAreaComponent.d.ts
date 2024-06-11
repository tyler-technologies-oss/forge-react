import {
  ButtonAreaComponent as ButtonAreaComponentElement,
  PointerEvent,
} from "@tylertech/forge/esm/button-area";

export type { ButtonAreaComponentElement, PointerEvent };

export interface ButtonAreaComponentProps
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
  /** Sets whether the button area and slotted button are disabled. Setting this on one will also set it on the other. */
  disabled?: boolean;

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

  /** Used for labels to link them with their inputs (using input id). */
  htmlFor?: string;

  /** Used to help React identify which items have changed, are added, or are removed within a list. */
  key?: number | string;

  /** Contains a space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the ::part pseudo-element. */
  part?: string;

  /** A mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`). The returned object will persist for the full lifetime of the component. */
  ref?: any;

  /** Contains CSS styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the <style> element have mainly the purpose of allowing for quick styling, for example for testing purposes. */
  style?: string | object;

  /** Allows developers to make HTML elements focusable, allow or prevent them from being sequentially focusable (usually with the `Tab` key, hence the name) and determine their relative ordering for sequential focus navigation. */
  tabIndex?: string;

  /** The button area emits a native HTML click event whenever it or the slotted button is clicked. Add the listener to the `<forge-button-area>` element to receive all events. Note: Set `data-forge-ignore` on any nested buttons or other interactive elements to prevent them from activating the button area. */
  onClick?: (event: CustomEvent<PointerEvent>) => void;
}

/**
 * Button areas are used to create a clickable area that group related information and actions about a single subject.
 * ---
 *
 *
 * ### **Events:**
 *  - **click** - The button area emits a native HTML click event whenever it or the slotted button is clicked. Add the listener to the `<forge-button-area>` element to receive all events. Note: Set `data-forge-ignore` on any nested buttons or other interactive elements to prevent them from activating the button area.
 *
 * ### **Slots:**
 *  - _default_ - Places content within the default (unnamed) slot (main body of the component).
 * - **button** - Places content within a visually hidden slot. Always place a `<button>` element in this slot.
 *
 * ### **CSS Properties:**
 *  - **--forge-button-area-cursor** - The cursor. _(default: undefined)_
 * - **--forge-button-area-disabled-cursor** - The cursor when in the disabled state. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **button** - The visually hidden slot for the `<button>` element.
 * - **focus-indicator** - The focus-indicator indicator element.
 * - **state-layer** - The state-layer surface element.
 */
export const ButtonAreaComponent: React.ForwardRefExoticComponent<ButtonAreaComponentProps>;
