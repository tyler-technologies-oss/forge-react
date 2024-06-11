import { DateRangePickerComponent as DateRangePickerComponentElement } from "@tylertech/forge/esm/date-range-picker";

export type { DateRangePickerComponentElement };

export interface DateRangePickerComponentProps
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
  /** Whether to allow an invalid date to be input. When true, the date picker will not clear out the value of the input if the date was invalid (i.e. could not be parsed). */
  allowInvalidDate?: boolean;

  /** Whether the date picker is disabled or not. */
  disabled?: boolean;

  /** Whether the input mask is applied or not. */
  masked?: boolean;

  /** Whether the calendar dropdown is open. */
  open?: boolean;

  /** Whether the clear button is visible in the popup. */
  showClear?: boolean;

  /** Whether the mask format is displayed in the input or not. Only applies if `masked` is `true`. */
  showMaskFormat?: boolean;

  /** Whether the today button is visible in the popup. */
  showToday?: boolean;

  /** The days of the week to disable from selection. */
  disabledDaysOfWeek?: DateRangePickerComponentElement["disabledDaysOfWeek"];

  /** The locale to use. */
  locale?: DateRangePickerComponentElement["locale"];

  /** The mask format that displayed in the input. */
  maskFormat?: DateRangePickerComponentElement["maskFormat"];

  /** The maximum date the calendar will allow. */
  max?: DateRangePickerComponentElement["max"];

  /** The minimum date the calendar will allow. */
  min?: DateRangePickerComponentElement["min"];

  /** The CSS classes that are applied to the popup element. */
  popupClasses?: DateRangePickerComponentElement["popupClasses"];

  /** The type for the `value` property and `forge-date-picker-change` event. */
  valueMode?: DateRangePickerComponentElement["valueMode"];

  /** The year range. */
  yearRange?: DateRangePickerComponentElement["yearRange"];

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

  /** Gets/sets the "from" date range value. */
  from?: DateRangePickerComponentElement["from"];

  /** Gets/sets the "to" date range value. */
  to?: DateRangePickerComponentElement["to"];

  /** Gets/sets the date range value. */
  value?: DateRangePickerComponentElement["value"];

  /** Gets/sets the disabled date range values. */
  disabledDates?: DateRangePickerComponentElement["disabledDates"];

  /** Gets/sets the callback used to parse date strings. */
  parseCallback?: DateRangePickerComponentElement["parseCallback"];

  /** Gets/sets the callback used to format date strings. */
  formatCallback?: DateRangePickerComponentElement["formatCallback"];

  /** Gets/sets the callback used to prepare the mask for the date input. */
  prepareMaskCallback?: DateRangePickerComponentElement["prepareMaskCallback"];

  /** Gets/sets the callback used to disable days in the calendar. */
  disableDayCallback?: DateRangePickerComponentElement["disableDayCallback"];

  /** Gets/sets the state of whether to notify input value changes. */
  notifyInputValueChanges?: DateRangePickerComponentElement["notifyInputValueChanges"];
}

/**
 *
 * ---
 *
 */
export const DateRangePickerComponent: React.ForwardRefExoticComponent<DateRangePickerComponentProps>;
