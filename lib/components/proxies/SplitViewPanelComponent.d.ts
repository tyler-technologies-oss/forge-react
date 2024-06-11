import { SplitViewPanelComponent as SplitViewPanelComponentElement } from "@tylertech/forge/esm/split-view-panel";

export type { SplitViewPanelComponentElement };

export interface SplitViewPanelComponentProps
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
  /** Controls the open state of the panel. */
  open?: boolean;

  /** Whether resize interactions are disabled or enabled. */
  disabled?: boolean;

  /** Whether the panel can be closed via keyboard interaction. */
  allowClose?: boolean;

  /** Whether the panel automatically closes when it reaches a size of 0. */
  autoClose?: boolean;

  /** Controls which side of the panel the resize handle appears on. */
  resizable?: SplitViewPanelComponentElement["resizable"];

  /** The initial size along the axis of orientation. */
  size?: SplitViewPanelComponentElement["size"];

  /** The smallest size the panel can take along its axis of orientation. */
  min?: SplitViewPanelComponentElement["min"];

  /** The largest size the panel can take along its axis of orientation. */
  max?: SplitViewPanelComponentElement["max"];

  /** The ARIA label given to the resize handle. */
  accessibleLabel?: SplitViewPanelComponentElement["accessibleLabel"];

  /** The size at which the panel auto closes. */
  autoCloseThreshold?: SplitViewPanelComponentElement["autoCloseThreshold"];

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

  /** Emitted before the panel resizes. */
  onForgeSplitViewPanelWillResize?: (
    event: CustomEvent<CustomEvent<ISplitViewPanelWillResizeEvent>>
  ) => void;

  /** Emitted when the panel starts resizing. */
  onForgeSplitViewPanelResizeStart?: (
    event: CustomEvent<CustomEvent<null>>
  ) => void;

  /** Emitted when the panel stops resizing. */
  onForgeSplitViewPanelResizeEnd?: (
    event: CustomEvent<CustomEvent<null>>
  ) => void;

  /** Emitted when the panel resizes. */
  onForgeSplitViewPanelResize?: (
    event: CustomEvent<CustomEvent<number>>
  ) => void;

  /** Emitted before the panel opens. */
  onForgeSplitViewPanelWillOpen?: (
    event: CustomEvent<CustomEvent<ISplitViewPanelOpenEvent>>
  ) => void;

  /** Emitted before the panel closes. */
  onForgeSplitViewPanelWillClose?: (
    event: CustomEvent<CustomEvent<ISplitViewPanelOpenEvent>>
  ) => void;

  /** Emitted after the panel opens. */
  onForgeSplitViewPanelDidOpen?: (
    event: CustomEvent<CustomEvent<ISplitViewPanelOpenEvent>>
  ) => void;

  /** Emitted after the panel closes. */
  onForgeSplitViewPanelDidClose?: (
    event: CustomEvent<CustomEvent<ISplitViewPanelOpenEvent>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-split-view-panel-will-resize** - Emitted before the panel resizes.
 * - **forge-split-view-panel-resize-start** - Emitted when the panel starts resizing.
 * - **forge-split-view-panel-resize-end** - Emitted when the panel stops resizing.
 * - **forge-split-view-panel-resize** - Emitted when the panel resizes.
 * - **forge-split-view-panel-will-open** - Emitted before the panel opens.
 * - **forge-split-view-panel-will-close** - Emitted before the panel closes.
 * - **forge-split-view-panel-did-open** - Emitted after the panel opens.
 * - **forge-split-view-panel-did-close** - Emitted after the panel closes.
 *
 * ### **Methods:**
 *  - **getContentSize(): __** - Gets the size of content along the axis of orientation.
 * - **getCollapsibleSize(): __** - Gets the amount that the content can shrink along the axis of orientation before reaching its
 * min size.
 * - **setContentSize(size: _number_): _void_** - Sets the size of content along the axis of orientation.
 * - **update(config: _ISplitViewUpdateConfig_): _void_** - Updates the provided characteristics.
 *
 * ### **CSS Properties:**
 *  - **--forge-split-view-panel-size** - The size of the panel along the axis of orientation. _(default: undefined)_
 * - **--forge-split-view-panel-cursor** - The cursor to display when hovering over the panel. _(default: undefined)_
 */
export const SplitViewPanelComponent: React.ForwardRefExoticComponent<SplitViewPanelComponentProps>;
