import { PopoverComponent as PopoverComponentElement } from "@tylertech/forge/esm/popover";

export type { PopoverComponentElement };

export interface PopoverComponentProps
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
  /** Whether the overlay should not be anchored to an element. This allows for custom positioning. */
  noAnchor?: boolean;

  /** Whether the overlay is open. */
  open?: boolean;

  /** Whether the overlay is inline. */
  inline?: boolean;

  /** Whether the overlay should shift to fit within the viewport. */
  shift?: boolean;

  /** Whether the overlay should persist when the anchor is removed. */
  persistent?: boolean;

  /** Whether or not the popover should render an arrow. */
  arrow?: PopoverComponentElement["arrow"];

  /** The animation type to use for the popover. Valid values are `'none'`, `'fade'`, `'slide'`, and `'zoom'` (default). */
  animationType?: PopoverComponentElement["animationType"];

  /** The trigger type(s) to use for the popover. Valid values are `'click'` (default), `'hover'`, `'focus'`, and `'longpress'`. Multiple can be specified. */
  triggerType?: PopoverComponentElement["triggerType"];

  /** The delay in milliseconds before a longpress event is detected. */
  longpressDelay?: PopoverComponentElement["longpressDelay"];

  /** Whether or not the popover should remain open when the user hovers outside the popover. */
  persistentHover?: PopoverComponentElement["persistentHover"];

  /** The delay in milliseconds before the popover is dismissed when the user hovers outside of the popover. */
  hoverDismissDelay?: PopoverComponentElement["hoverDismissDelay"];

  /** The delay in milliseconds before the popover is shown. */
  hoverDelay?: PopoverComponentElement["hoverDelay"];

  /** The preset to use for the popover. */
  preset?: PopoverComponentElement["preset"];

  /** The IDREF of the anchor element to position the overlay relative to. */
  anchor?: PopoverComponentElement["anchor"];

  /** The placement of the overlay. */
  placement?: PopoverComponentElement["placement"];

  /** The position strategy of the overlay. */
  positionStrategy?: PopoverComponentElement["positionStrategy"];

  /** The offset of the overlay. */
  offset?: PopoverComponentElement["offset"];

  /** The hide state of the overlay. */
  hide?: PopoverComponentElement["hide"];

  /** Whether the overlay should flip placements to another side fit within the viewport. */
  flip?: PopoverComponentElement["flip"];

  /** An IDREF to boundary element to constrain the overlay within. */
  boundary?: PopoverComponentElement["boundary"];

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

  /** A readonly reference to the internal `<forge-overlay>` element instance. */
  overlay?: PopoverComponentElement["overlay"];

  /** The anchor element to position the overlay relative to. */
  anchorElement?: PopoverComponentElement["anchorElement"];

  /** The boundary element instance to constrain the overlay within. */
  boundaryElement?: PopoverComponentElement["boundaryElement"];

  /** The fallback placements of the overlay. */
  fallbackPlacements?: PopoverComponentElement["fallbackPlacements"];

  /** Dispatches before the popover is toggled, and is cancelable. */
  onForgePopoverBeforetoggle?: (
    event: CustomEvent<CustomEvent<IPopoverToggleEventData>>
  ) => void;

  /** Dispatches after the popover is toggled. */
  onForgePopoverToggle?: (
    event: CustomEvent<CustomEvent<IPopoverToggleEventData>>
  ) => void;
}

/**
 * Popovers are used to render content in an element that is above all other content on the page.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-popover-beforetoggle** - Dispatches before the popover is toggled, and is cancelable.
 * - **forge-popover-toggle** - Dispatches after the popover is toggled.
 *
 * ### **Methods:**
 *  - **hideAsync(): _Promise<void>_** - Hides the popover, and returns a `Promise` that resolves when the hide animation is complete.
 * - **position(): _void_** - Forces the overlay to reposition itself.
 *
 * ### **Slots:**
 *  - _default_ - The content to render inside the popover.
 *
 * ### **CSS Properties:**
 *  - **--forge-popover-background** - The background color of the popover surface. _(default: undefined)_
 * - **--forge-popover-border-radius** - The border radius of the popover surface. _(default: undefined)_
 * - **--forge-popover-box-shadow** - The box shadow of the popover surface. _(default: undefined)_
 * - **--forge-popover-border-width** - The border width of the popover surface. _(default: undefined)_
 * - **--forge-popover-border-style** - The border style of the popover surface. _(default: undefined)_
 * - **--forge-popover-border-color** - The border color of the popover surface. _(default: undefined)_
 * - **--forge-popover-width** - The width of the popover surface. Defaults to `auto`. _(default: undefined)_
 * - **--forge-popover-height** - The height of the popover surface. Defaults to `auto`. _(default: undefined)_
 * - **--forge-popover-min-width** - The minimum width of the popover surface. Defaults to `none`. _(default: undefined)_
 * - **--forge-popover-max-width** - The maximum width of the popover surface. Defaults to `none`. _(default: undefined)_
 * - **--forge-popover-min-height** - The minimum height of the popover surface. Defaults to `none`. _(default: undefined)_
 * - **--forge-popover-max-height** - The maximum height of the popover surface. Defaults to `none`. _(default: undefined)_
 * - **--forge-popover-arrow-size** - The size of the arrow. _(default: undefined)_
 * - **--forge-popover-arrow-height** - The height of the arrow. _(default: undefined)_
 * - **--forge-popover-arrow-width** - The width of the arrow. _(default: undefined)_
 * - **--forge-popover-arrow-background-color** - The background color of the arrow. Defaults to the background color of the popover surface. _(default: undefined)_
 * - **--forge-popover-arrow-top-rotation** - The rotation of the arrow when the popover is placed on the top. _(default: undefined)_
 * - **--forge-popover-arrow-right-rotation** - The rotation of the arrow when the popover is placed on the right. _(default: undefined)_
 * - **--forge-popover-arrow-bottom-rotation** - The rotation of the arrow when the popover is placed on the bottom. _(default: undefined)_
 * - **--forge-popover-arrow-left-rotation** - The rotation of the arrow when the popover is placed on the left. _(default: undefined)_
 * - **--forge-popover-arrow-border-width** - The border width of the popover surface and arrow when an arrow is applied. _(default: undefined)_
 * - **--forge-popover-arrow-clip-path** - The clip path to use for the arrow element. _(default: undefined)_
 * - **--forge-popover-animation-timing** - The animation timing function to use for the popover animation. _(default: undefined)_
 * - **--forge-popover-zoom-duration** - The duration of the zoom animation. _(default: undefined)_
 * - **--forge-popover-zoom-timing** - The timing function to use for the zoom animation. _(default: undefined)_
 * - **--forge-popover-slide-duration** - The duration of the slide animation. _(default: undefined)_
 * - **--forge-popover-slide-timing** - The timing function to use for the slide animation. _(default: undefined)_
 * - **--forge-popover-slide-offset** - The start offset to use for the slide animation. _(default: undefined)_
 * - **--forge-popover-fade-duration** - The duration of the fade animation. _(default: undefined)_
 * - **--forge-popover-fade-timing** - The timing function to use for the fade animation. _(default: undefined)_
 * - **--forge-popover-position-block-start** - The `block-start` position of the popover. _(default: undefined)_
 * - **--forge-popover-position-block-end** - The `block-end` position of the popover. _(default: undefined)_
 * - **--forge-popover-position-inline-start** - The `inline-start` position of the popover. _(default: undefined)_
 * - **--forge-popover-position-inline-end** - The `inline-end` position of the popover. _(default: undefined)_
 * - **--forge-popover-preset-dropdown-max-height** - The maximum height of the popover when using `preset="dropdown"`. Defaults to `256px`. _(default: undefined)_
 * - **--forge-popover-preset-dropdown-overflow** - The overflow behavior of the popover when using `preset="dropdown"`. Defaults to `auto visible` (vertical scrolling only). _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **overlay** - The overlay root element.
 * - **surface** - The surface container element for the slotted content.
 */
export const PopoverComponent: React.ForwardRefExoticComponent<PopoverComponentProps>;
