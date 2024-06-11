import { StateLayerComponent as StateLayerComponentElement } from "@tylertech/forge/esm/state-layer";

export type { StateLayerComponentElement };

export interface StateLayerComponentProps
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
  /** Controls whether the state layer is disabled. */
  disabled?: boolean;

  /** The id of the element to attach the state layer to. */
  target?: StateLayerComponentElement["target"];

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

  /** The element to attach the state layer to. */
  targetElement?: StateLayerComponentElement["targetElement"];
}

/**
 * State layers show the interaction status of an element.
 * ---
 *
 *
 * ### **Methods:**
 *  - **playAnimation(coords: _StateLayerCoords_): _void_** - Triggers the animation to run.
 *
 * Note: If coordinates are not provided, the transition will originate from the center of the target element.
 *
 * ### **CSS Properties:**
 *  - **--forge-state-layer-color** - The color of the state layer. Defaults to the on-surface theme. _(default: undefined)_
 * - **--forge-state-layer-hover-color** - The color of the state layer when hovered. _(default: undefined)_
 * - **--forge-state-layer-hover-opacity** - The opacity of the state layer when hovered. _(default: undefined)_
 * - **--forge-state-layer-pressed-color** - The color of the state layer when pressed. _(default: undefined)_
 * - **--forge-state-layer-pressed-opacity** - The opacity of the state layer when pressed. _(default: undefined)_
 * - **--forge-state-layer-hover-duration** - The duration of the hover animation. _(default: undefined)_
 * - **--forge-state-layer-animation-duration** - The duration of the animation. _(default: undefined)_
 * - **--forge-state-layer-pressed-duration** - The duration of the pressed animation. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **surface** - The surface element.
 */
export const StateLayerComponent: React.ForwardRefExoticComponent<StateLayerComponentProps>;
