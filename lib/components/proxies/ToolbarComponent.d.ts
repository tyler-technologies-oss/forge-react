import { ToolbarComponent as ToolbarComponentElement } from "@tylertech/forge/esm/toolbar";

export type { ToolbarComponentElement };

export interface ToolbarComponentProps
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
  /** Controls whether a bottom divider (default) or top divider (true) is used. */
  inverted?: boolean;

  /** Hides the internal divider. */
  noDivider?: boolean;

  /** Deprecated. Use no-divider instead. */
  noBorder?: boolean;

  /** Sets the internal padding style to 0. */
  noPadding?: boolean;

  /** Forces the internal container to use height: auto for dynamic content that doesn't fit the static height. */
  autoHeight?: boolean;

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
 * Toolbars allow you to place titles and actions within a container and align them to the start, center, or end of the toolbar.
 * This component is useful as headers and footers within pages, dialogs, sections... etc. to ensure consistent layout and alignment.
 * ---
 *
 *
 * ### **Slots:**
 *  - **before-start** - The content to place before the start slot.
 * - **start** - The content to place at the start of the toolbar.
 * - **center** - The content to place in the center of the toolbar.
 * - **end** - The content to place at the end of the toolbar.
 * - **after-end** - The content to place after the end slot.
 *
 * ### **CSS Properties:**
 *  - **--forge-theme-height** - Controls the height. _(default: undefined)_
 * - **--forge-theme-min-height** - Controls the minimum height. _(default: undefined)_
 * - **--forge-theme-surface** - Controls the background-color of the toolbar. _(default: undefined)_
 * - **--forge-toolbar-divider-width** - Controls the divider width. _(default: undefined)_
 * - **--forge-toolbar-divider-style** - Controls the divider style. _(default: undefined)_
 * - **--forge-toolbar-divider-color** - Controls the divider color. _(default: undefined)_
 * - **--forge-toolbar-shape** - Controls the border radius of the toolbar. _(default: undefined)_
 * - **--forge-toolbar-start-start-shape** - Controls the border radius of the top left corner. _(default: undefined)_
 * - **--forge-toolbar-start-end-shape** - Controls the border radius of the top right corner. _(default: undefined)_
 * - **--forge-toolbar-end-start-shape** - Controls the border radius of the bottom left corner. _(default: undefined)_
 * - **--forge-toolbar-end-end-shape** - Controls the border radius of the bottom right corner. _(default: undefined)_
 * - **--forge-toolbar-padding** - Controls the left and right padding using the padding-inline style. _(default: undefined)_
 * - **--forge-toolbar-padding-block** - Controls the top and bottom padding using the padding-block style. _(default: undefined)_
 * - **--forge-toolbar-padding-inline** - Controls the left and right padding using the padding-block style. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element wrapping all slots and content.
 * - **inner** - The internal container element for the start, center, and end slots.
 * - **before-section-start** - The container element for the before-start slot.
 * - **section-start** - The container element for the start slot.
 * - **section-center** - The container element for the center slot.
 * - **section-end** - The container element for the end slot.
 * - **after-section-end** - The container element for the after-end slot.
 */
export const ToolbarComponent: React.ForwardRefExoticComponent<ToolbarComponentProps>;
