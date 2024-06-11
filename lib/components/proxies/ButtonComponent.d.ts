import {
  ButtonComponent as ButtonComponentElement,
  PointerEvent,
} from "@tylertech/forge/esm/button";

export type { ButtonComponentElement, PointerEvent };

export interface ButtonComponentProps
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
  /** Whether or not the button is full-width. */
  fullWidth?: boolean;

  /** Whether or not the button is disabled. */
  disabled?: boolean;

  /** Whether or not the button shows a built-in popover icon. */
  popoverIcon?: boolean;

  /** Whether or not the button is dense. */
  dense?: boolean;

  /** Whether or not the button is pill-shaped. */
  pill?: boolean;

  /** The type of button. Valid values are `button`, `submit`, and `reset`. */
  type?: ButtonComponentElement["type"];

  /** The variant of the button. */
  variant?: ButtonComponentElement["variant"];

  /** The name of the button. */
  name?: ButtonComponentElement["name"];

  /** The form value of the button. */
  value?: ButtonComponentElement["value"];

  /** The theme of the button. Defaults to `primary`. */
  theme?: ButtonComponentElement["theme"];

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

  /** The form reference of the button if within a `<form>` element. */
  form?: ButtonComponentElement["form"];

  /** Fires when the button is clicked. */
  onClick?: (event: CustomEvent<PointerEvent>) => void;
}

/**
 * Buttons represent actions that a user can take.
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
 *  - _default_ - This is a default/unnamed slot for the label text.
 * - **start** - Elements to logically render before the label text.
 * - **end** - Elements to logically render after the label text.
 *
 * ### **CSS Properties:**
 *  - **--forge-button-primary-color** - The primary color of the button. _(default: undefined)_
 * - **--forge-button-text-color** - The text color of the button. Inherits from primary color. _(default: undefined)_
 * - **--forge-button-disabled-color** - The disabled color of the button. _(default: undefined)_
 * - **--forge-button-padding** - The padding of the button. _(default: undefined)_
 * - **--forge-button-display** - The display of the button. _(default: undefined)_
 * - **--forge-button-justify** - The flex justify of the button. _(default: undefined)_
 * - **--forge-button-shape** - The shape of the button. _(default: undefined)_
 * - **--forge-button-height** - The height of the button. _(default: undefined)_
 * - **--forge-button-min-width** - The min-width of the button. _(default: undefined)_
 * - **--forge-button-spacing** - The spacing of the button. _(default: undefined)_
 * - **--forge-button-border-width** - The border-width of the button. _(default: undefined)_
 * - **--forge-button-border-style** - The border style of the button. _(default: undefined)_
 * - **--forge-button-border-color** - The border color of the button. _(default: undefined)_
 * - **--forge-button-shape-start-start-radius** - The shape start start radius of the button. _(default: undefined)_
 * - **--forge-button-shape-start-end-radius** - The shape start end radius of the button. _(default: undefined)_
 * - **--forge-button-shape-end-start-radius** - The shape end start radius of the button. _(default: undefined)_
 * - **--forge-button-shape-end-end-radius** - The shape end end radius of the button. _(default: undefined)_
 * - **--forge-button-padding-block** - The padding block of the button. _(default: undefined)_
 * - **--forge-button-padding-inline** - The padding inline of the button. _(default: undefined)_
 * - **--forge-button-background** - The background color of the button. _(default: undefined)_
 * - **--forge-button-hover-background** - The background color of the button on hover. _(default: undefined)_
 * - **--forge-button-active-background** - The background color of the button on active state. _(default: undefined)_
 * - **--forge-button-color** - The text color of the button. _(default: undefined)_
 * - **--forge-button-icon-size** - The size of the icon in the button. _(default: undefined)_
 * - **--forge-button-shadow** - The shadow of the button. _(default: undefined)_
 * - **--forge-button-hover-shadow** - The shadow of the button on hover. _(default: undefined)_
 * - **--forge-button-active-shadow** - The shadow of the button on active state. _(default: undefined)_
 * - **--forge-button-cursor** - The cursor type of the button. _(default: undefined)_
 * - **--forge-button-raised-background** - The background color of the raised button. _(default: undefined)_
 * - **--forge-button-raised-disabled-background** - The background color of the disabled raised button. _(default: undefined)_
 * - **--forge-button-raised-color** - The text color of the raised button. _(default: undefined)_
 * - **--forge-button-raised-disabled-color** - The text color of the disabled raised button. _(default: undefined)_
 * - **--forge-button-raised-shadow** - The shadow of the raised button. _(default: undefined)_
 * - **--forge-button-raised-hover-shadow** - The shadow of the raised button on hover. _(default: undefined)_
 * - **--forge-button-raised-active-shadow** - The shadow of the raised button on active state. _(default: undefined)_
 * - **--forge-button-raised-disabled-shadow** - The shadow of the disabled raised button. _(default: undefined)_
 * - **--forge-button-raised-transition-duration** - The transition duration of the raised button. _(default: undefined)_
 * - **--forge-button-raised-transition-timing** - The transition timing of the raised button. _(default: undefined)_
 * - **--forge-button-flat-background** - The background color of the flat button. _(default: undefined)_
 * - **--forge-button-flat-disabled-background** - The background color of the disabled flat button. _(default: undefined)_
 * - **--forge-button-flat-color** - The text color of the flat button. _(default: undefined)_
 * - **--forge-button-flat-disabled-color** - The text color of the disabled flat button. _(default: undefined)_
 * - **--forge-button-outlined-background** - The background color of the outlined button. _(default: undefined)_
 * - **--forge-button-outlined-color** - The text color of the outlined button. _(default: undefined)_
 * - **--forge-button-outlined-border-width** - The border width of the outlined button. _(default: undefined)_
 * - **--forge-button-outlined-border-style** - The border style of the outlined button. _(default: undefined)_
 * - **--forge-button-outlined-border-color** - The border color of the outlined button. _(default: undefined)_
 * - **--forge-button-link-color** - The text color of the link button. _(default: undefined)_
 * - **--forge-button-link-text-decoration** - The text decoration of the link button. _(default: undefined)_
 * - **--forge-button-link-height** - The height of the link button. _(default: undefined)_
 * - **--forge-button-link-padding** - The padding of the link button. _(default: undefined)_
 * - **--forge-button-link-line-height** - The line height of the link button. _(default: undefined)_
 * - **--forge-button-link-width** - The width of the link button. _(default: undefined)_
 * - **--forge-button-link-hover-text-decoration** - The text decoration of the link button on hover. _(default: undefined)_
 * - **--forge-button-link-active-opacity** - The opacity of the link button on active state. _(default: undefined)_
 * - **--forge-button-link-transition-duration** - The transition duration of the link button. _(default: undefined)_
 * - **--forge-button-link-transition-timing** - The transition timing of the link button. _(default: undefined)_
 * - **--forge-button-disabled-cursor** - The cursor type of the disabled button. _(default: undefined)_
 * - **--forge-button-disabled-text-color** - The text color of the disabled button. _(default: undefined)_
 * - **--forge-button-disabled-background** - The background color of the disabled button. _(default: undefined)_
 * - **--forge-button-disabled-border-color** - The border color of the disabled button. _(default: undefined)_
 * - **--forge-button-disabled-shadow** - The shadow of the disabled button. _(default: undefined)_
 * - **--forge-button-dense-height** - The height of the dense button. _(default: undefined)_
 * - **--forge-button-pill-shape** - The shape of the pill button. _(default: undefined)_
 * - **--forge-button-pill-padding-inline** - The inline padding of the pill button. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **focus-indicator** - The focus-indicator indicator element.
 * - **state-layer** - The state-layer surface element.
 */
export const ButtonComponent: React.ForwardRefExoticComponent<ButtonComponentProps>;
