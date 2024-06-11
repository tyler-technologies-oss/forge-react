import { BottomSheetComponent as BottomSheetComponentElement } from "@tylertech/forge/esm/bottom-sheet";

export type { BottomSheetComponentElement };

export interface BottomSheetComponentProps
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
  /** Whether the bottom sheet is open. */
  open?: boolean;

  /** Whether the bottom sheet is persistent. */
  persistent?: boolean;

  /** Whether the bottom sheet is fullscreen. */
  fullscreen?: boolean;

  /** The mode of the bottom sheet. */
  mode?: BottomSheetComponentElement["mode"];

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

  /** Fires before the bottom sheet closes. */
  onForgeBottomSheetBeforeClose?: (
    event: CustomEvent<CustomEvent<void>>
  ) => void;

  /** Fires after the bottom sheet closes. */
  onForgeBottomSheetClose?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fires after the bottom sheet opens. */
  onForgeBottomSheetOpen?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fires when the bottom sheet starts to be dragged. */
  onForgeBottomSheetDragStart?: (
    event: CustomEvent<CustomEvent<IBottomSheetDragStartEventData>>
  ) => void;

  /** Fires when the bottom sheet is dragged. */
  onForgeBottomSheetDragged?: (
    event: CustomEvent<CustomEvent<IBottomSheetDragEventData>>
  ) => void;

  /** Fires when the bottom sheet drag ends. */
  onForgeBottomSheetDragEnd?: (event: CustomEvent<CustomEvent<void>>) => void;

  /** Fires when the bottom sheet drag is cancelled. */
  onForgeBottomSheetDragCancel?: (
    event: CustomEvent<CustomEvent<void>>
  ) => void;

  /** Fires when the bottom sheet is toggled to fullscreen. */
  onForgeBottomSheetFullscreen?: (
    event: CustomEvent<CustomEvent<boolean>>
  ) => void;
}

/**
 * Bottom sheets slide up from the bottom of the screen to reveal more content and/or actions that the user can take.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-bottom-sheet-before-close** - Fires before the bottom sheet closes.
 * - **forge-bottom-sheet-close** - Fires after the bottom sheet closes.
 * - **forge-bottom-sheet-open** - Fires after the bottom sheet opens.
 * - **forge-bottom-sheet-drag-start** - Fires when the bottom sheet starts to be dragged.
 * - **forge-bottom-sheet-dragged** - Fires when the bottom sheet is dragged.
 * - **forge-bottom-sheet-drag-end** - Fires when the bottom sheet drag ends.
 * - **forge-bottom-sheet-drag-cancel** - Fires when the bottom sheet drag is cancelled.
 * - **forge-bottom-sheet-fullscreen** - Fires when the bottom sheet is toggled to fullscreen.
 *
 * ### **Slots:**
 *  - _default_ - The content of the bottom sheet. This is a passthrough slot to the dialog surface.
 *
 * ### **CSS Properties:**
 *  - **--forge-bottom-sheet-desktop-max-width** - The maximum width of the bottom sheet on desktop. _(default: undefined)_
 * - **--forge-bottom-sheet-desktop-min-width** - The minimum width of the bottom sheet on desktop. _(default: undefined)_
 * - **--forge-bottom-sheet-animation-duration** - The duration of the bottom sheet animation to fullscreen. _(default: undefined)_
 * - **--forge-bottom-sheet-animation-timing** - The timing function of the bottom sheet animation to fullscreen. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root element of the bottom sheet.
 * - **surface** - The surface element of the bottom sheet within th dialog.
 */
export const BottomSheetComponent: React.ForwardRefExoticComponent<BottomSheetComponentProps>;
