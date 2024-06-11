import { CalendarComponent as CalendarComponentElement } from "@tylertech/forge/esm/calendar";

export type { CalendarComponentElement };

export interface CalendarComponentProps
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
  /** Whether to allow a single date range to be selected. */
  allowSingleDateRange?: boolean;

  /** Whether to show a button to clear the selected date(s). */
  clearButton?: boolean;

  /** Whether to constrain the selected date(s) to the enabled dates. */
  constrainToEnabled?: boolean;

  /** Whether to fix the height of the calendar. */
  fixedHeight?: boolean;

  /** Whether to list the years in the year view. */
  listYears?: boolean;

  /** Whether to prevent the calendar from taking focus. */
  preventFocus?: boolean;

  /** Whether the calendar is readonly. */
  readonly?: boolean;

  /** Whether the selection follows the month. */
  selectionFollowsMonth?: boolean;

  /** Whether to show the header. */
  showHeader?: boolean;

  /** Whether to show days from other months. */
  showOtherMonths?: boolean;

  /** Whether to show the today button. */
  showToday?: boolean;

  /** Whether to show a button to select today. */
  todayButton?: boolean;

  /** The first day of the week. */
  firstDayOfWeek?: CalendarComponentElement["firstDayOfWeek"];

  /** The locale to use for formatting dates. */
  locale?: CalendarComponentElement["locale"];

  /** The maximum date that can be selected. */
  max?: CalendarComponentElement["max"];

  /** The animation to use for the menu. */
  menuAnimation?: CalendarComponentElement["menuAnimation"];

  /** The minimum date that can be selected. */
  min?: CalendarComponentElement["min"];

  /** The mode of the calendar. */
  mode?: CalendarComponentElement["mode"];

  /** The month to display. */
  month?: CalendarComponentElement["month"];

  /** The view of the calendar. */
  view?: CalendarComponentElement["view"];

  /** The year to display. */
  year?: CalendarComponentElement["year"];

  /** The range of years to display. */
  yearRange?: CalendarComponentElement["yearRange"];

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

  /** The currently active date in the calendar. */
  activeDate?: CalendarComponentElement["activeDate"];

  /** Callback function to call when the clear button is clicked. */
  clearCallback?: CalendarComponentElement["clearCallback"];

  /** Function to build the date content. */
  dateBuilder?: CalendarComponentElement["dateBuilder"];

  /** Callback function to call when a date is selected. */
  dateSelectCallback?: CalendarComponentElement["dateSelectCallback"];

  /** Function to build the day content. */
  dayBuilder?: CalendarComponentElement["dayBuilder"];

  /** Function to determine if a date is disabled. */
  disabledDateBuilder?: CalendarComponentElement["disabledDateBuilder"];

  /** Dates that are disabled from being selected. */
  disabledDates?: CalendarComponentElement["disabledDates"];

  /** Days of the week that are disabled from being selected. */
  disabledDaysOfWeek?: CalendarComponentElement["disabledDaysOfWeek"];

  /** Function to build the event content. */
  eventBuilder?: CalendarComponentElement["eventBuilder"];

  /** Events to display on the calendar. */
  events?: CalendarComponentElement["events"];

  /** Callback function to call when the today button is clicked. */
  todayCallback?: CalendarComponentElement["todayCallback"];

  /** Function to build the tooltip content. */
  tooltipBuilder?: CalendarComponentElement["tooltipBuilder"];

  /** The selected date(s). */
  value?: CalendarComponentElement["value"];

  /** The days of the week that are considered weekends. */
  weekendDays?: CalendarComponentElement["weekendDays"];

  /** Event fired when a date is selected. */
  onForgeCalendarDateSelect?: (
    event: CustomEvent<CustomEvent<ICalendarDateSelectEventData>>
  ) => void;

  /** Event fired when the focus changes. */
  onForgeCalendarFocusChange?: (
    event: CustomEvent<CustomEvent<ICalendarFocusChangeEventData>>
  ) => void;

  /** Event fired when the month changes. */
  onForgeCalendarMonthChange?: (
    event: CustomEvent<CustomEvent<ICalendarMonthChangeEventData>>
  ) => void;

  /** Event fired when the view changes. */
  onForgeCalendarViewChange?: (
    event: CustomEvent<CustomEvent<CalendarView>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-calendar-date-select** - Event fired when a date is selected.
 * - **forge-calendar-focus-change** - Event fired when the focus changes.
 * - **forge-calendar-month-change** - Event fired when the month changes.
 * - **forge-calendar-view-change** - Event fired when the view changes.
 */
export const CalendarComponent: React.ForwardRefExoticComponent<CalendarComponentProps>;
