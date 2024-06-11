import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/paginator";
import { useEventListener, useProperties } from "./react-utils.js";

export const PaginatorComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    firstLast,
    first,
    disabled,
    alternative,
    pageIndex,
    pageSize,
    offset,
    total,
    pageSizeOptions,
    label,
    rangeLabelCallback,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(ref, "forge-paginator-change", props.onForgePaginatorChange);

  /** Properties - run whenever a property has changed */
  useProperties(ref, "rangeLabelCallback", props.rangeLabelCallback);

  /** Methods - uses `useImperativeHandle` hook to pass ref to component */
  useImperativeHandle(forwardedRef, () => ({
    focus: (options) => ref.current.focus(options),
  }));

  return React.createElement(
    "forge-paginator",
    {
      ref,
      ...filteredProps,
      "page-index": props.pageIndex || props["page-index"],
      "page-size": props.pageSize || props["page-size"],
      offset: props.offset,
      total: props.total,
      "page-size-options": props.pageSizeOptions || props["page-size-options"],
      label: props.label,
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "first-last": props.firstLast ? "" : undefined,
      first: props.first ? "" : undefined,
      disabled: props.disabled ? "" : undefined,
      alternative: props.alternative ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
