import { IconComponent as IconComponentElement } from "@tylertech/forge/esm/icon";

export type { IconComponentElement };

export interface IconComponentProps
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
  /** Controls whether the icon will be loaded dynamically when it comes into view. False by default. */
  lazy?: boolean;

  /** Controls whether external network requests are allowed for this icon. Only pertains for icons that aren't already defined in the registry. */
  external?: boolean;

  /** The name of the icon to render. */
  name?: IconComponentElement["name"];

  /** Provides the ability to set the SVG string content directly. */
  src?: IconComponentElement["src"];

  /** The type of icon to load externally. Possible values: "standard" (default), "extended", "custom". */
  externaltype?: IconComponentElement["externaltype"];

  /** A custom value to apply to the `viewBox` attribute on the internal `<svg>` element. */
  viewbox?: IconComponentElement["viewbox"];

  /** The theme to apply to the icon. */
  theme?: IconComponentElement["theme"];

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

  /** The type of icon to load externally. Possible values: "standard" (default), "extended", "custom". */
  externalType?: IconComponentElement["externalType"];

  /** A callback that can be provided to generate a URL that will be used to fetch an SVG icon. */
  externalUrlBuilder?: IconComponentElement["externalUrlBuilder"];
}

/**
 * Icons are used to represent information visually
 * ---
 *
 *
 * ### **Methods:**
 *  - **layout(): _void_** - Forces a reload of the icon.
 *
 * ### **CSS Properties:**
 *  - **--forge-icon-color** - The color of the icon. _(default: undefined)_
 * - **--forge-icon-size** - The size of the icon. Defaults to the font-size of the context it is placed in. _(default: undefined)_
 * - **--forge-icon-width** - The width of the icon. _(default: undefined)_
 * - **--forge-icon-height** - The height of the icon. _(default: undefined)_
 * - **--forge-icon-font-size** - The font size of the icon. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **svg** - The internal SVG element.
 */
export const IconComponent: React.ForwardRefExoticComponent<IconComponentProps>;
