import { LinearProgressComponent as LinearProgressComponentElement } from "@tylertech/forge/esm/linear-progress";

export type { LinearProgressComponentElement };

export interface LinearProgressComponentProps
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
  /** Controls the determinate state. */
  determinate?: boolean;

  /** Controls the progress while in a determinate state. Accepts values from `0` to `1`. */
  progress?: LinearProgressComponentElement["progress"];

  /** Controls the buffer progress while in a determinate state. Accepts values from `0` to `1`. */
  buffer?: LinearProgressComponentElement["buffer"];

  /** Sets the theme. */
  theme?: LinearProgressComponentElement["theme"];

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
 * Linear progress indicators display progress by animating along a linear track in a horizontal direction.
 * ---
 *
 *
 * ### **CSS Properties:**
 *  - **--forge-linear-progress-height** - The height of the element. _(default: undefined)_
 * - **--forge-linear-progress-track-color** - The background color of the indicator. _(default: undefined)_
 * - **--forge-linear-progress-track-shape** - The shape of the indicator. _(default: undefined)_
 * - **--forge-linear-progress-indicator-color** - The color of the indicator. _(default: undefined)_
 * - **--forge-linear-progress-indicator-height** - The height of the indicator only. _(default: undefined)_
 * - **--forge-linear-progress-determinate-duration** - The duration of the determinate animation. _(default: undefined)_
 * - **--forge-linear-progress-indeterminate-duration** - The duration of the indeterminate animation. _(default: undefined)_
 * - **--forge-linear-progress-determinate-easing** - The easing function to use for the determinate animation. _(default: undefined)_
 * - **--forge-linear-progress-theme-transition-duration** - The duration of the theme transition. _(default: undefined)_
 * - **--forge-linear-progress-theme-transition-timing** - The easing function to use for the theme transition. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **progressbar** - Styles the progress bar container element
 */
export const LinearProgressComponent: React.ForwardRefExoticComponent<LinearProgressComponentProps>;
