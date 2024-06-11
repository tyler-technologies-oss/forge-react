import {
  CheckboxComponent as CheckboxComponentElement,
  Event,
} from "@tylertech/forge/esm/checkbox";

export type { CheckboxComponentElement, Event };

export interface CheckboxComponentProps
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
  /** Controls whether the checkbox is checked. */
  checked?: CheckboxComponentElement["checked"];

  /** Controls whether the checkbox is checked by default. */
  defaultchecked?: CheckboxComponentElement["defaultchecked"];

  /** Controls the indeterminate state. */
  indeterminate?: CheckboxComponentElement["indeterminate"];

  /** The value of the checkbox when checked. */
  value?: CheckboxComponentElement["value"];

  /** Controls if the switch is disabled. */
  disabled?: CheckboxComponentElement["disabled"];

  /** Controls if the switch is required. */
  required?: CheckboxComponentElement["required"];

  /** Controls if the switch is readonly. */
  readonly?: CheckboxComponentElement["readonly"];

  /** Sets the density state. */
  dense?: CheckboxComponentElement["dense"];

  /** Sets whether the label appears before or after the switch. */
  labelPosition?: CheckboxComponentElement["labelPosition"];

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

  /** Whether the checkbox is checked by default. */
  defaultChecked?: CheckboxComponentElement["defaultChecked"];

  /** Dispatches when the checkbox is checked or unchecked. */
  onChange?: (event: CustomEvent) => void;
}

/**
 * Checkboxes select single values for submission in a form.
 * ---
 *
 *
 * ### **Events:**
 *  - **change** - Dispatches when the checkbox is checked or unchecked.
 *
 * ### **Methods:**
 *  - **toggle(force: _boolean_): _void_** - Toggles the checkbox checked or unchecked.
 *
 * ### **CSS Properties:**
 *  - **--forge-checkbox-background** - The color of the checkbox background when unchecked and not indeterminate. _(default: undefined)_
 * - **--forge-checkbox-width** - The inline size of the checkbox. _(default: undefined)_
 * - **--forge-checkbox-height** - The block size of the checkbox. _(default: undefined)_
 * - **--forge-checkbox-unchecked-border-width** - The width of the checkbox border when unchecked and not indeterminate. _(default: undefined)_
 * - **--forge-checkbox-unchecked-border-color** - The color of the checkbox border when unchecked and not indeterminate. _(default: undefined)_
 * - **--forge-checkbox-shape** - The shape of the checkbox. _(default: undefined)_
 * - **--forge-checkbox-elevation** - The shadow of the checkbox. _(default: undefined)_
 * - **--forge-checkbox-gap** - The space between the checkbox and label. _(default: undefined)_
 * - **--forge-checkbox-justify** - How the checkbox and label are distributed along their main axis. _(default: undefined)_
 * - **--forge-checkbox-direction** - Whether the checkbox and label are arranged along the inline or block axis. _(default: undefined)_
 * - **--forge-checkbox-checked-background** - The color of the checkbox background when checked or indeterminate. _(default: undefined)_
 * - **--forge-checkbox-checked-border-width** - The width of the checkbox border when checked or indeterminate. _(default: undefined)_
 * - **--forge-checkbox-checked-border-color** - The color of the checkbox border when checked or indeterminate. _(default: undefined)_
 * - **--forge-checkbox-icon-checked-color** - The color of the checkmark mark. _(default: undefined)_
 * - **--forge-checkbox-icon-indeterminate-color** - The color of the indeterminate mark. _(default: undefined)_
 * - **--forge-checkbox-icon-stroke-width** - The stroke width of the checkmark and indeterminate marks. _(default: undefined)_
 * - **--forge-checkbox-state-layer-width** - The inline size of the state layer. _(default: undefined)_
 * - **--forge-checkbox-state-layer-height** - The block size of the state layer. _(default: undefined)_
 * - **--forge-checkbox-state-layer-checked-color** - The color of the state layer when checked. _(default: undefined)_
 * - **--forge-checkbox-state-layer-unchecked-color** - The color of the state layer when unchecked. _(default: undefined)_
 * - **--forge-checkbox-state-layer-shape** - The shape of the state layer. _(default: undefined)_
 * - **--forge-checkbox-state-layer-dense-width** - The inline size of the state layer when dense. _(default: undefined)_
 * - **--forge-checkbox-state-layer-dense-height** - The block size of the state layer when dense. _(default: undefined)_
 * - **--forge-checkbox-disabled-opacity** - The opacity when disabled. _(default: undefined)_
 * - **--forge-checkbox-animation-duration** - The duration of animations. _(default: undefined)_
 * - **--forge-checkbox-background-animation-timing** - The timing function of the background animations. _(default: undefined)_
 * - **--forge-checkbox-icon-animation-timing** - The timing function of the checked and indeterminate icons animations. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - Styles the root element.
 * - **background** - Styles the checkbox background element.
 * - **checkmark** - Styles the checkmark element.
 * - **mixedmark** - Styles the indeterminate mark element.
 * - **label** - Styles the label element.
 * - **state-layer** - Styles the state layer element.
 * - **focus-indicator** - Styles the focus indicator element.
 */
export const CheckboxComponent: React.ForwardRefExoticComponent<CheckboxComponentProps>;
