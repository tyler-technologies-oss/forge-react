import { CircularProgressComponent as CircularProgressComponentElement } from "@tylertech/forge/esm/circular-progress";

export type { CircularProgressComponentElement };

export interface CircularProgressComponentProps
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

  /** Controls the visibility of the track background. */
  track?: boolean;

  /** Controls the progress while in a determinate state. Accepts values from `0` to `1`. */
  progress?: CircularProgressComponentElement["progress"];

  /** Controls the theme of the progress indicator. */
  theme?: CircularProgressComponentElement["theme"];

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
 * Circular progress indicators display progress by animating along a circular track in a clockwise direction.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The is the default/unnamed slot. Renders content at the center of the progress indicator.
 *
 * ### **CSS Properties:**
 *  - **--forge-circular-progress-size** - The height and width of the indicator container. _(default: undefined)_
 * - **--forge-circular-progress-padding** - The padding inside the bounding box of the container. _(default: undefined)_
 * - **--forge-circular-progress-track-width** - The track indicator width. _(default: undefined)_
 * - **--forge-circular-progress-track-color** - The track background color. _(default: undefined)_
 * - **--forge-circular-progress-indicator-color** - The track indicator color. _(default: undefined)_
 * - **--forge-circular-progress-arc-duration** - The duration of the arc animation. _(default: undefined)_
 * - **--forge-circular-progress-theme-transition-duration** - The duration of the theme transition. _(default: undefined)_
 * - **--forge-circular-progress-theme-transition-timing** - The easing function to use for the theme transition. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **progressbar** - Styles the progress bar container element
 */
export const CircularProgressComponent: React.ForwardRefExoticComponent<CircularProgressComponentProps>;
