import { BackdropComponent as BackdropComponentElement } from "@tylertech/forge/esm/backdrop";

export type { BackdropComponentElement };

export interface BackdropComponentProps
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
  /** Whether the backdrop is visible. */
  visible?: boolean;

  /** Whether the backdrop uses "fixed" or "relative" positioning. */
  fixed?: boolean;

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
 * ### **Methods:**
 *  - **show(): _void_** - Immediately shows the backdrop by setting the `visibility` to `true` without animations.
 * - **hide(): _void_** - Immediately hides the backdrop by setting the `visibility` to `false` without animations.
 * - **fadeIn(): _Promise<void>_** - Sets the `visibility` to `true` and animates in.
 * - **fadeOut(): _Promise<void>_** - Sets the `visibility` to `false` and animates out.
 *
 * ### **CSS Properties:**
 *  - **--forge-backdrop-background** - The backdrop background color. _(default: undefined)_
 * - **--forge-backdrop-opacity** - The backdrop opacity. _(default: undefined)_
 * - **--forge-backdrop-z-index** - The backdrop z-index. _(default: undefined)_
 * - **--forge-backdrop-enter-animation-duration** - The animation duration for the enter animation. _(default: undefined)_
 * - **--forge-backdrop-enter-animation-easing** - The animation easing for the enter animation. _(default: undefined)_
 * - **--forge-backdrop-exit-animation-duration** - The animation duration for the exit animation. _(default: undefined)_
 * - **--forge-backdrop-exit-animation-easing** - The animation easing for the exit animation. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root element of the backdrop.
 */
export const BackdropComponent: React.ForwardRefExoticComponent<BackdropComponentProps>;
