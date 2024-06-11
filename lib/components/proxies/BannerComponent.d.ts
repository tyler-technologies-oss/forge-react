import {
  BannerComponent as BannerComponentElement,
  CustomEvent,
} from "@tylertech/forge/esm/banner";

export type { BannerComponentElement, CustomEvent };

export interface BannerComponentProps
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
  /** Controls the visibility of the banner. */
  dismissed?: boolean;

  /** Controls the visibility of the built-in dismiss button. */
  persistent?: boolean;

  /** The theme of the banner. */
  theme?: BannerComponentElement["theme"];

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

  /** undefined */
  canDismiss?: BannerComponentElement["canDismiss"];

  /** Dispatched before the banner is dismissed. Cancelable to prevent dismissal. */
  onForgeBannerBeforeDismiss?: (event: CustomEvent) => void;

  /** Dispatched when the banner is dismissed. */
  onForgeBannerDismissed?: (event: CustomEvent) => void;
}

/**
 * Banners are used to inform users of important information, such as errors, warnings, or success messages.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-banner-before-dismiss** - Dispatched before the banner is dismissed. Cancelable to prevent dismissal.
 * - **forge-banner-dismissed** - Dispatched when the banner is dismissed.
 *
 * ### **Slots:**
 *  - _default_ - The content of the banner.
 * - **icon** - The icon to display.
 * - **button** - The optional button to display.
 *
 * ### **CSS Properties:**
 *  - **--forge-banner-background** - The background color of the banner. _(default: undefined)_
 * - **--forge-banner-color** - The text color of the banner. _(default: undefined)_
 * - **--forge-banner-icon-color** - The color of the icon. _(default: undefined)_
 * - **--forge-banner-gap** - The gap between the contents. _(default: undefined)_
 * - **--forge-banner-padding-inline** - The inline padding. _(default: undefined)_
 * - **--forge-banner-padding-block** - The block padding. _(default: undefined)_
 * - **--forge-banner-transition-duration** - The transition duration. _(default: undefined)_
 * - **--forge-banner-transition-easing** - The transition easing function. _(default: undefined)_
 */
export const BannerComponent: React.ForwardRefExoticComponent<BannerComponentProps>;
