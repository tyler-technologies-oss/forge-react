import { PaginatorComponent as PaginatorComponentElement } from "@tylertech/forge/esm/paginator";

export type { PaginatorComponentElement };

export interface PaginatorComponentProps
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
  /** Whether to show the first page and last page buttons. */
  firstLast?: boolean;

  /** Whether to show the first page button. Default is false. */
  first?: boolean;

  /** Whether the paginator is disabled. */
  disabled?: boolean;

  /** Whether to use the alternative range label slot. */
  alternative?: boolean;

  /** The zero-based page index. */
  pageIndex?: PaginatorComponentElement["pageIndex"];

  /** Number of items to display on a page. */
  pageSize?: PaginatorComponentElement["pageSize"];

  /** Sets page index by providing the number of items to skip. The getter for this property returns the number of items to skip. */
  offset?: PaginatorComponentElement["offset"];

  /** The total number of items to be paginated. */
  total?: PaginatorComponentElement["total"];

  /** The set of provided page size options to display to the user. */
  pageSizeOptions?: PaginatorComponentElement["pageSizeOptions"];

  /** A label for the paginator. */
  label?: PaginatorComponentElement["label"];

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

  /** A callback function to build the range label dynamically. */
  rangeLabelCallback?: PaginatorComponentElement["rangeLabelCallback"];

  /** Dispatched when the paginator state changes. */
  onForgePaginatorChange?: (
    event: CustomEvent<CustomEvent<IPaginatorChangeEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-paginator-change** - Dispatched when the paginator state changes.
 *
 * ### **Methods:**
 *  - **focus(options: _FocusOptions_): _void_** - Sets focus to the first focusable element within the paginator.
 */
export const PaginatorComponent: React.ForwardRefExoticComponent<PaginatorComponentProps>;
