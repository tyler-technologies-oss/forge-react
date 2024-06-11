import { DatePickerComponent as DatePickerComponentElement } from "@tylertech/forge/esm/date-picker";

export type { DatePickerComponentElement };

export interface DatePickerComponentProps
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

  /** The value of the date picker. */
  value?: DatePickerComponentElement["value"];

  /** The days of the week to disable from selection. */
  disabledDaysOfWeek?: DatePickerComponentElement["disabledDaysOfWeek"];

  /** The locale to use. */
  locale?: DatePickerComponentElement["locale"];

  /** The mask format that displayed in the input. */
  maskFormat?: DatePickerComponentElement["maskFormat"];

  /** The maximum date the calendar will allow. */
  max?: DatePickerComponentElement["max"];

  /** The minimum date the calendar will allow. */
  min?: DatePickerComponentElement["min"];

  /** The CSS classes that are applied to the popup element. */
  popupClasses?: DatePickerComponentElement["popupClasses"];

  /** The type for the `value` property and `forge-date-picker-change` event. */
  valueMode?: DatePickerComponentElement["valueMode"];

  /** The year range. */
  yearRange?: DatePickerComponentElement["yearRange"];

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

  /** The dates that are restricted from being selected. */
  disabledDates?: DatePickerComponentElement["disabledDates"];

  /** Whether the native input will be notified of value changes via the `input` and `change` events. */
  notifyInputValueChanges?: DatePickerComponentElement["notifyInputValueChanges"];

  /** The callback to use for parsing a date value string to a `Date` object. */
  parseCallback?: DatePickerComponentElement["parseCallback"];

  /** The callback to use for formatting `Date` value to a custom string format. */
  formatCallback?: DatePickerComponentElement["formatCallback"];

  /** The callback to use when altering default mask entry. */
  prepareMaskCallback?: DatePickerComponentElement["prepareMaskCallback"];

  /** The callback to use for testing whether a specific date should be disabled or not. */
  disableDayCallback?: DatePickerComponentElement["disableDayCallback"];

  /** Emits when the value of the date picker changes. */
  onForgeDatePickerChange?: (
    event: CustomEvent<CustomEvent<Date | string | null>>
  ) => void;

  /** Emits when the date picker opens. */
  onForgeDatePickerOpen?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Emits when the date picker closes. */
  onForgeDatePickerClose?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Emits when the user inputs a value into the date picker. */
  onForgeDatePickerInput?: (event: CustomEvent<CustomEvent<string>>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-date-picker-change** - Emits when the value of the date picker changes.
 * - **forge-date-picker-open** - Emits when the date picker opens.
 * - **forge-date-picker-close** - Emits when the date picker closes.
 * - **forge-date-picker-input** - Emits when the user inputs a value into the date picker.
 */
export const DatePickerComponent: React.ForwardRefExoticComponent<DatePickerComponentProps>;
