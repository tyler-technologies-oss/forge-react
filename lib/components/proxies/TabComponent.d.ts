import { TabComponent as TabComponentElement } from "@tylertech/forge/esm/tab";

export type { TabComponentElement };

export interface TabComponentProps
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
  /** The disabled state of the tab. */
  disabled?: TabComponentElement["disabled"];

  /** The selected state of the tab. */
  selected?: TabComponentElement["selected"];

  /** Controls whether the tab is vertical or horizontal. */
  vertical?: TabComponentElement["vertical"];

  /** Controls whether the tab is taller to allow for slotted leading/trailing elements. */
  stacked?: TabComponentElement["stacked"];

  /** Controls whether the tab is styled as secondary tab navigation. */
  secondary?: TabComponentElement["secondary"];

  /** Controls whether the tab indicator is rendered on the opposite side of the tab. */
  inverted?: TabComponentElement["inverted"];

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

  /** Dispatched when the tab is selected. This event bubbles and it can be useful to capture it on the `<forge-tab-bar>` element. */
  onForgeTabSelect?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-tab-select** - Dispatched when the tab is selected. This event bubbles and it can be useful to capture it on the `<forge-tab-bar>` element.
 *
 * ### **Slots:**
 *  - _default_ - The tab label.
 * - **start** - Content before the label.
 * - **end** - Content after the label.
 *
 * ### **CSS Properties:**
 *  - **--forge-tab-indicator-color** - The color of the tab indicator. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-indicator-height** - The height of the tab indicator. _(default: undefined)_
 * - **--forge-tab-indicator-shape** - The shape of the tab indicator. _(default: undefined)_
 * - **--forge-tab-container-color** - The color of the tab container. Defaults to the surface theme. _(default: undefined)_
 * - **--forge-tab-height** - The height of the tab. _(default: undefined)_
 * - **--forge-tab-shape** - The shape of the tab. _(default: undefined)_
 * - **--forge-tab-disabled-opacity** - The opacity of the tab when disabled. _(default: undefined)_
 * - **--forge-tab-active-focus-icon-color** - The color of the icon when the tab is active and focused. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-active-hover-icon-color** - The color of the icon when the tab is active and hovered. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-active-icon-color** - The color of the icon when the tab is active. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-active-pressed-icon-color** - The color of the icon when the tab is active and pressed. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-icon-size** - The size of the icon. _(default: undefined)_
 * - **--forge-tab-focus-icon-color** - The color of the icon when the tab is focused. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-hover-icon-color** - The color of the icon when the tab is hovered. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-icon-color** - The color of the icon. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-pressed-icon-color** - The color of the icon when the tab is pressed. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-active-focus-label-text-color** - The color of the label text when the tab is active and focused. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-active-hover-label-text-color** - The color of the label text when the tab is active and hovered. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-active-label-text-color** - The color of the label text when the tab is active. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-active-pressed-label-text-color** - The color of the label text when the tab is active and pressed. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-tab-focus-label-text-color** - The color of the label text when the tab is focused. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-hover-label-text-color** - The color of the label text when the tab is hovered. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-label-text-color** - The color of the label text. Defaults to the text-on-background theme. _(default: undefined)_
 * - **--forge-tab-pressed-label-text-color** - The color of the label text when the tab is pressed. Defaults to the text-on-background theme. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **container** - The tab container.
 * - **content** - The tab content container.
 * - **label** - The tab label container.
 * - **indicator** - The tab active indicator.
 */
export const TabComponent: React.ForwardRefExoticComponent<TabComponentProps>;
