import { LabelValueComponent as LabelValueComponentElement } from "@tylertech/forge/esm/label-value";

export type { LabelValueComponentElement };

export interface LabelValueComponentProps
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
  /** If present, the value will be displayed in an alternative emphasized style. */
  empty?: boolean;

  /** If present, the value will be truncated with an ellipsis if it overflows its container. */
  ellipsis?: boolean;

  /** If present, the label and value will be displayed on the same line. */
  inline?: boolean;

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

  /** Deprecated. Use `inline` instead. */
  dense?: LabelValueComponentElement["dense"];
}

/**
 * Label-value pairs are used to display a label and a value in a compact format.
 * ---
 *
 *
 * ### **Slots:**
 *  - **label** - The label to display.
 * - **value** - The value to display.
 * - **icon** - An icon to display next to the label.
 *
 * ### **CSS Properties:**
 *  - **--forge-label-value-align** - Aligns the label and value. Possible values: `start` (default), `center`, `end`. _(default: undefined)_
 * - **--forge-label-value-label-spacing** - The spacing between the label and value. _(default: undefined)_
 * - **--forge-label-value-label-block-start-spacing** - The block start spacing for the label. _(default: undefined)_
 * - **--forge-label-value-label-block-end-spacing** - The block end spacing for the label. _(default: undefined)_
 * - **--forge-label-value-label-color** - The color to apply to the label. _(default: undefined)_
 * - **--forge-label-value-icon-spacing** - The spacing between the icon and the label. _(default: undefined)_
 * - **--forge-label-value-inline-label-spacing** - The spacing between the label and value when displayed inline. _(default: undefined)_
 * - **--forge-label-value-empty-color** - The color to apply to the value when empty. _(default: undefined)_
 * - **--forge-label-value-empty-style** - The font-style to apply to the value when empty. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root layout container element.
 * - **label** - The label container element.
 * - **value** - The value container element.
 * - **icon** - The icon container element.
 */
export const LabelValueComponent: React.ForwardRefExoticComponent<LabelValueComponentProps>;
