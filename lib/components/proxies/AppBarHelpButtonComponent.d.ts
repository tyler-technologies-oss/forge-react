import { AppBarHelpButtonComponent as AppBarHelpButtonComponentElement } from "@tylertech/forge/esm/app-bar-help-button";

export type { AppBarHelpButtonComponentElement };

export interface AppBarHelpButtonComponentProps
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
  /** The name of an alternative icon to display. */
  icon?: AppBarHelpButtonComponentElement["icon"];

  /** The aria-label to apply to the button. */
  ariaLabel?: AppBarHelpButtonComponentElement["ariaLabel"];

  /** The id of an element to use as the aria-labelledby attribute. */
  ariaLabelledby?: AppBarHelpButtonComponentElement["ariaLabelledby"];

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

  /** The menu options to display when the button is clicked */
  options?: AppBarHelpButtonComponentElement["options"];

  /** Bubbles up the menu select from the internal menu component. */
  onForgeMenuSelect?: (
    event: CustomEvent<CustomEvent<IMenuSelectEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-menu-select** - Bubbles up the menu select from the internal menu component.
 */
export const AppBarHelpButtonComponent: React.ForwardRefExoticComponent<AppBarHelpButtonComponentProps>;
