import { ColorPickerComponent as ColorPickerComponentElement } from "@tylertech/forge/esm/color-picker";

export type { ColorPickerComponentElement };

export interface ColorPickerComponentProps
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
  /** Gets/sets whether opacity is displayed and allowed be to changed. */
  allowOpacity?: boolean;

  /** Gets/sets whether change event has a debounce applied to avoid successive updates. */
  debounceChangeEvent?: boolean;

  /** Gets/sets the value using hex format only. */
  value?: ColorPickerComponentElement["value"];

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

  /** Gets/sets the value using rgba format. */
  rgba?: ColorPickerComponentElement["rgba"];

  /** Gets/sets the value using hsva format. */
  hsva?: ColorPickerComponentElement["hsva"];

  /** Gets/sets the opacity value, if `allowOpacity` is true. */
  opacity?: ColorPickerComponentElement["opacity"];

  /** Emits when the color value changed. */
  onForgeColorPickerChange?: (
    event: CustomEvent<CustomEvent<IColorPickerChangeEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-color-picker-change** - Emits when the color value changed.
 */
export const ColorPickerComponent: React.ForwardRefExoticComponent<ColorPickerComponentProps>;
