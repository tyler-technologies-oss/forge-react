import { ToastComponent as ToastComponentElement } from "@tylertech/forge/esm/toast";

export type { ToastComponentElement };

export interface ToastComponentProps
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
  /** The open state. */
  open?: boolean;

  /** Whether the toast is dismissible (displays a close button). */
  dismissible?: boolean;

  /** The duration in milliseconds that the toast is displayed. */
  duration?: ToastComponentElement["duration"];

  /** The placement of the toast. */
  placement?: ToastComponentElement["placement"];

  /** The text for the action button. This controls the visibility of the action button. */
  actionText?: ToastComponentElement["actionText"];

  /** The accessible label for the dismiss button. */
  dismissLabel?: ToastComponentElement["dismissLabel"];

  /** The theme of the toast. */
  theme?: ToastComponentElement["theme"];

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

  /** Dispatched when the action button is clicked. */
  onForgeToastAction?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Dispatched when the toast is closed. */
  onForgeToastClose?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 * Toasts are non-modal notifications that appear in response to user interactions.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-toast-action** - Dispatched when the action button is clicked.
 * - **forge-toast-close** - Dispatched when the toast is closed.
 *
 * ### **Methods:**
 *  - **show(): _void_** - Shows the toast.
 * - **hide(): __** - Hides the toast.
 *
 * ### **CSS Properties:**
 *  - **--forge-toast-background** - The background color of the toast. _(default: undefined)_
 * - **--forge-toast-color** - The text color of the toast. _(default: undefined)_
 * - **--forge-toast-offset** - The offset of the toast from the edge of the viewport. _(default: undefined)_
 * - **--forge-toast-shape** - The shape of the toast. _(default: undefined)_
 * - **--forge-toast-elevation** - The elevation of the toast. _(default: undefined)_
 * - **--forge-toast-action-color** - The text color of the action button. _(default: undefined)_
 * - **--forge-toast-min-width** - The minimum width of the toast. _(default: undefined)_
 * - **--forge-toast-max-width** - The maximum width of the toast. _(default: undefined)_
 * - **--forge-toast-min-height** - The minimum height of the toast. _(default: undefined)_
 * - **--forge-toast-inline-padding** - The padding of the toast when inline. _(default: undefined)_
 * - **--forge-toast-spacing** - The spacing between toasts. _(default: undefined)_
 * - **--forge-toast-message-padding** - The padding of the toast message. _(default: undefined)_
 * - **--forge-toast-enter-duration** - The duration of the enter animation. _(default: undefined)_
 * - **--forge-toast-enter-timing** - The timing function of the enter animation. _(default: undefined)_
 * - **--forge-toast-exit-duration** - The duration of the exit animation. _(default: undefined)_
 * - **--forge-toast-exit-timing** - The timing function of the exit animation. _(default: undefined)_
 * - **--forge-toast-slide-origin** - The origin of the slide animation. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **surface** - The surface container.
 * - **message** - The message container.
 * - **action-button** - The action button.
 * - **close-button** - The close button.
 * - **overlay** - The `<forge-overlay>` element.
 */
export const ToastComponent: React.ForwardRefExoticComponent<ToastComponentProps>;
