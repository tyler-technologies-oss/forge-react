import { TimePickerComponent as TimePickerComponentElement } from "@tylertech/forge/esm/time-picker";

export type { TimePickerComponentElement };

export interface TimePickerComponentProps
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

  /** The current value of the time picker. */
  value?: TimePickerComponentElement["value"];

  /** Whether or not the time picker is open. */
  open?: TimePickerComponentElement["open"];

  /** Whether or not to allow seconds in the time picker. */
  allowSeconds?: TimePickerComponentElement["allowSeconds"];

  /** Whether or not the time picker input should be masked. */
  masked?: TimePickerComponentElement["masked"];

  /** Whether or not to show the mask format in the input. */
  showMaskFormat?: TimePickerComponentElement["showMaskFormat"];

  /** Whether or not to use 24-hour time. */
  use24HourTime?: TimePickerComponentElement["use24HourTime"];

  /** Whether or not to allow invalid times. */
  allowInvalidTime?: TimePickerComponentElement["allowInvalidTime"];

  /** The minimum time that can be selected. */
  min?: TimePickerComponentElement["min"];

  /** The maximum time that can be selected. */
  max?: TimePickerComponentElement["max"];

  /** An array of times that cannot be selected. */
  restrictedTimes?: TimePickerComponentElement["restrictedTimes"];

  /** The time to start the time picker at. */
  startTime?: TimePickerComponentElement["startTime"];

  /** The step interval for the time picker. */
  step?: TimePickerComponentElement["step"];

  /** Whether or not to allow manual input of the time. */
  allowInput?: TimePickerComponentElement["allowInput"];

  /** Whether or not to show a "Now" button. */
  showNow?: TimePickerComponentElement["showNow"];

  /** Whether or not to display hour options in dropdown. */
  showHourOptions?: TimePickerComponentElement["showHourOptions"];

  /** An array of custom time picker options. */
  customOptions?: TimePickerComponentElement["customOptions"];

  /** A callback function to validate the time. */
  validationCallback?: TimePickerComponentElement["validationCallback"];

  /** A callback function to parse the time. */
  parseCallback?: TimePickerComponentElement["parseCallback"];

  /** A callback function to format the time. */
  formatCallback?: TimePickerComponentElement["formatCallback"];

  /** A callback function to coerce the time. */
  coercionCallback?: TimePickerComponentElement["coercionCallback"];

  /** A callback function to prepare the mask. */
  prepareMaskCallback?: TimePickerComponentElement["prepareMaskCallback"];

  /** Whether or not the time picker is disabled. */
  disabled?: TimePickerComponentElement["disabled"];

  /** The classes to apply to the time picker popup. */
  popupClasses?: TimePickerComponentElement["popupClasses"];

  /** Whether or not to allow the time picker to be a dropdown. */
  allowDropdown?: TimePickerComponentElement["allowDropdown"];

  /** The target element to attach the popup to. */
  popupTarget?: TimePickerComponentElement["popupTarget"];
}

/**
 *
 * ---
 *
 */
export const TimePickerComponent: React.ForwardRefExoticComponent<TimePickerComponentProps>;
