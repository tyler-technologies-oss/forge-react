import {
  FloatingActionButtonComponent as FloatingActionButtonComponentElement,
  PointerEvent,
} from "@tylertech/forge/esm/fab";

export type { FloatingActionButtonComponentElement, PointerEvent };

export interface FloatingActionButtonComponentProps
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
  /** Disables the button. */
  disabled?: boolean;

  /** Shows a popover icon on the button. */
  popoverIcon?: boolean;

  /** Sets the density of the button. */
  dense?: boolean;

  /** Sets the theme of the button. */
  theme?: FloatingActionButtonComponentElement["theme"];

  /** Sets the density of the button. */
  density?: FloatingActionButtonComponentElement["density"];

  /** Sets the elevation of the button. */
  elevation?: FloatingActionButtonComponentElement["elevation"];

  /** Sets the type of the button. Possible values are `button`, `submit`, and `reset`. */
  type?: FloatingActionButtonComponentElement["type"];

  /** The name of the button. */
  name?: FloatingActionButtonComponentElement["name"];

  /** The value of the button. */
  value?: FloatingActionButtonComponentElement["value"];

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

  /** Fires when the button is clicked. */
  onClick?: (event: CustomEvent<PointerEvent>) => void;
}

/**
 * Floating action buttons are used to represent the most important action on a page.
 * ---
 *
 *
 * ### **Events:**
 *  - **click** - Fires when the button is clicked.
 *
 * ### **Methods:**
 *  - **click(): _void_** - Clicks the button.
 * - **focus(options: _ExperimentalFocusOptions_): _void_** - Focuses the button.
 *
 * ### **Slots:**
 *  - _default_ - This is a default/unnamed slot. Typically used for icon-only or label-only FABs. If the content forces the width to be large than the height, then the FAB will be in extended mode.
 * - **start** - An element to logically render at the start of the button content.
 * - **label** - Reserved specifically for label text. This forces the button into extended mode.
 * - **end** - An element to logically render at the end of the button content.
 *
 * ### **CSS Properties:**
 *  - **--forge-fab-background-display** - The display property. _(default: undefined)_
 * - **--forge-fab-gap** - The gap between the icon and the label. _(default: undefined)_
 * - **--forge-fab-background** - The background color. _(default: undefined)_
 * - **--forge-fab-color** - The text color. _(default: undefined)_
 * - **--forge-fab-size** - The height and min-width of the button. _(default: undefined)_
 * - **--forge-fab-padding** - The inline padding of the button. _(default: undefined)_
 * - **--forge-fab-shadow** - The box shadow of the button. _(default: undefined)_
 * - **--forge-fab-hover-shadow** - The box shadow of the button when hovered. _(default: undefined)_
 * - **--forge-fab-active-shadow** - The box shadow of the button when active. _(default: undefined)_
 * - **--forge-fab-lowered-shadow** - The box shadow of the button when lowered. _(default: undefined)_
 * - **--forge-fab-lowered-hover-shadow** - The box shadow of the button when lowered and hovered. _(default: undefined)_
 * - **--forge-fab-lowered-active-shadow** - The box shadow of the button when lowered and active. _(default: undefined)_
 * - **--forge-fab-transition-duration** - The transition duration. _(default: undefined)_
 * - **--forge-fab-transition-timing** - The transition timing function. _(default: undefined)_
 * - **--forge-fab-shape** - The border radius of the button. _(default: undefined)_
 * - **--forge-fab-shape-start-start** - The start-start border radius. _(default: undefined)_
 * - **--forge-fab-shape-start-end** - The start-end border radius. _(default: undefined)_
 * - **--forge-fab-shape-end-start** - The end-start border radius. _(default: undefined)_
 * - **--forge-fab-shape-end-end** - The end-end border radius. _(default: undefined)_
 * - **--forge-fab-extended-padding** - The inline padding of the extended button. _(default: undefined)_
 * - **--forge-fab-extended-min-width** - The min-width of the extended button. _(default: undefined)_
 * - **--forge-fab-density-small-size** - The height and min-width of the small density button. _(default: undefined)_
 * - **--forge-fab-density-medium-size** - The height and min-width of the medium density (default) button. _(default: undefined)_
 * - **--forge-fab-density-large-size** - The height and min-width of the large density button. _(default: undefined)_
 * - **--forge-fab-disabled-cursor** - The cursor when disabled. _(default: undefined)_
 * - **--forge-fab-disabled-background** - The background color when disabled. _(default: undefined)_
 * - **--forge-fab-disabled-color** - The text color when disabled. _(default: undefined)_
 * - **--forge-fab-disabled-opacity** - The opacity when disabled. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **focus-indicator** - The focus-indicator indicator element.
 * - **state-layer** - The state-layer surface element.
 */
export const FloatingActionButtonComponent: React.ForwardRefExoticComponent<FloatingActionButtonComponentProps>;
