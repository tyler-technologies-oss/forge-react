import { BadgeComponent as BadgeComponentElement } from "@tylertech/forge/esm/badge";

export type { BadgeComponentElement };

export interface BadgeComponentProps
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
  /** When present, the badge will be a small dot without any content visible. */
  dot?: boolean;

  /** Controls whether the badge will have a stronger visual appearance. */
  strong?: boolean;

  /** Controls whether the badge is visible. */
  hide?: boolean;

  /** The theme of the badge. */
  theme?: BadgeComponentElement["theme"];

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
 * Badges are non-interactive components used to inform status, counts, or as a descriptive label.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - Default content placed inside the badge.
 * - **start** - Content placed before the default content.
 * - **end** - Content placed after the default content.
 *
 * ### **CSS Properties:**
 *  - **--forge-badge-background** - The background color. _(default: undefined)_
 * - **--forge-badge-color** - The text color. _(default: undefined)_
 * - **--forge-badge-shape** - The shape radius. _(default: undefined)_
 * - **--forge-badge-padding-inline** - The inline padding. _(default: undefined)_
 * - **--forge-badge-padding-block** - The block padding. _(default: undefined)_
 * - **--forge-badge-border-width** - The border width. _(default: undefined)_
 * - **--forge-badge-border-color** - The border color. _(default: undefined)_
 * - **--forge-badge-border-style** - The border style. _(default: undefined)_
 * - **--forge-badge-gap** - The spacing between the content within the badge. _(default: undefined)_
 */
export const BadgeComponent: React.ForwardRefExoticComponent<BadgeComponentProps>;
