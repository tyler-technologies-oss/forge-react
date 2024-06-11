import { TabBarComponent as TabBarComponentElement } from "@tylertech/forge/esm/tab-bar";

export type { TabBarComponentElement };

export interface TabBarComponentProps
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
  /** The disabled state of the tab bar. */
  disabled?: boolean;

  /** Controls whether the tab bar is vertical or horizontal. */
  vertical?: boolean;

  /** Controls whether the tabs stretch the full width of their container or cluster together at their minimum width. */
  clustered?: boolean;

  /** Controls whether the tabs are taller to allow for slotted leading/trailing elements. */
  stacked?: boolean;

  /** Controls whether the tabs are styled as secondary tab navigation. */
  secondary?: boolean;

  /** Controls whether the tabs are automatically activated when receiving focus. */
  autoActivate?: boolean;

  /** Controls whether scroll buttons are displayed when the tabs overflow their container. */
  scrollButtons?: boolean;

  /** The index of the active tab. */
  activeTab?: TabBarComponentElement["activeTab"];

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

  /** Controls whether the tabs are rendered inverted (tab indicator at top instead of bottom). */
  inverted?: TabBarComponentElement["inverted"];

  /** Dispatches when the active tab changes. */
  onForgeTabBarChange?: (
    event: CustomEvent<CustomEvent<ITabBarChangeEventData>>
  ) => void;
}

/**
 * Tabs organize content across different screens and views.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-tab-bar-change** - Dispatches when the active tab changes.
 *
 * ### **CSS Properties:**
 *  - **--forge-tab-bar-justify** - The `justify-content` value for the tab bar flex container. _(default: undefined)_
 * - **--forge-tab-bar-stretch** - The `flex` value for the child `<forge-tab>` elements. _(default: undefined)_
 * - **--forge-tab-bar-divider-color** - The color of the divider. _(default: undefined)_
 * - **--forge-tab-bar-divider-thickness** - The thickness of the divider. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **container** - The container element.
 * - **scroll-container** - The scroll container element.
 */
export const TabBarComponent: React.ForwardRefExoticComponent<TabBarComponentProps>;
