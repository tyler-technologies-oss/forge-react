import { SwitchComponent as SwitchComponentElement } from "@tylertech/forge/esm/switch";

export type { SwitchComponentElement };

export interface SwitchComponentProps
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
  /** Controls whether the switch is in the on or off state. */
  on?: SwitchComponentElement["on"];

  /** Deprecated. Alias for `on`. */
  selected?: SwitchComponentElement["selected"];

  /** Controls whether the switch is in the on or off state by default. */
  defaultOn?: SwitchComponentElement["defaultOn"];

  /** The value of the switch. */
  value?: SwitchComponentElement["value"];

  /** Sets the density state. */
  dense?: SwitchComponentElement["dense"];

  /** Controls if the switch is disabled. */
  disabled?: SwitchComponentElement["disabled"];

  /** Controls if the switch is required. */
  required?: SwitchComponentElement["required"];

  /** Controls if the switch is readonly. */
  readonly?: SwitchComponentElement["readonly"];

  /** Controls the presence of the off and on icons. */
  icon?: SwitchComponentElement["icon"];

  /** Sets whether the label appears before or after the switch. */
  labelPosition?: SwitchComponentElement["labelPosition"];

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

  /** Dispatches when the switch's value changes. */
  onForgeSwitchChange?: (event: CustomEvent<CustomEvent<boolean>>) => void;
}

/**
 * Switches toggle the state of a single setting on or off.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-switch-change** - Dispatches when the switch's value changes.
 *
 * ### **Methods:**
 *  - **toggle(force: _boolean_): _void_** - Toggles the switch on or off.
 *
 * ### **CSS Properties:**
 *  - **--forge-theme-primary** - The primary color of the switch. _(default: undefined)_
 * - **--forge-theme-on-primary** - The color of elements placed on top of the primary color (the handle icons for example). _(default: undefined)_
 * - **--forge-switch-handle-on-color** - The color of the handle in the switch's on state. _(default: undefined)_
 * - **--forge-switch-handle-off-color** - The color of the handle in the switch's off state. _(default: undefined)_
 * - **--forge-switch-handle-active-on-color** - The color of the handle when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-handle-active-off-color** - The color of the handle when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-handle-size** - The inline and block size of the handle. _(default: undefined)_
 * - **--forge-switch-handle-width** - The inline size of the handle. _(default: undefined)_
 * - **--forge-switch-handle-height** - The block size of the handle. _(default: undefined)_
 * - **--forge-switch-handle-scale** - The scale transformation applied to the handle. _(default: undefined)_
 * - **--forge-switch-handle-on-scale** - The scale transformation applied to the handle in the switch's on state. _(default: undefined)_
 * - **--forge-switch-handle-off-scale** - The scale transformation applied to the handle in the switch's off state. _(default: undefined)_
 * - **--forge-switch-handle-active-scale** - The scale transformation applied to the handle when the switch is active (pressed). _(default: undefined)_
 * - **--forge-switch-handle-active-on-scale** - The scale transformation applied to the handle when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-handle-active-off-scale** - The scale transformation applied to the handle when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-handle-shape** - The shape of the handle. _(default: undefined)_
 * - **--forge-switch-handle-elevation** - The handle's shadow. _(default: undefined)_
 * - **--forge-switch-handle-on-elevation** - The handle's shadow in the switch's on state. _(default: undefined)_
 * - **--forge-switch-handle-off-elevation** - The handle's shadow in the switch's off state. _(default: undefined)_
 * - **--forge-switch-handle-active-elevation** - The handle's shadow when the switch is active (pressed). _(default: undefined)_
 * - **--forge-switch-handle-active-on-elevation** - The handle's shadow when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-handle-active-off-elevation** - The handle's shadow when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-track-on-color** - The color of the track in the switch's on state. _(default: undefined)_
 * - **--forge-switch-track-off-color** - The color fo the track in the switch's off state. _(default: undefined)_
 * - **--forge-switch-track-active-on-color** - The color of the track when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-track-active-off-color** - The color fo the track when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-track-width** - The inline size of the track. _(default: undefined)_
 * - **--forge-switch-track-height** - The block size of the track. _(default: undefined)_
 * - **--forge-switch-track-shape** - The shape of the track. _(default: undefined)_
 * - **--forge-switch-track-border-width** - The width of the track border. _(default: undefined)_
 * - **--forge-switch-track-on-border-width** - The width of the track border in the switch's on state. _(default: undefined)_
 * - **--forge-switch-track-off-border-width** - The width of the track border in the switch's off state. _(default: undefined)_
 * - **--forge-switch-track-active-on-border-width** - The width of the track border when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-track-active-off-border-width** - The width of the track border when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-track-border-color** - The color of the track border. _(default: undefined)_
 * - **--forge-switch-track-on-border-color** - The color of the track border in the switch's on state. _(default: undefined)_
 * - **--forge-switch-track-off-border-color** - The color of the track border in the switch's off state. _(default: undefined)_
 * - **--forge-switch-track-active-on-border-color** - The color of the track border when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-track-active-off-border-color** - The color of the track border when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-icon-color** - The color of the handle icons. _(default: undefined)_
 * - **--forge-switch-icon-on-color** - The color of the handle icon in the switch's on state. _(default: undefined)_
 * - **--forge-switch-icon-off-color** - The color of the handle icon in the switch's off state. _(default: undefined)_
 * - **--forge-switch-icon-active-on-color** - The color of the handle icon when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-icon-active-off-color** - The color of the handle icon when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-icon-size** - The size of the handle icon. _(default: undefined)_
 * - **--forge-switch-icon-on-size** - The size of the handle icon in the switch's on state. _(default: undefined)_
 * - **--forge-switch-icon-off-size** - The size of the handle icon in the switch's off state. _(default: undefined)_
 * - **--forge-switch-icon-scale** - The scale transformation applied to the handle icons. _(default: undefined)_
 * - **--forge-switch-icon-on-scale** - The scale transformation applied to the handle icons in the switch's on state. _(default: undefined)_
 * - **--forge-switch-icon-off-scale** - The scale transformation applied to the handle icons in the switch's off state. _(default: undefined)_
 * - **--forge-switch-icon-active-on-scale** - The scale transformation applied to the handle icons when the switch is active (pressed) in its on state. _(default: undefined)_
 * - **--forge-switch-icon-active-off-scale** - The scale transformation applied to the handle icons when the switch is active (pressed) in its off state. _(default: undefined)_
 * - **--forge-switch-gap** - The space between the switch and label. _(default: undefined)_
 * - **--forge-switch-justify** - How the switch and label are distributed along their main axis. _(default: undefined)_
 * - **--forge-switch-direction** - Whether the switch and label are arranged along the inline or block axis. _(default: undefined)_
 * - **--forge-switch-state-layer-size** - The inline and block size of the handle's state layer. _(default: undefined)_
 * - **--forge-switch-state-layer-width** - The inline size of the handle's state layer. _(default: undefined)_
 * - **--forge-switch-state-layer-height** - The block size of the handle's state layer. _(default: undefined)_
 * - **--forge-switch-state-layer-on-color** - The color of the handle's state layer when the switch is in its on state. _(default: undefined)_
 * - **--forge-switch-state-layer-off-color** - The color of the handle's state layer when the switch is in its off state. _(default: undefined)_
 * - **--forge-switch-state-layer-dense-size** - The inline and block size of the handle's state layer when the dense switch is used. _(default: undefined)_
 * - **--forge-switch-state-layer-dense-width** - The inline size of the handle's state layer when the dense switch is used. _(default: undefined)_
 * - **--forge-switch-state-layer-dense-height** - The block size of the handle's state layer when the dense switch is used. _(default: undefined)_
 * - **--forge-switch-disabled-opacity** - The opacity of the switch when disabled. _(default: undefined)_
 * - **--forge-switch-animation-duration** - The duration of animations. _(default: undefined)_
 * - **--forge-switch-animation-timing** - The timing function used in most animations. _(default: undefined)_
 * - **--forge-switch-active-animation-timing** - The timing function used in active state animations. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **switch** - Styles the switch container element.
 * - **track** - Styles the track element.
 * - **handle** - Styles the handle element.
 * - **icon-on** - Styles the on icon element.
 * - **icon-off** - Styles the off icon element.
 * - **label** - Styles the label element.
 * - **state-layer** - Styles the state layer root element.
 * - **focus-indicator** - Styles the focus indicator root element.
 */
export const SwitchComponent: React.ForwardRefExoticComponent<SwitchComponentProps>;
