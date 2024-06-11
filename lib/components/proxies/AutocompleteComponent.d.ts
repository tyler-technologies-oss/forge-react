import { AutocompleteComponent as AutocompleteComponentElement } from "@tylertech/forge/esm/autocomplete";

export type { AutocompleteComponentElement };

export interface AutocompleteComponentProps
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

  /** Gets/sets the interaction mode. */
  mode?: AutocompleteComponentElement["mode"];

  /** Gets/sets the multi-select state. */
  multiple?: AutocompleteComponentElement["multiple"];

  /** Gets/sets the value. */
  value?: AutocompleteComponentElement["value"];

  /** Gets/sets the debounce delay (milliseconds) for keyboard events. */
  debounce?: AutocompleteComponentElement["debounce"];

  /** Gets/sets filter on focus settings which controls whether the dropdown displays automatically when focused. */
  filterOnFocus?: AutocompleteComponentElement["filterOnFocus"];

  /** Gets/sets whether the first option in the dropdown will be focused automatically when opened or not. */
  filterFocusFirst?: AutocompleteComponentElement["filterFocusFirst"];

  /** Controls whether unmatched text entered by the user will stay visible an option in the dropdown is not found. */
  allowUnmatched?: AutocompleteComponentElement["allowUnmatched"];

  /** Gets/sets the selector that will be used to find an element to attach the popup to. Defaults to the input element. */
  popupTarget?: AutocompleteComponentElement["popupTarget"];

  /** Gets/sets the filter text.

Setting the filter text only applies when allowUnmatched is enabled. */
  filterText?: AutocompleteComponentElement["filterText"];

  /** Sets the option builder callback that will be executed when building the option list in the dropdown. */
  optionBuilder?: AutocompleteComponentElement["optionBuilder"];

  /** Sets the filter callback that will be executed when fetching options for the autocomplete dropdown. */
  filter?: AutocompleteComponentElement["filter"];

  /** Sets the selected text builder callback that will be executed when getting the selected text. */
  selectedTextBuilder?: AutocompleteComponentElement["selectedTextBuilder"];

  /** Controls the open state of the dropdown. */
  open?: AutocompleteComponentElement["open"];

  /** Gets/sets the property key to match the value to an option. */
  matchKey?: AutocompleteComponentElement["matchKey"];

  /** Returns whether the component has been initialized or not yet. */
  isInitialized?: AutocompleteComponentElement["isInitialized"];

  /** Gets the currently active popup element when the dropdown is open. */
  popupElement?: AutocompleteComponentElement["popupElement"];

  /** Sets the callback to be executed when the user selects an option, before the UI is updated to allow for validation. */
  beforeValueChange?: AutocompleteComponentElement["beforeValueChange"];

  /** Gets/sets the list of classes to apply to the popup element. */
  popupClasses?: AutocompleteComponentElement["popupClasses"];

  /** Gets/sets the callback function for generating header content within the popup. */
  popupHeaderBuilder?: AutocompleteComponentElement["popupHeaderBuilder"];

  /** Gets/sets the callback function for generating header content within the popup. */
  popupFooterBuilder?: AutocompleteComponentElement["popupFooterBuilder"];

  /** Gets/sets whether the popup width is synchronized with the popup target width. */
  syncPopupWidth?: AutocompleteComponentElement["syncPopupWidth"];

  /** Gets/sets the maximum number of options to display in the dropdown. */
  optionLimit?: AutocompleteComponentElement["optionLimit"];

  /** Controls the observation of scroll events on the dropdown. */
  observeScroll?: AutocompleteComponentElement["observeScroll"];

  /** The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if `observeScroll` is true. */
  observeScrollThreshold?: AutocompleteComponentElement["observeScrollThreshold"];

  /** Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: `100vw`). */
  constrainPopupWidth?: AutocompleteComponentElement["constrainPopupWidth"];

  /** Gets/sets whether the options will wrap their text or not.
This only applies if `constrainPopupWidth` is `true`, if there is an explicit width set via CSS. */
  wrapOptionText?: AutocompleteComponentElement["wrapOptionText"];
}

/**
 *
 * ---
 *
 *
 * ### **Methods:**
 *  - **appendOptions(options: _IAutocompleteOption[] | IAutocompleteOptionGroup[]_): _void_** - Adds options to the dropdown while it is open. Has no effect if the dropdown is closed.
 * - **openDropdown(): _void_** - Opens the dropdown.
 * - **closeDropdown(): _void_** - Closes the dropdown.
 * - **forceFilter(opts: _IAutocompleteForceFilterOptions_): _void_** - Forces the filter callback to be executed to update the current selection state with new options.
 */
export const AutocompleteComponent: React.ForwardRefExoticComponent<AutocompleteComponentProps>;
