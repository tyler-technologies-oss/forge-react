import { ListItemComponent as ListItemComponentElement } from "@tylertech/forge/esm/list-item";

export type { ListItemComponentElement };

export interface ListItemComponentProps
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
  /** Applies the selected state to the list item. */
  selected?: boolean;

  /** Applies the active state to the list item by emulating its focused state. */
  active?: boolean;

  /** Applies the dense state to the list item. */
  dense?: boolean;

  /** Applies the indented state by adding margin to the start of the list item. */
  indented?: boolean;

  /** Sets the list item height to support at least two lines of text. */
  twoLine?: boolean;

  /** Sets the list item height to support at least three lines of text. */
  threeLine?: boolean;

  /** Sets the list item to wrap its text content. */
  wrap?: boolean;

  /** Controls whether the list item will automatically attach itself to interactive slotted elements or not. */
  noninteractive?: boolean;

  /** The unique value of the list item. */
  value?: ListItemComponentElement["value"];

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

  /** Fires when the list item is selected. */
  onForgeListItemSelect?: (
    event: CustomEvent<CustomEvent<IListItemSelectEventData>>
  ) => void;
}

/**
 * List items are individual rows of content inside of a list.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-list-item-select** - Fires when the list item is selected.
 *
 * ### **Slots:**
 *  - _default_ - The primary text.
 * - **secondary-text** - The secondary text.
 * - **tertiary-text** - The tertiary text.
 * - **start** - The start content.
 * - **end** - The end element.
 *
 * ### **CSS Properties:**
 *  - **--forge-list-item-background** - The background color. _(default: undefined)_
 * - **--forge-list-item-shape** - The shape of the list item. _(default: undefined)_
 * - **--forge-list-item-padding** - The padding inside of the container element. _(default: undefined)_
 * - **--forge-list-item-wrap-padding** - The padding inside of the container element when `wrap` is enabled. _(default: undefined)_
 * - **--forge-list-item-margin** - The margin around the host element. _(default: undefined)_
 * - **--forge-list-item-height** - The height of the container. _(default: undefined)_
 * - **--forge-list-item-indent** - The margin inline state when in the indented state. _(default: undefined)_
 * - **--forge-list-item-cursor** - The cursor when interactive. _(default: undefined)_
 * - **--forge-list-item-gap** - The gap between the slotted content. _(default: undefined)_
 * - **--forge-list-item-text-color** - The text color of the text. _(default: undefined)_
 * - **--forge-list-item-text-font-size** - The font size of the text. _(default: undefined)_
 * - **--forge-list-item-text-font-weight** - The font weight of the text. _(default: undefined)_
 * - **--forge-list-item-text-line-height** - The line height of the text. _(default: undefined)_
 * - **--forge-list-item-selected-color** - The color when in the selected state. _(default: undefined)_
 * - **--forge-list-item-selected-opacity** - The opacity of the background color when in the selected state. _(default: undefined)_
 * - **--forge-list-item-start-selected-color** - The color of the start content when in the selected state. _(default: undefined)_
 * - **--forge-list-item-end-selected-color** - The color of the end content when in the selected state. _(default: undefined)_
 * - **--forge-list-item-selected-text-color** - The color of the text when in the selected state. _(default: undefined)_
 * - **--forge-list-item-disabled-opacity** - The opacity of the element when in the disabled state. _(default: undefined)_
 * - **--forge-list-item-disabled-cursor** - The cursor when in the disabled state. _(default: undefined)_
 * - **--forge-list-item-one-line-height** - The line height when in the one/single line state. _(default: undefined)_
 * - **--forge-list-item-two-line-height** - The line height when in the two line state. _(default: undefined)_
 * - **--forge-list-item-three-line-height** - The line height when in the three line state. _(default: undefined)_
 * - **--forge-list-item-dense-one-line-height** - The line height when in the dense one/single line state. _(default: undefined)_
 * - **--forge-list-item-dense-two-line-height** - The line height when in the dense two line state. _(default: undefined)_
 * - **--forge-list-item-dense-three-line-height** - The line height when in the dense three line state. _(default: undefined)_
 * - **--forge-list-item-dense-font-size** - The font size when in the dense state. _(default: undefined)_
 * - **--forge-list-item-dense-indent** - The margin inline state when in the dense indented state. _(default: undefined)_
 * - **--forge-list-item-dense-gap** - The gap between the slotted content when in the dense state. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **text-container** - The container for the text content.
 * - **focus-indicator** - The forwarded focus indicator's internal indicator element.
 * - **state-layer** - The forwarded state layer's internal surface element.
 */
export const ListItemComponent: React.ForwardRefExoticComponent<ListItemComponentProps>;
