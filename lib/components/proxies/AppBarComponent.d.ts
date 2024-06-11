import { AppBarComponent as AppBarComponentElement } from "@tylertech/forge/esm/app-bar";

export type { AppBarComponentElement };

export interface AppBarComponentProps
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
  /** The text to display in the title. */
  titleText?: AppBarComponentElement["titleText"];

  /** The elevation of the app bar. */
  elevation?: AppBarComponentElement["elevation"];

  /** The theme of the app bar. */
  theme?: AppBarComponentElement["theme"];

  /** The href that will be used to make the logo and title area a clickable link */
  href?: AppBarComponentElement["href"];

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

  /** Fires when the app bar is clicked. */
  onForgeAppBarNavigate?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-app-bar-navigate** - Fires when the app bar is clicked.
 *
 * ### **Slots:**
 *  - **logo** - Reserved for the brand logo.
 * - **title** - Reserved for the application title. This will overwrite the `titleText` property/attribute.
 * - **start** - Places content at the beginning of the app bar.
 * - **center** - Places content in the center of the app bar.
 * - **end** - Places content at the end of the app bar.
 *
 * ### **CSS Properties:**
 *  - **--forge-app-bar-background** - The background color of the app bar. _(default: undefined)_
 * - **--forge-app-bar-foreground** - The text color of the app bar. _(default: undefined)_
 * - **--forge-app-bar-z-index** - The `z-index` of the app bar. _(default: undefined)_
 * - **--forge-app-bar-elevation** - The elevation of the app bar. _(default: undefined)_
 * - **--forge-app-bar-height** - The height of the app bar. _(default: undefined)_
 * - **--forge-app-bar-row-padding** - The inline padding of the app bar. _(default: undefined)_
 * - **--forge-app-bar-logo-gap** - The space between the logo and title. _(default: undefined)_
 * - **--forge-app-bar-title-padding** - The padding around the title element. _(default: undefined)_
 * - **--forge-app-bar-transition-duration** - The transition duration for animations. _(default: undefined)_
 * - **--forge-app-bar-transition-timing** - The transition timing function for animations. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **title** - The title element.
 */
export const AppBarComponent: React.ForwardRefExoticComponent<AppBarComponentProps>;
