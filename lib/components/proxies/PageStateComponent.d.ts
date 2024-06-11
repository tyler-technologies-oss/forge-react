import { PageStateComponent as PageStateComponentElement } from "@tylertech/forge/esm/page-state";

export type { PageStateComponentElement };

export interface PageStateComponentProps
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
 *
 * ---
 *
 *
 * ### **Slots:**
 *  - **graphic** - The slot where the graphic will be rendered.
 * - **title** - The slot where the title will be rendered.
 * - **message** - The slot where the message will be rendered.
 * - **actions** - The slot where the actions will be rendered.
 *
 * ### **CSS Properties:**
 *  - **--forge-page-state-width** - The width of the page state. _(default: undefined)_
 * - **--forge-page-state-height** - The height of the page state. _(default: undefined)_
 * - **--forge-page-state-spacing** - The spacing of the page state. _(default: undefined)_
 * - **--forge-page-state-mobile-width** - The mobile width of the page state. _(default: undefined)_
 * - **--forge-page-state-graphic-height** - The graphic height of the page state. _(default: undefined)_
 * - **--forge-page-state-graphic-spacing** - The graphic spacing of the page state. _(default: undefined)_
 * - **--forge-page-state-mobile-graphic-height** - The mobile graphic height of the page state. _(default: undefined)_
 * - **--forge-page-state-title-color** - The title color of the page state. _(default: undefined)_
 * - **--forge-page-state-title-spacing** - The title spacing of the page state. _(default: undefined)_
 * - **--forge-page-state-message-color** - The message color of the page state. _(default: undefined)_
 * - **--forge-page-state-message-spacing** - The message spacing of the page state. _(default: undefined)_
 * - **--forge-page-state-actions-spacing** - The actions spacing of the page state. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **graphic-container** - The graphic container element.
 * - **title-container** - The title container element.
 * - **message-container** - The message container element.
 * - **actions-container** - The actions container element.
 */
export const PageStateComponent: React.ForwardRefExoticComponent<PageStateComponentProps>;
