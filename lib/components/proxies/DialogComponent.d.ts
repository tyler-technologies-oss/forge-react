import { DialogComponent as DialogComponentElement } from "@tylertech/forge/esm/dialog";

export type { DialogComponentElement };

export interface DialogComponentProps
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
  /** Indicates whether the dialog is open. */
  open?: boolean;

  /** Indicates whether the dialog is dismissible via escape and backdrop click or not. */
  persistent?: boolean;

  /** Indicates whether the dialog is fullscreen or not. */
  fullscreen?: boolean;

  /** Indicates whether the dialog is moveable or not. */
  moveable?: boolean;

  /** The mode of the dialog. */
  mode?: DialogComponentElement["mode"];

  /** The type of the dialog. */
  type?: DialogComponentElement["type"];

  /** The animation type of the dialog. */
  animationtype?: DialogComponentElement["animationtype"];

  /** The preset design that the dialog will apply. */
  preset?: DialogComponentElement["preset"];

  /** The selector of the element that triggers the dialog. */
  trigger?: DialogComponentElement["trigger"];

  /** Controls whether the dialog is rendered relative to the viewport its nearest containing block. */
  positionstrategy?: DialogComponentElement["positionstrategy"];

  /** Controls the block and/or inline size of the dialog. Defaults to the size of the content it contains. */
  sizestrategy?: DialogComponentElement["sizestrategy"];

  /** The placement of the dialog. */
  placement?: DialogComponentElement["placement"];

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

  /** The animation type of the dialog. */
  animationType?: DialogComponentElement["animationType"];

  /** The element that triggers the dialog. */
  triggerElement?: DialogComponentElement["triggerElement"];

  /** Controls whether the dialog is rendered relative to the viewport its nearest containing block. */
  positionStrategy?: DialogComponentElement["positionStrategy"];

  /** Controls the block and/or inline size of the dialog. Defaults to the size of the content it contains. */
  sizeStrategy?: DialogComponentElement["sizeStrategy"];

  /** Dispatched when the dialog is opened. */
  onForgeDialogOpen?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Dispatched when the dialog is closed. */
  onForgeDialogClose?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Dispatched before the dialog is closed. This event is cancelable. */
  onForgeDialogBeforeClose?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Dispatched when the dialog is first moved. */
  onForgeDialogMoveStart?: (
    event: CustomEvent<CustomEvent<IDialogMoveStartEventData>>
  ) => void;

  /** Dispatched when the dialog is being moved. */
  onForgeDialogMove?: (
    event: CustomEvent<CustomEvent<IDialogMoveEventData>>
  ) => void;

  /** Dispatched when the dialog is done being moved. */
  onForgeDialogMoveEnd?: (event: CustomEvent<CustomEvent<void>>) => void;
}

/**
 * Dialogs are temporary UI elements that are used to display information, ask for input, or confirm actions.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-dialog-open** - Dispatched when the dialog is opened.
 * - **forge-dialog-close** - Dispatched when the dialog is closed.
 * - **forge-dialog-before-close** - Dispatched before the dialog is closed. This event is cancelable.
 * - **forge-dialog-move-start** - Dispatched when the dialog is first moved.
 * - **forge-dialog-move** - Dispatched when the dialog is being moved.
 * - **forge-dialog-move-end** - Dispatched when the dialog is done being moved.
 *
 * ### **Methods:**
 *  - **show(): _void_** - Shows the dialog.
 * - **hide(): _void_** - Hides the dialog.
 *
 * ### **Slots:**
 *  - _default_ - The content of the dialog.
 * - **move-handle** - The move handle content.
 *
 * ### **CSS Properties:**
 *  - **--forge-dialog-background** - The background color of the dialog. _(default: undefined)_
 * - **--forge-dialog-shape** - The shape of the dialog. _(default: undefined)_
 * - **--forge-dialog-elevation** - The elevation of the dialog. _(default: undefined)_
 * - **--forge-dialog-spacing** - The spacing between elements inside the dialog. _(default: undefined)_
 * - **--forge-dialog-block-start-spacing** - The spacing at the start of the dialog block. _(default: undefined)_
 * - **--forge-dialog-block-end-spacing** - The spacing at the end of the dialog block. _(default: undefined)_
 * - **--forge-dialog-inline-start-spacing** - The spacing at the start of the dialog inline. _(default: undefined)_
 * - **--forge-dialog-inline-end-spacing** - The spacing at the end of the dialog inline. _(default: undefined)_
 * - **--forge-dialog-padding** - The padding of the dialog. _(default: undefined)_
 * - **--forge-dialog-width** - The width of the dialog. _(default: undefined)_
 * - **--forge-dialog-height** - The height of the dialog. _(default: undefined)_
 * - **--forge-dialog-min-width** - The minimum width of the dialog. _(default: undefined)_
 * - **--forge-dialog-max-width** - The maximum width of the dialog. _(default: undefined)_
 * - **--forge-dialog-min-height** - The minimum height of the dialog. _(default: undefined)_
 * - **--forge-dialog-max-height** - The maximum height of the dialog. _(default: undefined)_
 * - **--forge-dialog-z-index** - The z-index of the dialog. _(default: undefined)_
 * - **--forge-dialog-move-handle-color** - The color of the move handle. _(default: undefined)_
 * - **--forge-dialog-move-handle-size** - The size of the move handle. _(default: undefined)_
 * - **--forge-dialog-move-handle-hover-cursor** - The cursor style when hovering over the move handle. _(default: undefined)_
 * - **--forge-dialog-move-handle-active-cursor** - The cursor style when the move handle is active. _(default: undefined)_
 * - **--forge-dialog-move-handle-spacing** - The spacing around the move handle. _(default: undefined)_
 * - **--forge-dialog-move-transition-duration** - The duration of the move transition. _(default: undefined)_
 * - **--forge-dialog-move-transition-easing** - The easing function of the move transition. _(default: undefined)_
 * - **--forge-dialog-moving-opacity** - The opacity of the dialog when it is being moved. _(default: undefined)_
 * - **--forge-dialog-enter-animation-duration** - The duration of the enter animation. _(default: undefined)_
 * - **--forge-dialog-enter-animation-easing** - The easing function of the enter animation. _(default: undefined)_
 * - **--forge-dialog-exit-animation-duration** - The duration of the exit animation. _(default: undefined)_
 * - **--forge-dialog-exit-animation-easing** - The easing function of the exit animation. _(default: undefined)_
 * - **--forge-dialog-zoom-opacity** - The opacity of the dialog during zoom animation. _(default: undefined)_
 * - **--forge-dialog-zoom-scale** - The scale of the dialog during zoom animation. _(default: undefined)_
 * - **--forge-dialog-fade-opacity** - The opacity of the dialog during fade animation. _(default: undefined)_
 * - **--forge-dialog-slide-opacity** - The opacity of the dialog during slide animation. _(default: undefined)_
 * - **--forge-dialog-slide-translate** - The translation distance of the dialog during slide animation. _(default: undefined)_
 * - **--forge-dialog-backdrop-opacity** - The opacity of the dialog backdrop. _(default: undefined)_
 * - **--forge-dialog-nonmodal-elevation** - The elevation of non-modal dialogs. _(default: undefined)_
 * - **--forge-dialog-fullscreen-enter-animation-duration** - The duration of the enter animation for fullscreen dialogs. _(default: undefined)_
 * - **--forge-dialog-fullscreen-exit-animation-duration** - The duration of the exit animation for fullscreen dialogs. _(default: undefined)_
 * - **--forge-dialog-position-x** - The x-axis position of the dialog. _(default: undefined)_
 * - **--forge-dialog-position-y** - The y-axis position of the dialog. _(default: undefined)_
 * - **--forge-dialog-preset-sheet-enter-animation-duration** - The duration of the enter animation for preset sheet dialogs. _(default: undefined)_
 * - **--forge-dialog-preset-sheet-exit-animation-duration** - The duration of the exit animation for preset sheet dialogs. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The dialog container element.
 * - **backdrop** - The backdrop element.
 * - **surface** - The dialog surface element.
 * - **move-handle-container** - The alignment container for the move handle.
 * - **move-handle** - The move handle element.
 * - **move-handle-icon** - The move handle icon element.
 */
export const DialogComponent: React.ForwardRefExoticComponent<DialogComponentProps>;
