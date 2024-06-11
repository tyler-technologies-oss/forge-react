import { AppBarNotificationButtonComponent as AppBarNotificationButtonComponentElement } from "@tylertech/forge/esm/app-bar-notification-button";

export type { AppBarNotificationButtonComponentElement };

export interface AppBarNotificationButtonComponentProps
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
  /** Whether to display the dot variant of the badge or not. */
  dot?: boolean;

  /** Whether to display the badge or not. */
  showBadge?: boolean;

  /** The number to display in the badge. */
  count?: AppBarNotificationButtonComponentElement["count"];

  /** The theme to apply to the badge. */
  theme?: AppBarNotificationButtonComponentElement["theme"];

  /** The name of an alternative icon to display. */
  icon?: AppBarNotificationButtonComponentElement["icon"];

  /** The aria-label to apply to the button. */
  ariaLabel?: AppBarNotificationButtonComponentElement["ariaLabel"];

  /** The id of an element to use as the aria-labelledby attribute. */
  ariaLabelledby?: AppBarNotificationButtonComponentElement["ariaLabelledby"];

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
}

/**
 *
 * ---
 *
 */
export const AppBarNotificationButtonComponent: React.ForwardRefExoticComponent<AppBarNotificationButtonComponentProps>;
