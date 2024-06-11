import { ScaffoldComponent as ScaffoldComponentElement } from "@tylertech/forge/esm/scaffold";

export type { ScaffoldComponentElement };

export interface ScaffoldComponentProps
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
  /** Whether the scaffold should be full viewport height. */
  viewport?: boolean;

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
 * A scaffold provides a generic layout structure for your content using common named areas.
 * ---
 *
 *
 * ### **Slots:**
 *  - **header** - Places content in the header.
 * - **body** - Places content in the body.
 * - **footer** - Places content in the footer.
 * - **left** - Places content to the left of all content.
 * - **right** - Places content to the right of all content.
 * - **body-header** - Places content in the header of the body.
 * - **body-footer** - Places content in the footer of the body.
 * - **body-left** - Places content to the left of the body content.
 * - **body-right** - Places content to the right of the body content.
 *
 * ### **CSS Properties:**
 *  - **--forge-scaffold-height** - The `height` of the scaffold. _(default: undefined)_
 * - **--forge-scaffold-width** - The `width` of the scaffold. _(default: undefined)_
 * - **--forge-scaffold-overflow** - The `overflow` of the scaffold. _(default: undefined)_
 * - **--forge-scaffold-body-position** - The `position` of the scaffold body. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **header** - The header of the scaffold.
 * - **body** - The body of the scaffold.
 */
export const ScaffoldComponent: React.ForwardRefExoticComponent<ScaffoldComponentProps>;
