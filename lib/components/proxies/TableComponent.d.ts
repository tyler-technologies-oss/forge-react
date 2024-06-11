import { TableComponent as TableComponentElement } from "@tylertech/forge/esm/table";

export type { TableComponentElement };

export interface TableComponentProps
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
  /** Controls the visibility of the select column. */
  select?: boolean;

  /** Controls the visibility of the select all checkbox (only applied when `select` is `true`). */
  multiselect?: boolean;

  /** Controls whether the table is dense or not. */
  dense?: boolean;

  /** Controls whether the table is roomy or not. */
  roomy?: boolean;

  /** Controls whether the table shows its column filter row. */
  filter?: boolean;

  /** Controls whether the table applies fixed headers when in scroll containers. */
  fixedHeaders?: boolean;

  /** Controls whether the content in each cell wraps or not (true by default). */
  wrapContent?: boolean;

  /** Controls whether the columns are resizable or not. */
  resizable?: boolean;

  /** Gets/sets whether the rows respond to (and emit) row click events. */
  allowRowClick?: boolean;

  /** Gets/sets whether the table supports multi-column sorting. */
  multiColumnSort?: boolean;

  /** The row key for matching data to selections. */
  selectKey?: TableComponentElement["selectKey"];

  /** The tooltip to display when hovering over the select column. */
  tooltipSelect?: TableComponentElement["tooltipSelect"];

  /** The tooltip to display when hovering over the select all checkbox. */
  tooltipSelectAll?: TableComponentElement["tooltipSelectAll"];

  /** Controls the table layout algorithm. */
  layoutType?: TableComponentElement["layoutType"];

  /** Gets/sets the minimum width that a column can be resized to by the user dragging the resize handle. */
  minResizeWidth?: TableComponentElement["minResizeWidth"];

  /** Controls the alignment of the select checkbox. */
  selectCheckboxAlignment?: TableComponentElement["selectCheckboxAlignment"];

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

  /** The data to be display in the table body. */
  data?: TableComponentElement["data"];

  /** The column configuration options. */
  columnConfigurations?: TableComponentElement["columnConfigurations"];

  /** Callback for when a row is clicked. This allows for custom logic to run after each `<tr>` is created. */
  rowCreated?: TableComponentElement["rowCreated"];

  /** Callback for when a cell is clicked. This allows for custom logic to run after each `<td>` is created. */
  cellCreated?: TableComponentElement["cellCreated"];

  /** The template to use for the select all checkbox in the header. */
  selectAllTemplate?: TableComponentElement["selectAllTemplate"];

  /** Dispatched when a row is clicked. Only applies when `allow-row-click` is specified. */
  onForgeTableRowClick?: (
    event: CustomEvent<CustomEvent<ITableRowClickEventData>>
  ) => void;

  /** Dispatched when a row is selected. Only applies when `select` is specified. */
  onForgeTableSelect?: (
    event: CustomEvent<CustomEvent<ITableSelectEventData>>
  ) => void;

  /** Dispatched when a row is double-clicked. Only applies when `select` is specified. */
  onForgeTableSelectDouble?: (
    event: CustomEvent<CustomEvent<ITableSelectDoubleEventData>>
  ) => void;

  /** Dispatched when the select all checkbox is toggled. Only applies when `select` and `multiselect` is specified. */
  onForgeTableSelectAll?: (
    event: CustomEvent<CustomEvent<ITableSelectAllEventData>>
  ) => void;

  /** Dispatched when a column is sorted. */
  onForgeTableSort?: (
    event: CustomEvent<
      CustomEvent<ITableSortEventData | ITableSortMultipleEventData>
    >
  ) => void;

  /** Dispatched when a column is filtered. Only applies when `filter` is specified. */
  onForgeTableFilter?: (
    event: CustomEvent<CustomEvent<ITableFilterEventData>>
  ) => void;

  /** Dispatched when the table is initialized in the DOM for the first time. */
  onForgeTableInitialized?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Dispatched when a column is resized. */
  onForgeTableColumnResize?: (
    event: CustomEvent<CustomEvent<ITableColumnResizeEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-table-row-click** - Dispatched when a row is clicked. Only applies when `allow-row-click` is specified.
 * - **forge-table-select** - Dispatched when a row is selected. Only applies when `select` is specified.
 * - **forge-table-select-double** - Dispatched when a row is double-clicked. Only applies when `select` is specified.
 * - **forge-table-select-all** - Dispatched when the select all checkbox is toggled. Only applies when `select` and `multiselect` is specified.
 * - **forge-table-sort** - Dispatched when a column is sorted.
 * - **forge-table-filter** - Dispatched when a column is filtered. Only applies when `filter` is specified.
 * - **forge-table-initialized** - Dispatched when the table is initialized in the DOM for the first time.
 * - **forge-table-column-resize** - Dispatched when a column is resized.
 *
 * ### **Methods:**
 *  - **hideColumn(columnIndex: _number_): _void_** - Hides a column from the table.
 * - **showColumn(columnIndex: _number_): _void_** - Shows a hidden column in th table.
 * - **isColumnHidden(columnIndex: _number_): _boolean_** - Determines if a column at the given index is hidden or not.
 * - **getSelectedRows(): _any[]_** - Returns the selected row instances.
 * - **selectRow(data: _any_): _void_** - Selects a row in the table. Only applicable if `select` is true.
 * - **selectRows(data: _any[]_, preserveExisting: _boolean_): _void_** - Selects one or more rows in the table. Only applicable if `select` is true.
 * - **deselectRow(data: _any_): _void_** - Deselects a single row in the table.
 * - **deselectRows(data: _any[]_): _void_** - Deselects one or more rows in the table.
 * - **clearSelections(): _void_** - Clears all selected table rows.
 * - **render(): _void_** - Forces the table to re-render based on its current configuration.
 * - **expandRow(rowIndex: _any_, template: _TableViewTemplate_): _Promise<void>_** - Expands a collapsed row.
 * - **collapseRow(rowIndex: _number_): _Promise<void>_** - Collapses an expanded row.
 * - **isRowExpanded(rowIndex: _number_): _boolean_** - Checks if a row is expanded or not.
 * - **selectRowsByIndex(indexes: _number | number[]_, preserveExisting: _boolean_): _void_** - Selects a rows by an index or array of indexes.
 * - **deselectRowsByIndex(indexes: _number | number[]_): _void_** - Deselects a rows by an index or array of indexes.
 * - **isRowSelected(rowData: _{ [key: string]: any }_): _boolean_** - Checks if a row is selected or not.
 */
export const TableComponent: React.ForwardRefExoticComponent<TableComponentProps>;
