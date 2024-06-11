import { SkeletonComponent as SkeletonComponentElement } from "@tylertech/forge/esm/skeleton";

export type { SkeletonComponentElement };

export interface SkeletonComponentProps
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
  /** Apply form field styles to the skeleton. */
  formField?: SkeletonComponentElement["formField"];

  /** Apply button styles to the skeleton. */
  button?: SkeletonComponentElement["button"];

  /** Apply chip styles to the skeleton. */
  chip?: SkeletonComponentElement["chip"];

  /** Apply list item styles to the skeleton. */
  listItem?: SkeletonComponentElement["listItem"];

  /** Apply text styles to the skeleton. */
  text?: SkeletonComponentElement["text"];

  /** Apply avatar styles to the skeleton. */
  avatar?: SkeletonComponentElement["avatar"];

  /** Apply stretch styles to the skeleton. */
  stretch?: SkeletonComponentElement["stretch"];

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
 * Skeleton is used to provide a placeholder for content that is loading.
 * ---
 *
 *
 * ### **CSS Properties:**
 *  - **--forge-skeleton-animation-duration** - The duration of the skeleton animation. _(default: undefined)_
 * - **--forge-skeleton-width** - The width of the skeleton. _(default: undefined)_
 * - **--forge-skeleton-height** - The height of the skeleton. _(default: undefined)_
 * - **--forge-skeleton-background** - The background color of the skeleton. _(default: undefined)_
 * - **--forge-skeleton-shape** - The shape of the skeleton. _(default: undefined)_
 * - **--forge-skeleton-margin** - The margin of the skeleton. _(default: undefined)_
 * - **--forge-skeleton-button-height** - The height of the button skeleton. _(default: undefined)_
 * - **--forge-skeleton-button-width** - The width of the button skeleton. _(default: undefined)_
 * - **--forge-skeleton-form-field-height** - The height of the form field skeleton. _(default: undefined)_
 * - **--forge-skeleton-form-field-width** - The width of the form field skeleton. _(default: undefined)_
 * - **--forge-skeleton-chip-height** - The height of the chip skeleton. _(default: undefined)_
 * - **--forge-skeleton-chip-width** - The width of the chip skeleton. _(default: undefined)_
 * - **--forge-skeleton-chip-shape** - The shape of the chip skeleton. _(default: undefined)_
 * - **--forge-skeleton-list-item-height** - The height of the list item skeleton. _(default: undefined)_
 * - **--forge-skeleton-list-item-margin** - The margin of the list item skeleton. _(default: undefined)_
 * - **--forge-skeleton-text-height** - The height of the text skeleton. _(default: undefined)_
 * - **--forge-skeleton-gradient-color** - The color of the gradient skeleton. _(default: undefined)_
 * - **--forge-skeleton-avatar-size** - The size of the avatar skeleton. _(default: undefined)_
 * - **--forge-skeleton-avatar-shape** - The shape of the avatar skeleton. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root element of the skeleton.
 */
export const SkeletonComponent: React.ForwardRefExoticComponent<SkeletonComponentProps>;
