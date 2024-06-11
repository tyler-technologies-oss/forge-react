import {
  AppBarProfileButtonComponent as AppBarProfileButtonComponentElement,
  CustomEvent,
} from "@tylertech/forge/esm/app-bar-profile-button";

export type { AppBarProfileButtonComponentElement, CustomEvent };

export interface AppBarProfileButtonComponentProps
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
  /** Whether to display the sign out button or not. Defaults to `true`. */
  signOutButton?: boolean;

  /** Whether to display the profile button or not. */
  profileButton?: boolean;

  /** Whether the profile card is open or not. */
  open?: boolean;

  /** The url of the avatar image to display. */
  avatarImageUrl?: AppBarProfileButtonComponentElement["avatarImageUrl"];

  /** The number of letters to display in the avatar. */
  avatarLetterCount?: AppBarProfileButtonComponentElement["avatarLetterCount"];

  /** The text to display in the avatar. */
  avatarText?: AppBarProfileButtonComponentElement["avatarText"];

  /** The name of an alternative icon to display in the avatar. */
  avatarIcon?: AppBarProfileButtonComponentElement["avatarIcon"];

  /** The full name. */
  fullName?: AppBarProfileButtonComponentElement["fullName"];

  /** The email address. */
  email?: AppBarProfileButtonComponentElement["email"];

  /** The text to display in the sign out button. */
  signOutButtonText?: AppBarProfileButtonComponentElement["signOutButtonText"];

  /** The text to display in the profile button. */
  profileButtonText?: AppBarProfileButtonComponentElement["profileButtonText"];

  /** The aria-label to apply to the button. */
  ariaLabel?: AppBarProfileButtonComponentElement["ariaLabel"];

  /** The id of an element to use as the aria-labelledby attribute. */
  ariaLabelledby?: AppBarProfileButtonComponentElement["ariaLabelledby"];

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

  /** The popup element when open. */
  popupElement?: AppBarProfileButtonComponentElement["popupElement"];

  /** Sets the profile card builder callback that will be used to add extra content to the profile card. */
  profileCardBuilder?: AppBarProfileButtonComponentElement["profileCardBuilder"];

  /** Fires when the sign out button is clicked. */
  onForgeProfileCardSignOut?: (event: CustomEvent) => void;

  /** Fires when the profile button is clicked. */
  onForgeProfileCardProfile?: (event: CustomEvent) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-profile-card-sign-out** - Fires when the sign out button is clicked.
 * - **forge-profile-card-profile** - Fires when the profile button is clicked.
 */
export const AppBarProfileButtonComponent: React.ForwardRefExoticComponent<AppBarProfileButtonComponentProps>;
