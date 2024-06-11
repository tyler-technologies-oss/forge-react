import { DrawerComponent as DrawerComponentElement } from "@tylertech/forge/esm/drawer";

export type { DrawerComponentElement };

export interface DrawerComponentProps
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
  /** Toggles whether the drawer is visible or not. */
  open?: boolean;

  /** Controls the layout and animation direction of the drawer for positioning on the left vs. right side of the screen when toggling the `open` attribute. */
  direction?: DrawerComponentElement["direction"];

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

  /** Dispatched after the drawer has opened. */
  onForgeDrawerAfterOpen?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Dispatched after the drawer has closed. */
  onForgeDrawerAfterClose?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-drawer-after-open** - Dispatched after the drawer has opened.
 * - **forge-drawer-after-close** - Dispatched after the drawer has closed.
 *
 * ### **Slots:**
 *  - _default_ - The content to display in the scrollable content container.
 * - **header** - The header content above the main content.
 * - **footer** - The footer content below the main content.
 *
 * ### **CSS Properties:**
 *  - **--forge-drawer-width** - The width of the drawer. _(default: undefined)_
 * - **--forge-drawer-background** - The background color of the drawer. _(default: undefined)_
 * - **--forge-drawer-border-color** - The border of the drawer. _(default: undefined)_
 * - **--forge-drawer-border-width** - The border width of the drawer. _(default: undefined)_
 * - **--forge-drawer-transition-duration** - The transition duration of the drawer. _(default: undefined)_
 * - **--forge-drawer-transition-easing** - The transition timing function of the drawer. _(default: undefined)_
 * - **--forge-drawer-duration-close** - The duration of the drawer closing animation. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The component's root element.
 * - **content** - The content container element.
 */
export const DrawerComponent: React.ForwardRefExoticComponent<DrawerComponentProps>;
