import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/table";
import { useEventListener, useProperties } from "./react-utils.js";

export const TableComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    select,
    multiselect,
    dense,
    roomy,
    filter,
    fixedHeaders,
    wrapContent,
    resizable,
    allowRowClick,
    multiColumnSort,
    selectKey,
    tooltipSelect,
    tooltipSelectAll,
    layoutType,
    minResizeWidth,
    selectCheckboxAlignment,
    data,
    columnConfigurations,
    rowCreated,
    cellCreated,
    selectAllTemplate,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-table-row-click", props.onForgeTableRowClick);
  useEventListener(ref, "forge-table-select", props.onForgeTableSelect);
  useEventListener(
    ref,
    "forge-table-select-double",
    props.onForgeTableSelectDouble
  );
  useEventListener(ref, "forge-table-select-all", props.onForgeTableSelectAll);
  useEventListener(ref, "forge-table-sort", props.onForgeTableSort);
  useEventListener(ref, "forge-table-filter", props.onForgeTableFilter);
  useEventListener(
    ref,
    "forge-table-initialized",
    props.onForgeTableInitialized
  );
  useEventListener(
    ref,
    "forge-table-column-resize",
    props.onForgeTableColumnResize
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "data", props.data);
  useProperties(ref, "columnConfigurations", props.columnConfigurations);
  useProperties(ref, "rowCreated", props.rowCreated);
  useProperties(ref, "cellCreated", props.cellCreated);
  useProperties(ref, "selectAllTemplate", props.selectAllTemplate);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    hideColumn: (columnIndex) => ref.current.hideColumn(columnIndex),
    showColumn: (columnIndex) => ref.current.showColumn(columnIndex),
    isColumnHidden: (columnIndex) => ref.current.isColumnHidden(columnIndex),
    getSelectedRows: () => ref.current.getSelectedRows(),
    selectRow: (data) => ref.current.selectRow(data),
    selectRows: (data, preserveExisting) =>
      ref.current.selectRows(data, preserveExisting),
    deselectRow: (data) => ref.current.deselectRow(data),
    deselectRows: (data) => ref.current.deselectRows(data),
    clearSelections: () => ref.current.clearSelections(),
    render: () => ref.current.render(),
    expandRow: (rowIndex, template) =>
      ref.current.expandRow(rowIndex, template),
    collapseRow: (rowIndex) => ref.current.collapseRow(rowIndex),
    isRowExpanded: (rowIndex) => ref.current.isRowExpanded(rowIndex),
    selectRowsByIndex: (indexes, preserveExisting) =>
      ref.current.selectRowsByIndex(indexes, preserveExisting),
    deselectRowsByIndex: (indexes) => ref.current.deselectRowsByIndex(indexes),
    isRowSelected: (rowData) => ref.current.isRowSelected(rowData),
  }));

  return React.createElement(
    "forge-table",
    {
      ref,
      ...filteredProps,
      "select-key": props.selectKey || props["select-key"],
      "tooltip-select": props.tooltipSelect || props["tooltip-select"],
      "tooltip-select-all":
        props.tooltipSelectAll || props["tooltip-select-all"],
      "layout-type": props.layoutType || props["layout-type"],
      "min-resize-width": props.minResizeWidth || props["min-resize-width"],
      "select-checkbox-alignment":
        props.selectCheckboxAlignment || props["select-checkbox-alignment"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      select: props.select ? "" : undefined,
      multiselect: props.multiselect ? "" : undefined,
      dense: props.dense ? "" : undefined,
      roomy: props.roomy ? "" : undefined,
      filter: props.filter ? "" : undefined,
      "fixed-headers": props.fixedHeaders ? "" : undefined,
      "wrap-content": props.wrapContent ? "" : undefined,
      resizable: props.resizable ? "" : undefined,
      "allow-row-click": props.allowRowClick ? "" : undefined,
      "multi-column-sort": props.multiColumnSort ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
