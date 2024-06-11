import { OpenIconComponent as OpenIconComponentElement } from "@tylertech/forge/esm/open-icon";

export type { OpenIconComponentElement };

export interface OpenIconComponentProps
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
  /** Whether the icon is open or closed. */
  open?: boolean;

  /** The orientation of the rotation. */
  orientation?: OpenIconComponentElement["orientation"];

  /** The rotation amount. */
  rotation?: OpenIconComponentElement["rotation"];

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
 * Open icons are used to indicate whether a section is open or closed.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The icon to display when open.
 *
 * ### **CSS Properties:**
 *  - **--forge-open-icon-color** - The color of the icon. _(default: undefined)_
 * - **--forge-open-icon-size** - The size of the icon. _(default: undefined)_
 * - **--forge-open-icon-height** - The height of the icon. Defaults to `size`. _(default: undefined)_
 * - **--forge-open-icon-width** - The width of the icon. Defaults to `size`. _(default: undefined)_
 * - **--forge-open-icon-initial-rotation** - The initial rotation of the icon. _(default: undefined)_
 * - **--forge-open-icon-open-rotation** - The rotation of the icon when open. _(default: undefined)_
 * - **--forge-open-icon-animation-duration** - The duration of the open animation. _(default: undefined)_
 * - **--forge-open-icon-half-animation-duration** - The duration of the open animation when in a half orientation. _(default: undefined)_
 * - **--forge-open-icon-animation-timing** - The timing function of the open animation. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root element of the icon.
 * - **icon** - The icon element.
 */
export const OpenIconComponent: React.ForwardRefExoticComponent<OpenIconComponentProps>;
