import { SplitButtonComponent as SplitButtonComponentElement } from "@tylertech/forge/esm/split-button";

export type { SplitButtonComponentElement };

export interface SplitButtonComponentProps
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
  /** Whether or not the buttons are disabled. */
  disabled?: boolean;

  /** Whether or not the buttons are dense. */
  dense?: boolean;

  /** Whether or not the buttons are pill-shaped. */
  pill?: boolean;

  /** The variant of the buttons. Valid values are `text`, `outlined`, `tonal`, `filled`, and `raised`. */
  variant?: SplitButtonComponentElement["variant"];

  /** The theme of the buttons. Valid values are `primary`, `secondary`, `tertiary`, `success`, `error`, `warning`, `info`. */
  theme?: SplitButtonComponentElement["theme"];

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
}

/**
 * Split buttons are used for splitting an action into two parts.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - This is a default/unnamed slot.
 *
 * ### **CSS Properties:**
 *  - **--forge-split-button-min-width** - The minimum width of the slotted buttons. _(default: undefined)_
 * - **--forge-split-button-gap** - The gap between the slotted buttons. _(default: undefined)_
 * - **--forge-split-button-focus-indicator-offset** - The offset of the focus indicator around the buttons. _(default: undefined)_
 * - **--forge-split-button-focus-indicator-divider-offset** - The offset of the focus indicator divider when using outlined buttons. _(default: undefined)_
 */
export const SplitButtonComponent: React.ForwardRefExoticComponent<SplitButtonComponentProps>;
