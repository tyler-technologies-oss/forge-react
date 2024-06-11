import { MenuComponent as MenuComponentElement } from "@tylertech/forge/esm/menu";

export type { MenuComponentElement };

export interface MenuComponentProps
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

  /** Gets/sets the open state. */
  open?: MenuComponentElement["open"];

  /** Gets/sets the array of options to display in the menu. */
  options?: MenuComponentElement["options"];

  /** Gets/sets the selected option to the index. Does not support cascading menus. */
  selectedIndex?: MenuComponentElement["selectedIndex"];

  /** Gets/sets the value of the option to select. */
  selectedValue?: MenuComponentElement["selectedValue"];

  /** Gets/sets the menu placement (default is bottom-left). */
  placement?: MenuComponentElement["placement"];

  /** Gets/sets the fallback menu placement for overriding the default of any side. */
  fallbackPlacements?: MenuComponentElement["fallbackPlacements"];

  /** Gets/sets dense state of the list options used in the menu popup. */
  dense?: MenuComponentElement["dense"];

  /** Gets/sets the class name to use for option icons. */
  iconClass?: MenuComponentElement["iconClass"];

  /** Gets/sets whether selection of menu items is persisted. */
  persistSelection?: MenuComponentElement["persistSelection"];

  /** Gets/sets the mode that this menu is using. */
  mode?: MenuComponentElement["mode"];

  /** Sets the position adjustment on the internal popup element. */
  popupOffset?: MenuComponentElement["popupOffset"];

  /** Sets the callback that will be executed for each option in the dropdown for producing custom option templates. */
  optionBuilder?: MenuComponentElement["optionBuilder"];

  /** Gets the currently active popup element when the dropdown is open. */
  popupElement?: MenuComponentElement["popupElement"];

  /** Gets/sets the list of classes to apply to the popup element. */
  popupClasses?: MenuComponentElement["popupClasses"];

  /** Gets/sets the callback function for generating header content within the popup. */
  popupHeaderBuilder?: MenuComponentElement["popupHeaderBuilder"];

  /** Gets/sets the callback function for generating header content within the popup. */
  popupFooterBuilder?: MenuComponentElement["popupFooterBuilder"];

  /** Gets/sets whether the popup width is synchronized with the popup target width. */
  syncPopupWidth?: MenuComponentElement["syncPopupWidth"];

  /** Gets/sets the maximum number of options to display in the dropdown. */
  optionLimit?: MenuComponentElement["optionLimit"];

  /** Controls the observation of scroll events on the dropdown. */
  observeScroll?: MenuComponentElement["observeScroll"];

  /** The number of pixels from the bottom to trigger the scroll bottom event. Only applicable if `observeScroll` is true. */
  observeScrollThreshold?: MenuComponentElement["observeScrollThreshold"];

  /** Gets/sets whether the popup width will be constrained to a max width of the viewport width (default: `100vw`). */
  constrainPopupWidth?: MenuComponentElement["constrainPopupWidth"];

  /** Gets/sets whether the options will wrap their text or not.
This only applies if `constrainPopupWidth` is `true`, if there is an explicit width set via CSS. */
  wrapOptionText?: MenuComponentElement["wrapOptionText"];
}

/**
 *
 * ---
 *
 *
 * ### **Methods:**
 *  - **propagateKeyEvent(evt: _KeyboardEvent_): _void_** - Force propagates the key event from another element this component.
 */
export const MenuComponent: React.ForwardRefExoticComponent<MenuComponentProps>;
