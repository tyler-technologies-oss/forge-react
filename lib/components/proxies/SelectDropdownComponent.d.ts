import { SelectDropdownComponent as SelectDropdownComponentElement } from "@tylertech/forge/esm/select-dropdown";

export type { SelectDropdownComponentElement };

export interface SelectDropdownComponentProps
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
  /** Gets/sets the multiple select state. */
  multiple?: boolean;

  /** Gets the open state of the dropdown. */
  open?: boolean;

  /** Gets/sets the value. */
  value?: SelectDropdownComponentElement["value"];

  /** Gets/sets the selected index. */
  selectedIndex?: SelectDropdownComponentElement["selectedIndex"];

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

  /** Sets the target element CSS selector */
  target?: SelectDropdownComponentElement["target"];

  /** Sets the selected text element CSS selector */
  selectedTextTarget?: SelectDropdownComponentElement["selectedTextTarget"];

  /** Controls whether the selected text is synchronized to the target elements' text content. Default is false. */
  syncSelectedText?: SelectDropdownComponentElement["syncSelectedText"];

  /** Gets/sets the available options. */
  options?: SelectDropdownComponentElement["options"];

  /** Sets the option builder callback that will be executed when building the option list in the dropdown. */
  optionBuilder?: SelectDropdownComponentElement["optionBuilder"];

  /** Sets the selected text builder callback that will be executed when getting the selected text to display in the field. */
  selectedTextBuilder?: SelectDropdownComponentElement["selectedTextBuilder"];

  /** Sets the callback to be executed when the user selects a value. */
  beforeValueChange?: SelectDropdownComponentElement["beforeValueChange"];

  /** Gets the popup element (when the dropdown is open). */
  popupElement?: SelectDropdownComponentElement["popupElement"];

  /** Gets/sets the list of classes to apply to the popup element. */
  popupClasses?: SelectDropdownComponentElement["popupClasses"];

  /** Gets/sets the callback function for generating header content within the popup. */
  popupHeaderBuilder?: SelectDropdownComponentElement["popupHeaderBuilder"];

  /** Gets/sets the callback function for generating header content within the popup. */
  popupFooterBuilder?: SelectDropdownComponentElement["popupFooterBuilder"];

  /** Gets/sets whether the popup width is synchronized with the popup target width. */
  syncPopupWidth?: SelectDropdownComponentElement["syncPopupWidth"];

  /** Gets/sets the maximum number of options to display in the dropdown. */
  optionLimit?: SelectDropdownComponentElement["optionLimit"];

  /** Controls the observation of scroll events on the dropdown. */
  observeScroll?: SelectDropdownComponentElement["observeScroll"];

  /** The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if `observeScroll` is true. */
  observeScrollThreshold?: SelectDropdownComponentElement["observeScrollThreshold"];

  /** Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: `100vw`). */
  constrainPopupWidth?: SelectDropdownComponentElement["constrainPopupWidth"];

  /** Gets/sets whether the options will wrap their text or not.
This only applies if `constrainPopupWidth` is `true`, if there is an explicit width set via CSS. */
  wrapOptionText?: SelectDropdownComponentElement["wrapOptionText"];
}

/**
 *
 * ---
 *
 *
 * ### **Methods:**
 *  - **appendOptions(options: _ISelectOption[] | ISelectOptionGroup[]_): _void_** - Dynamically appends options to the dropdown while it's open.
 * - **selectAll(): _void_** - Selects all options.
 * - **deselectAll(): _void_** - Deselects all options.
 */
export const SelectDropdownComponent: React.ForwardRefExoticComponent<SelectDropdownComponentProps>;
