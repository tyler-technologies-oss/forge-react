import { ButtonToggleGroupComponent as ButtonToggleGroupComponentElement } from "@tylertech/forge/esm/button-toggle-group";

export type { ButtonToggleGroupComponentElement };

export interface ButtonToggleGroupComponentProps
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
  /** Whether or not the group should be outlined. */
  outlined?: boolean;

  /** Whether or not the group should allow multiple selections. */
  multiple?: boolean;

  /** Whether or not the group should stretch to fill the available width. */
  stretch?: boolean;

  /** Whether or not the group should require a selection once a button has been toggled on. */
  mandatory?: boolean;

  /** Whether or not the group should be displayed vertically. */
  vertical?: boolean;

  /** Whether or not the group should be disabled. */
  disabled?: boolean;

  /** Whether or not the group should be readonly. */
  readonly?: boolean;

  /** Whether or not the group should be dense. */
  dense?: boolean;

  /** The value of the selected button toggle(s). */
  value?: ButtonToggleGroupComponentElement["value"];

  /** The theme to use for the group. */
  theme?: ButtonToggleGroupComponentElement["theme"];

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

  /** Dispatches when the value of the group changes. */
  onForgeButtonToggleGroupChange?: (
    event: CustomEvent<CustomEvent<IButtonToggleGroupChangeEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-button-toggle-group-change** - Dispatches when the value of the group changes.
 *
 * ### **Slots:**
 *  - _default_ - The is a default/unnamed slot for child button toggle elements.
 *
 * ### **CSS Properties:**
 *  - **--forge-button-toggle-group-display** - The `display` of the group container elements. _(default: undefined)_
 * - **--forge-button-toggle-group-gap** - The space between button toggle elements. _(default: undefined)_
 * - **--forge-button-toggle-group-padding** - The padding around the button toggle elements when outlined. _(default: undefined)_
 * - **--forge-button-toggle-group-padding-block** - The block padding around the button toggle elements when outlined. _(default: undefined)_
 * - **--forge-button-toggle-group-padding-inline** - The inline padding around the button toggle elements when outlined. _(default: undefined)_
 * - **--forge-button-toggle-group-height** - The height of the group element. _(default: undefined)_
 * - **--forge-button-toggle-group-dense-height** - The height of the group element when dense. _(default: undefined)_
 * - **--forge-button-toggle-group-outline-width** - The width of the outline around the group element. _(default: undefined)_
 * - **--forge-button-toggle-group-outline-style** - The style of the outline around the group element. _(default: undefined)_
 * - **--forge-button-toggle-group-outline-color** - The color of the outline around the group element. _(default: undefined)_
 * - **--forge-button-toggle-group-outline-color-active** - The color of the outline around the group element when hovered or focused. _(default: undefined)_
 * - **--forge-button-toggle-group-shape** - The shape radius of the group container element. _(default: undefined)_
 * - **--forge-button-toggle-group-shape-start-start** - The start-start shape radius. _(default: undefined)_
 * - **--forge-button-toggle-group-shape-start-end** - The start-end shape radius. _(default: undefined)_
 * - **--forge-button-toggle-group-shape-end-start** - The end-start shape radius. _(default: undefined)_
 * - **--forge-button-toggle-group-shape-end-end** - The end-end shape radius. _(default: undefined)_
 * - **--forge-button-toggle-group-transition-duration** - The transition duration for all animations on the group. _(default: undefined)_
 * - **--forge-button-toggle-group-transition-timing** - The transition timing for all animations on the group. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element for the group.
 */
export const ButtonToggleGroupComponent: React.ForwardRefExoticComponent<ButtonToggleGroupComponentProps>;
