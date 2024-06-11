import { ListComponent as ListComponentElement } from "@tylertech/forge/esm/list";

export type { ListComponentElement };

export interface ListComponentProps
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
  /** Whether the list has all dense items or not. */
  dense?: boolean;

  /** Whether the list items within this list are indented. Default is false. */
  indented?: boolean;

  /** Whether the list has all two-line items or not. */
  twoLine?: boolean;

  /** Whether the list has all three-line items or not. */
  threeLine?: boolean;

  /** Whether the list has all items that wrap their text or not. */
  wrap?: boolean;

  /** Controls whether the list is styled a navigation list or not. */
  navlist?: boolean;

  /** Controls whether the list items will automatically attach themselves to interactive slotted elements or not. */
  noninteractive?: boolean;

  /** The selected list item value(s). */
  selectedValue?: ListComponentElement["selectedValue"];

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
 * Lists are vertical groupings of related content.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The default/unnamed slot for child list items.
 *
 * ### **CSS Properties:**
 *  - **--forge-list-container-color** - The background color of the list surface. _(default: undefined)_
 * - **--forge-list-spacing** - The spacing between the list items. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The component's root container element.
 */
export const ListComponent: React.ForwardRefExoticComponent<ListComponentProps>;
