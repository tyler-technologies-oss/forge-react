import { InlineMessageComponent as InlineMessageComponentElement } from "@tylertech/forge/esm/inline-message";

export type { InlineMessageComponentElement };

export interface InlineMessageComponentProps
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
  /** The theme to apply. Defaults to `"info"`. */
  theme?: InlineMessageComponentElement["theme"];

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
 * Inline messages are used to provide feedback to the user about a specific action or state.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The message text.
 * - **title** - The title of the inline message.
 * - **icon** - The icon to display.
 *
 * ### **CSS Properties:**
 *  - **--forge-inline-message-background** - The background color. _(default: undefined)_
 * - **--forge-inline-message-color** - The text color. _(default: undefined)_
 * - **--forge-inline-message-shape** - The shape (border) radius. _(default: undefined)_
 * - **--forge-inline-message-padding** - The padding around the content. _(default: undefined)_
 * - **--forge-inline-message-padding-inline** - The inline padding around the content. _(default: undefined)_
 * - **--forge-inline-message-padding-block** - The block padding around the content. _(default: undefined)_
 * - **--forge-inline-message-border-width** - The border width. _(default: undefined)_
 * - **--forge-inline-message-border-style** - The border style. Defaults to `none`. _(default: undefined)_
 * - **--forge-inline-message-border-color** - The border color. _(default: undefined)_
 * - **--forge-inline-message-gap** - The gap/space between the content elements. _(default: undefined)_
 * - **--forge-inline-message-icon-gap** - The gap/space between the icon and the content. _(default: undefined)_
 * - **--forge-inline-message-content-gap** - The gap/space between the title and the message. _(default: undefined)_
 * - **--forge-inline-message-icon-color** - The icon color. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root layout element.
 * - **container** - The container element for the title and message content.
 */
export const InlineMessageComponent: React.ForwardRefExoticComponent<InlineMessageComponentProps>;
