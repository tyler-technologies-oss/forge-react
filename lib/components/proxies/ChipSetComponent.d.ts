import { ChipSetComponent as ChipSetComponentElement } from "@tylertech/forge/esm/chip-set";

export type { ChipSetComponentElement };

export interface ChipSetComponentProps
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
  /** Whether the chip set is vertically oriented. */
  vertical?: boolean;

  /** Whether all chips in the chip set are dense. */
  dense?: boolean;

  /** Whether all chips in the chip set are disabled. */
  disabled?: boolean;

  /** Whether all chips in the chip set are invalid. */
  invalid?: boolean;

  /** The type of chips. */
  type?: ChipSetComponentElement["type"];

  /** The theme of the chips. */
  theme?: ChipSetComponentElement["theme"];

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
 * Chips sets are used to group multiple chips together and orchestrate their behavior.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The chips to display in the chip set.
 *
 * ### **CSS Properties:**
 *  - **--forge-chip-set-spacing** - The spacing between chips. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The component's root element.
 */
export const ChipSetComponent: React.ForwardRefExoticComponent<ChipSetComponentProps>;
