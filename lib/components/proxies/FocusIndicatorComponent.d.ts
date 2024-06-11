import { FocusIndicatorComponent as FocusIndicatorComponentElement } from "@tylertech/forge/esm/focus-indicator";

export type { FocusIndicatorComponentElement };

export interface FocusIndicatorComponentProps
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
  /** Controls whether the indicator is active. */
  active?: boolean;

  /** Controls whether the indicator renders inward. */
  inward?: boolean;

  /** Controls whether the indicator renders circular. */
  circular?: boolean;

  /** Controls whether the indicator renders when the target element matches `:focus` instead of `:focus-visible`. */
  allowFocus?: boolean;

  /** The id of the element to attach the focus indicator to. */
  target?: FocusIndicatorComponentElement["target"];

  /** The focus mode to use. */
  focusMode?: FocusIndicatorComponentElement["focusMode"];

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

  /** The element to attach the focus indicator to. */
  targetElement?: FocusIndicatorComponentElement["targetElement"];
}

/**
 * Renders a focus indicator when an attached element matches `:focus-visible`.
 * ---
 *
 *
 * ### **CSS Properties:**
 *  - **--forge-focus-indicator-display** - The `display` style. Defaults to `flex`. _(default: undefined)_
 * - **--forge-focus-indicator-width** - The width of the focus indicator when resting. _(default: undefined)_
 * - **--forge-focus-indicator-active-width** - The width of the focus indicator when active. When animating this is the max extent. _(default: undefined)_
 * - **--forge-focus-indicator-color** - The color of the focus indicator. _(default: undefined)_
 * - **--forge-focus-indicator-shape** - The shape of the focus indicator. _(default: undefined)_
 * - **--forge-focus-indicator-duration** - The animation duration. _(default: undefined)_
 * - **--forge-focus-indicator-easing** - The animation easing function. _(default: undefined)_
 * - **--forge-focus-indicator-shape-start-start** - The start start shape. _(default: undefined)_
 * - **--forge-focus-indicator-shape-start-end** - The start end shape. _(default: undefined)_
 * - **--forge-focus-indicator-shape-end-start** - The end start shape. _(default: undefined)_
 * - **--forge-focus-indicator-shape-end-end** - The end end shape. _(default: undefined)_
 * - **--forge-focus-indicator-outward-offset** - The offset of the focus indicator when outward. _(default: undefined)_
 * - **--forge-focus-indicator-inward-offset** - The offset of the focus indicator when inward. _(default: undefined)_
 * - **--forge-focus-indicator-offset-block** - The block offset. _(default: undefined)_
 * - **--forge-focus-indicator-offset-inline** - The inline offset. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **indicator** - The focus indicator element.
 */
export const FocusIndicatorComponent: React.ForwardRefExoticComponent<FocusIndicatorComponentProps>;
