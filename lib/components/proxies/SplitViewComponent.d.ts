import { SplitViewComponent as SplitViewComponentElement } from "@tylertech/forge/esm/split-view";

export type { SplitViewComponentElement };

export interface SplitViewComponentProps
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
  /** Whether child split view panels have resize interactions disabled or enabled. */
  disabled?: boolean;

  /** Whether child split view panels can be closed via keyboard interaction. */
  allowClose?: boolean;

  /** Whether child split view panels automatically close when they reach a size of 0. */
  autoClose?: boolean;

  /** Whether child split view panels are laid out and resize horizontally or vertically. */
  orientation?: SplitViewComponentElement["orientation"];

  /** The size at which panels auto close. */
  autoCloseThreshold?: SplitViewComponentElement["autoCloseThreshold"];

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
 *
 * ### **Methods:**
 *  - **layerSlottedPanels(target: _ISplitViewPanelComponent_): _void_** - Arranges split view panels to avoid overlapping during animations.
 * - **unlayerSlottedPanels(): _void_** - Removes presentation data set during an animation.
 * - **update(config: _ISplitViewUpdateConfig_): _void_** - Updates the provided characteristics of each slotted panel.
 * - **refit(): _void_** - Resizes panels within the split view to avoid overflow.
 */
export const SplitViewComponent: React.ForwardRefExoticComponent<SplitViewComponentProps>;
