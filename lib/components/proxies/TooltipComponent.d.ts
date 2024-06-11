import { TooltipComponent as TooltipComponentElement } from "@tylertech/forge/esm/tooltip";

export type { TooltipComponentElement };

export interface TooltipComponentProps
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
  /** Whether or not the tooltip is open. */
  open?: boolean;

  /** The type of tooltip. Valid values are `presentation` (default), `label`, and `description`. */
  type?: TooltipComponentElement["type"];

  /** The id of the element that the tooltip is anchored to. */
  anchor?: TooltipComponentElement["anchor"];

  /** The placement of the tooltip relative to the anchor element. */
  placement?: TooltipComponentElement["placement"];

  /** The delay in milliseconds before the tooltip is shown. */
  delay?: TooltipComponentElement["delay"];

  /** The offset in pixels between the tooltip and the anchor element. */
  offset?: TooltipComponentElement["offset"];

  /** How the tooltip should place itself if there is not enough space at the desired placement. */
  flip?: TooltipComponentElement["flip"];

  /** The id of the element that the tooltip should be constrained to. */
  boundary?: TooltipComponentElement["boundary"];

  /** The fallback placements of the tooltip relative to the anchor element. */
  fallbackPlacements?: TooltipComponentElement["fallbackPlacements"];

  /** The trigger type(s) that will open the tooltip. Valid values are `hover` (default), `longpress`, and `focus`. */
  triggerType?: TooltipComponentElement["triggerType"];

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

  /** undefined */
  target?: TooltipComponentElement["target"];

  /** undefined */
  position?: TooltipComponentElement["position"];

  /** The element that the tooltip should be constrained to. */
  boundaryElement?: TooltipComponentElement["boundaryElement"];
}

/**
 * Tooltips display information related to an element when the user hovers over an element.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The content to display in the tooltip.
 *
 * ### **CSS Properties:**
 *  - **--forge-tooltip-background** - The background color of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-color** - The text color of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-shape** - The shape of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-padding** - The padding of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-padding-block** - The block padding of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-padding-inline** - The inline padding of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-max-width** - The maximum width of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-elevation** - The elevation of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-border-width** - The border width of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-border-style** - The border style of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-border-color** - The border color of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-animation-timing** - The animation timing function of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-animation-duration** - The animation duration of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-animation-offset** - The animation offset of the tooltip surface. _(default: undefined)_
 * - **--forge-tooltip-arrow-size** - The size of the tooltip arrow. _(default: undefined)_
 * - **--forge-tooltip-arrow-height** - The height of the tooltip arrow. _(default: undefined)_
 * - **--forge-tooltip-arrow-width** - The width of the tooltip arrow. _(default: undefined)_
 * - **--forge-tooltip-arrow-shape** - The shape of the tooltip arrow. _(default: undefined)_
 * - **--forge-tooltip-arrow-clip-path** - The clip path of the tooltip arrow. _(default: undefined)_
 * - **--forge-tooltip-arrow-rotation** - The rotation of the tooltip arrow. _(default: undefined)_
 * - **--forge-tooltip-arrow-top-rotation** - The rotation of the tooltip arrow when the tooltip is placed on top. _(default: undefined)_
 * - **--forge-tooltip-arrow-right-rotation** - The rotation of the tooltip arrow when the tooltip is placed on the right. _(default: undefined)_
 * - **--forge-tooltip-arrow-bottom-rotation** - The rotation of the tooltip arrow when the tooltip is placed on the bottom. _(default: undefined)_
 * - **--forge-tooltip-arrow-left-rotation** - The rotation of the tooltip arrow when the tooltip is placed on the left. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **surface** - The tooltip surface.
 * - **arrow** - The tooltip arrow.
 * - **overlay** - The overlay surface.
 */
export const TooltipComponent: React.ForwardRefExoticComponent<TooltipComponentProps>;
