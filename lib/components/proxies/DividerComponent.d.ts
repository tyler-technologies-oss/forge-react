import { DividerComponent as DividerComponentElement } from "@tylertech/forge/esm/divider";

export type { DividerComponentElement };

export interface DividerComponentProps
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
  /** Controls if the divider is displayed vertically or horizontally. */
  vertical?: boolean;

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
 * Divider is used to separate elements.
 * ---
 *
 *
 * ### **CSS Properties:**
 *  - **--forge-divider-color** - The color of the divider. _(default: undefined)_
 * - **--forge-divider-width** - The width of the divider. _(default: undefined)_
 * - **--forge-divider-border-style** - The border-style (dashed, solid) of the divider. _(default: undefined)_
 * - **--forge-divider-margin** - The margin of divider. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 */
export const DividerComponent: React.ForwardRefExoticComponent<DividerComponentProps>;
