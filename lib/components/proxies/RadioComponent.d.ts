import { RadioComponent as RadioComponentElement } from "@tylertech/forge/esm/radio";

export type { RadioComponentElement };

export interface RadioComponentProps
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
  /** Indicates whether the radio button is checked. */
  checked?: boolean;

  /** Indicates whether the radio button is checked by default. */
  defaultChecked?: boolean;

  /** Indicates whether the radio button should be displayed in a dense layout. */
  dense?: boolean;

  /** Indicates whether the radio button is disabled. */
  disabled?: boolean;

  /** Indicates whether the radio button is required. */
  required?: boolean;

  /** Indicates whether the radio button is read-only. */
  readonly?: boolean;

  /** The value of the radio button when submitted. */
  value?: RadioComponentElement["value"];

  /** The position of the radio button's label. */
  labelPosition?: RadioComponentElement["labelPosition"];

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
 * The Forge Radio component is used to create a form input where only one out of a set of
 * values should be selected.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - This is a default/unnamed slot for the label text.
 *
 * ### **CSS Properties:**
 *  - **--forge-radio-primary-color** - The primary color of the radio button when checked. _(default: undefined)_
 * - **--forge-radio-inactive-color** - The color of the radio button when unchecked. _(default: undefined)_
 * - **--forge-radio-size** - The size of the radio button in the inline and block directions. _(default: undefined)_
 * - **--forge-radio-width** - The width of the radio button. _(default: undefined)_
 * - **--forge-radio-height** - The height of the radio button. _(default: undefined)_
 * - **--forge-radio-border-width** - The width of the radio button's border. _(default: undefined)_
 * - **--forge-radio-unchecked-border-color** - The color of the radio button's border when unchecked. _(default: undefined)_
 * - **--forge-radio-checked-border-color** - The color of the radio button's border when checked. _(default: undefined)_
 * - **--forge-radio-background** - The background of the radio button. _(default: undefined)_
 * - **--forge-radio-shape** - The shape of the radio button. _(default: undefined)_
 * - **--forge-radio-mark-size** - The size of the radio button's mark in the inline and block directions. _(default: undefined)_
 * - **--forge-radio-mark-width** - The width of the radio button's mark. _(default: undefined)_
 * - **--forge-radio-mark-height** - The height of the radio button's mark. _(default: undefined)_
 * - **--forge-radio-mark-unchecked-color** - The color of the radio button's mark when unchecked. _(default: undefined)_
 * - **--forge-radio-mark-checked-color** - The color of the radio button's mark when checked. _(default: undefined)_
 * - **--forge-radio-mark-unchecked-background** - The background of the radio button's mark when unchecked. _(default: undefined)_
 * - **--forge-radio-mark-checked-background** - The background of the radio button's mark when checked. _(default: undefined)_
 * - **--forge-radio-gap** - The gap between the radio button and its label. _(default: undefined)_
 * - **--forge-radio-justify** - The alignment of the radio button and its label in the inline direction. _(default: undefined)_
 * - **--forge-radio-direction** - The direction of the radio button and its label. _(default: undefined)_
 * - **--forge-radio-state-layer-size** - The size of the radio button's state layer in the inline and block directions. _(default: undefined)_
 * - **--forge-radio-state-layer-width** - The width of the radio button's state layer. _(default: undefined)_
 * - **--forge-radio-state-layer-height** - The height of the radio button's state layer. _(default: undefined)_
 * - **--forge-radio-state-layer-unchecked** - color - The color of the radio button's state layer when unchecked. _(default: undefined)_
 * - **--forge-radio-state-layer-checked-color** - The color of the radio button's state layer when checked. _(default: undefined)_
 * - **--forge-radio-state-layer-shape** - The shape of the radio button's state layer. _(default: undefined)_
 * - **--forge-radio-state-layer-dense-size** - The size of the radio button's state layer when dense. _(default: undefined)_
 * - **--forge-radio-state-layer-dense-width** - The width of the radio button's state layer when dense. _(default: undefined)_
 * - **--forge-radio-state-layer-dense-height** - The height of the radio button's state layer when dense. _(default: undefined)_
 * - **--forge-radio-disabled-opacity** - The opacity of the radio button when disabled. _(default: undefined)_
 * - **--forge-radio-animation-duration** - The duration of the radio button's animations. _(default: undefined)_
 * - **--forge-radio-animation-timing-function** - The timing function of the radio button's animations. _(default: undefined)_
 * - **--forge-radio-animation-delay** - The delay of the radio button's animations. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - Styles the radio's root element.
 * - **background** - Styles the border and background of the radio.
 * - **focus-indicator** - Styles the focus indicator of the radio.
 * - **state-layer** - Styles the state layer of the radio.
 */
export const RadioComponent: React.ForwardRefExoticComponent<RadioComponentProps>;
