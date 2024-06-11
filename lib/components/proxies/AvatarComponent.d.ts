import { AvatarComponent as AvatarComponentElement } from "@tylertech/forge/esm/avatar";

export type { AvatarComponentElement };

export interface AvatarComponentProps
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
  /** The text to display in the avatar. */
  text?: AvatarComponentElement["text"];

  /** Controls the number of letters to display from the text. By default the text is split on spaces and the first character of each word is used. */
  letterCount?: AvatarComponentElement["letterCount"];

  /** The background image URL to use. */
  imageUrl?: AvatarComponentElement["imageUrl"];

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
 * Avatars represent an entity via text or image.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The default slot for avatar content if not provided via text/imageUrl.
 *
 * ### **CSS Properties:**
 *  - **--forge-avatar-background** - The background color of the avatar. _(default: undefined)_
 * - **--forge-avatar-shape** - The border radius of the avatar, defaults to 50%. _(default: undefined)_
 * - **--forge-avatar-color** - The text color of the avatar. _(default: undefined)_
 * - **--forge-avatar-size** - The height and width of the avatar. _(default: undefined)_
 * - **--forge-avatar-transition-duration** - The transition duration for animations. _(default: undefined)_
 * - **--forge-avatar-transition-timing** - The transition timing function for animations. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 */
export const AvatarComponent: React.ForwardRefExoticComponent<AvatarComponentProps>;
