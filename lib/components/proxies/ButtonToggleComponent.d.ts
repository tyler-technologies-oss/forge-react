import { ButtonToggleComponent as ButtonToggleComponentElement } from "@tylertech/forge/esm/button-toggle";

export type { ButtonToggleComponentElement };

export interface ButtonToggleComponentProps
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
  /** Whether or not the button is selected. */
  selected?: boolean;

  /** Whether or not the button is disabled. */
  disabled?: boolean;

  /** Whether or not the button is readonly. */
  readonly?: boolean;

  /** The value of the button toggle. */
  value?: ButtonToggleComponentElement["value"];

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

  /** Dispatches when the user toggles the button. */
  onForgeButtonToggleSelect?: (
    event: CustomEvent<CustomEvent<IButtonToggleSelectEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-button-toggle-select** - Dispatches when the user toggles the button.
 *
 * ### **Slots:**
 *  - _default_ - The default/unnamed slot for the button toggle's content.
 * - **start** - Typically reserved for content/icons that render logically before the default slot content.
 * - **end** - Typically reserved content/icons that render logically after the default slot content.
 *
 * ### **CSS Properties:**
 *  - **--forge-button-toggle-display** - The `display` style for the button toggle container element. _(default: undefined)_
 * - **--forge-button-toggle-min-width** - The minimum width. _(default: undefined)_
 * - **--forge-button-toggle-spacing** - The spacing between the button toggle and its content. _(default: undefined)_
 * - **--forge-button-toggle-padding-block** - The padding on the block axis. _(default: undefined)_
 * - **--forge-button-toggle-padding-inline** - The padding on the inline axis. _(default: undefined)_
 * - **--forge-button-toggle-color** - The color of the button toggle content. _(default: undefined)_
 * - **--forge-button-toggle-background** - The background of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-cursor** - The cursor of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-border-width** - The border-width of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-border-style** - The border-style of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-border-color** - The border-color of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-shape** - The shape radius of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-shape-start-start** - The start-start shape radius of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-shape-start-end** - The start-end shape radius of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-shape-end-start** - The end-start shape radius of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-shape-end-end** - The end-end shape radius of the button toggle. _(default: undefined)_
 * - **--forge-button-toggle-selected-background** - The background of the button toggle when selected. _(default: undefined)_
 * - **--forge-button-toggle-selected-color** - The color of the button toggle content when selected. _(default: undefined)_
 * - **--forge-button-toggle-selected-disabled-background** - The background of the button toggle when selected and disabled. _(default: undefined)_
 * - **--forge-button-toggle-disabled-opacity** - The opacity of the button toggle when disabled. _(default: undefined)_
 * - **--forge-button-toggle-disabled-cursor** - The cursor of the button toggle when disabled. _(default: undefined)_
 * - **--forge-button-toggle-disabled-color** - The color of the button toggle content when disabled. _(default: undefined)_
 * - **--forge-button-toggle-disabled-background** - The background of the button toggle when disabled. _(default: undefined)_
 * - **--forge-button-toggle-transition-duration** - The transition-duration of various properties. _(default: undefined)_
 * - **--forge-button-toggle-transition-timing** - The transition-timing of various properties. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **focus-indicator** - The focus indicator element.
 * - **state-layer** - The state layer surface element.
 */
export const ButtonToggleComponent: React.ForwardRefExoticComponent<ButtonToggleComponentProps>;
