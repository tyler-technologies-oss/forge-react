import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import "@tylertech/forge/esm/calendar";
import { useEventListener, useProperties } from "./react-utils.js";

export const CalendarComponent = forwardRef((props, forwardedRef) => {
  const ref = useRef(null);
  const {
    allowSingleDateRange,
    clearButton,
    constrainToEnabled,
    fixedHeight,
    listYears,
    preventFocus,
    readonly,
    selectionFollowsMonth,
    showHeader,
    showOtherMonths,
    showToday,
    todayButton,
    firstDayOfWeek,
    locale,
    max,
    menuAnimation,
    min,
    mode,
    month,
    view,
    year,
    yearRange,
    activeDate,
    clearCallback,
    dateBuilder,
    dateSelectCallback,
    dayBuilder,
    disabledDateBuilder,
    disabledDates,
    disabledDaysOfWeek,
    eventBuilder,
    events,
    todayCallback,
    tooltipBuilder,
    value,
    weekendDays,
    ...filteredProps
  } = props;

  /** Event listeners - run once */
  useEventListener(
    ref,
    "forge-calendar-date-select",
    props.onForgeCalendarDateSelect
  );
  useEventListener(
    ref,
    "forge-calendar-focus-change",
    props.onForgeCalendarFocusChange
  );
  useEventListener(
    ref,
    "forge-calendar-month-change",
    props.onForgeCalendarMonthChange
  );
  useEventListener(
    ref,
    "forge-calendar-view-change",
    props.onForgeCalendarViewChange
  );

  /** Properties - run whenever a property has changed */
  useProperties(ref, "activeDate", props.activeDate);
  useProperties(ref, "clearCallback", props.clearCallback);
  useProperties(ref, "dateBuilder", props.dateBuilder);
  useProperties(ref, "dateSelectCallback", props.dateSelectCallback);
  useProperties(ref, "dayBuilder", props.dayBuilder);
  useProperties(ref, "disabledDateBuilder", props.disabledDateBuilder);
  useProperties(ref, "disabledDates", props.disabledDates);
  useProperties(ref, "disabledDaysOfWeek", props.disabledDaysOfWeek);
  useProperties(ref, "eventBuilder", props.eventBuilder);
  useProperties(ref, "events", props.events);
  useProperties(ref, "todayCallback", props.todayCallback);
  useProperties(ref, "tooltipBuilder", props.tooltipBuilder);
  useProperties(ref, "value", props.value);
  useProperties(ref, "weekendDays", props.weekendDays);

  useImperativeHandle(forwardedRef, () => ({}));

  return React.createElement(
    "forge-calendar",
    {
      ref,
      ...filteredProps,
      "first-day-of-week": props.firstDayOfWeek || props["first-day-of-week"],
      locale: props.locale,
      max: props.max,
      "menu-animation": props.menuAnimation || props["menu-animation"],
      min: props.min,
      mode: props.mode,
      month: props.month,
      view: props.view,
      year: props.year,
      "year-range": props.yearRange || props["year-range"],
      class: props.className,
      exportparts: props.exportparts,
      for: props.htmlFor,
      part: props.part,
      tabindex: props.tabIndex,
      "allow-single-date-range": props.allowSingleDateRange ? "" : undefined,
      "clear-button": props.clearButton ? "" : undefined,
      "constrain-to-enabled": props.constrainToEnabled ? "" : undefined,
      "fixed-height": props.fixedHeight ? "" : undefined,
      "list-years": props.listYears ? "" : undefined,
      "prevent-focus": props.preventFocus ? "" : undefined,
      readonly: props.readonly ? "" : undefined,
      "selection-follows-month": props.selectionFollowsMonth ? "" : undefined,
      "show-header": props.showHeader ? "" : undefined,
      "show-other-months": props.showOtherMonths ? "" : undefined,
      "show-today": props.showToday ? "" : undefined,
      "today-button": props.todayButton ? "" : undefined,
      style: { ...props.style },
    },
    props.children
  );
});
