import {
  IconButtonComponent as IconButtonComponentElement,
  PointerEvent,
} from "@tylertech/forge/esm/icon-button";

export type { IconButtonComponentElement, PointerEvent };

export interface IconButtonComponentProps
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
  /** Whether or not the icon button can be toggled. */
  toggle?: boolean;

  /** Whether or not the button is on. Only applies when `toggle` is `true`. */
  on?: boolean;

  /** Whether or not the button is disabled. */
  disabled?: boolean;

  /** Whether or not the button shows a built-in popover icon. */
  popoverIcon?: boolean;

  /** Whether or not the button is dense. */
  dense?: boolean;

  /** The variant of the button. Valid values are `text`, `outlined`, `filled`, and `raised`. */
  variant?: IconButtonComponentElement["variant"];

  /** The theme of the button. Valid values are `primary`, `secondary`, `tertiary`, `success`, `error`, `warning`, `info`. */
  theme?: IconButtonComponentElement["theme"];

  /** The shape of the button. Valid values are `circular` and `squared`. */
  shape?: IconButtonComponentElement["shape"];

  /** The density of the button. Valid values are `small`, `medium`, and `large`. */
  density?: IconButtonComponentElement["density"];

  /** The type of button. Defaults to `button`. Valid values are `button`, `submit`, and `reset`. */
  type?: IconButtonComponentElement["type"];

  /** The name of the button. */
  name?: IconButtonComponentElement["name"];

  /** The form value of the button. */
  value?: IconButtonComponentElement["value"];

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
  form?: IconButtonComponentElement["form"];

  /** Fires when the button is clicked. */
  onClick?: (event: CustomEvent<PointerEvent>) => void;

  /** Fires when the icon button is toggled. Only applies in `toggle` mode. */
  onForgeIconButtonToggle?: (event: CustomEvent<CustomEvent<boolean>>) => void;
}

/**
 * Icons buttons are used to trigger an action or event.
 * ---
 *
 *
 * ### **Events:**
 *  - **click** - Fires when the button is clicked.
 * - **forge-icon-button-toggle** - Fires when the icon button is toggled. Only applies in `toggle` mode.
 *
 * ### **Methods:**
 *  - **click(): _void_** - Clicks the button.
 * - **focus(options: _ExperimentalFocusOptions_): _void_** - Focuses the button.
 *
 * ### **Slots:**
 *  - _default_ - This is a default/unnamed slot for the icon.
 * - **on** - The icon to show when in `toggle` mode when toggled "on".
 * - **start** - Elements to logically render before the icon.
 * - **end** - Elements to logically render after the icon.
 * - **badge** - Absolutely positions the element in the top-end corner of the button (typically reserved for badge-like content).
 *
 * ### **CSS Properties:**
 *  - **--forge-icon-button-display** - The display property of the button. _(default: undefined)_
 * - **--forge-icon-button-size** - The height and min-width of the button. _(default: undefined)_
 * - **--forge-icon-button-gap** - The gap between the icon content. _(default: undefined)_
 * - **--forge-icon-button-icon-color** - The color of the icon. _(default: undefined)_
 * - **--forge-icon-button-background-color** - The background color of the button. _(default: undefined)_
 * - **--forge-icon-button-icon-size** - The size of the icon. _(default: undefined)_
 * - **--forge-icon-button-cursor** - The cursor of the button. _(default: undefined)_
 * - **--forge-icon-button-padding** - The inline padding of the button. _(default: undefined)_
 * - **--forge-icon-button-border** - The border of the button. _(default: undefined)_
 * - **--forge-icon-button-shadow** - The shadow of the button. _(default: undefined)_
 * - **--forge-icon-button-transition-duration** - The transition duration of the button. _(default: undefined)_
 * - **--forge-icon-button-transition-timing** - The transition timing of the button. _(default: undefined)_
 * - **--forge-icon-button-shape** - The shape of the button. _(default: undefined)_
 * - **--forge-icon-button-shape-start-start** - The start-start border-radius of the button. _(default: undefined)_
 * - **--forge-icon-button-shape-start-end** - The start-end border-radius of the button. _(default: undefined)_
 * - **--forge-icon-button-shape-end-start** - The end-start border-radius of the button. _(default: undefined)_
 * - **--forge-icon-button-shape-end-end** - The end-end border-radius of the button. _(default: undefined)_
 * - **--forge-icon-button-shape-squared** - The squared border-radius of the button. _(default: undefined)_
 * - **--forge-icon-button-outlined-border-width** - The border width when in the outlined variant. _(default: undefined)_
 * - **--forge-icon-button-outlined-border-style** - The border style when in the outlined variant. _(default: undefined)_
 * - **--forge-icon-button-outlined-border-color** - The border color when in the outlined variant. _(default: undefined)_
 * - **--forge-icon-button-tonal-icon-color** - The icon color when in the tonal variant. _(default: undefined)_
 * - **--forge-icon-button-tonal-background-color** - The background color when in the tonal variant. _(default: undefined)_
 * - **--forge-icon-button-filled-icon-color** - The icon color when in the filled variant. _(default: undefined)_
 * - **--forge-icon-button-filled-background-color** - The background color when in the filled variant. _(default: undefined)_
 * - **--forge-icon-button-raised-shadow** - The shadow when in the raised variant. _(default: undefined)_
 * - **--forge-icon-button-raised-hover-shadow** - The shadow when in the raised variant and hovered. _(default: undefined)_
 * - **--forge-icon-button-raised-active-shadow** - The shadow when in the raised variant and active. _(default: undefined)_
 * - **--forge-icon-button-raised-disabled-shadow** - The shadow when in the raised variant and disabled. _(default: undefined)_
 * - **--forge-icon-button-density-small-size** - The size of the button when in the small density. _(default: undefined)_
 * - **--forge-icon-button-density-small-padding** - The padding of the button when in the small density. _(default: undefined)_
 * - **--forge-icon-button-density-small-icon-size** - The size of the icon when in the small density. _(default: undefined)_
 * - **--forge-icon-button-density-medium-size** - The size of the button when in the medium density. _(default: undefined)_
 * - **--forge-icon-button-density-medium-padding** - The padding of the button when in the medium density. _(default: undefined)_
 * - **--forge-icon-button-density-large-size** - The size of the button when in the large density. _(default: undefined)_
 * - **--forge-icon-button-toggle-on-icon-color** - The color of the icon when in toggle mode and toggled on. _(default: undefined)_
 * - **--forge-icon-button-outlined-toggle-on-background-color** - The background color when in the outlined variant and toggled on. _(default: undefined)_
 * - **--forge-icon-button-outlined-toggle-on-icon-color** - The icon color when in the outlined variant and toggled on. _(default: undefined)_
 * - **--forge-icon-button-tonal-toggle-background-color** - The background color when in the tonal variant and toggled. _(default: undefined)_
 * - **--forge-icon-button-tonal-toggle-on-background-color** - The background color when in the tonal variant and toggled on. _(default: undefined)_
 * - **--forge-icon-button-tonal-toggle-on-icon-color** - The icon color when in the tonal variant and toggled on. _(default: undefined)_
 * - **--forge-icon-button-filled-toggle-background-color** - The background color when in the filled variant and toggled. _(default: undefined)_
 * - **--forge-icon-button-filled-toggle-icon-color** - The icon color when in the filled variant and toggled. _(default: undefined)_
 * - **--forge-icon-button-filled-toggle-on-background-color** - The background color when in the filled variant and toggled on. _(default: undefined)_
 * - **--forge-icon-button-filled-toggle-on-icon-color** - The icon color when in the filled variant and toggled on. _(default: undefined)_
 * - **--forge-icon-button-disabled-cursor** - The cursor when the button is disabled. _(default: undefined)_
 * - **--forge-icon-button-disabled-opacity** - The opacity when the button is disabled. _(default: undefined)_
 * - **--forge-icon-button-popover-icon-padding** - The padding of the popover icon. _(default: undefined)_
 * - **--forge-icon-button-focus-indicator-color** - The color of the focus indicator. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **focus-indicator** - The focus-indicator indicator element.
 * - **state-layer** - The state-layer surface element.
 */
export const IconButtonComponent: React.ForwardRefExoticComponent<IconButtonComponentProps>;
