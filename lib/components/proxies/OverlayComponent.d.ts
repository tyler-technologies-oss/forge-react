import { OverlayComponent as OverlayComponentElement } from "@tylertech/forge/esm/overlay";

export type { OverlayComponentElement };

export interface OverlayComponentProps
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
  /** The id of the element to anchor the overlay to. */
  anchor?: OverlayComponentElement["anchor"];

  /** Whether or not the overlay should be rendered without an anchor (centered on page by default). */
  noAnchor?: OverlayComponentElement["noAnchor"];

  /** Whether or not the overlay is open. */
  open?: OverlayComponentElement["open"];

  /** Whether or not the overlay should be rendered inline (not in the :top-layer). */
  inline?: OverlayComponentElement["inline"];

  /** The placement of the overlay relative to the anchor element. */
  placement?: OverlayComponentElement["placement"];

  /** The positioning strategy to use for the overlay. Valid values are `'fixed'` and `'absolute'`. */
  positionStrategy?: OverlayComponentElement["positionStrategy"];

  /** Whether or not the overlay should hide itself when the anchor element is out of view. */
  hide?: OverlayComponentElement["hide"];

  /** Whether or not the overlay handles light dismiss itself or not. */
  persistent?: OverlayComponentElement["persistent"];

  /** Whether or not the anchor element should shift along the side of the overlay when scrolling. */
  shift?: OverlayComponentElement["shift"];

  /** Tells the overlay not to flip to the opposite placement when not enough room. */
  flip?: OverlayComponentElement["flip"];

  /** The placement of the overlay around the anchor element **after** dynamic positioning. This is a read-only attribute that is only available when open. */
  positionPlacement?: OverlayComponentElement["positionPlacement"];

  /** The id of the element to use as the boundary for the overlay. */
  boundary?: OverlayComponentElement["boundary"];

  /** The fallback placements to use when the overlay cannot be placed in the desired placement. Should be a comma separated list of placements. */
  fallbackPlacements?: OverlayComponentElement["fallbackPlacements"];

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

  /** The element to use as the arrow for the overlay. */
  arrowElement?: OverlayComponentElement["arrowElement"];

  /** The offset to apply to the arrow element. */
  arrowElementOffset?: OverlayComponentElement["arrowElementOffset"];

  /** The element to anchor the overlay to. */
  anchorElement?: OverlayComponentElement["anchorElement"];

  /** The offset to apply to the overlay position relative to the anchor element. */
  offset?: OverlayComponentElement["offset"];

  /** The element to use as the boundary for the overlay. */
  boundaryElement?: OverlayComponentElement["boundaryElement"];

  /** Dispatches when the overlay is light dismissed via the escape key or clicking outside the overlay. */
  onForgeOverlayLightDismiss?: (
    event: CustomEvent<CustomEvent<OverlayToggleEventData>>
  ) => void;
}

/**
 * Overlays are used to render content in an element that rendered above all content on the page,
 * and positioned around a specified anchor element.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-overlay-light-dismiss** - Dispatches when the overlay is light dismissed via the escape key or clicking outside the overlay.
 *
 * ### **Slots:**
 *  - _default_ - The content to render inside the positioned overlay container.
 *
 * ### **CSS Properties:**
 *  - **--forge-overlay-position** - The `position` of the overlay. _(default: undefined)_
 * - **--forge-overlay-z-index** - The `z-index` of the overlay. Defaults to the `popup` range. _(default: undefined)_
 * - **--forge-overlay-height** - The `height` of the overlay. Defaults to `min-content`. _(default: undefined)_
 * - **--forge-overlay-width** - The `width` of the overlay. Defaults to `min-content`. _(default: undefined)_
 * - **--forge-overlay-position-block-start** - The `block-start` position of the overlay. _(default: undefined)_
 * - **--forge-overlay-position-block-end** - The `block-end` position of the overlay. _(default: undefined)_
 * - **--forge-overlay-position-inline-start** - The `inline-start` position of the overlay. _(default: undefined)_
 * - **--forge-overlay-position-inline-end** - The `inline-end` position of the overlay. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The component's root element.
 */
export const OverlayComponent: React.ForwardRefExoticComponent<OverlayComponentProps>;
