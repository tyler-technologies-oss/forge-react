import { LabelComponent as LabelComponentElement } from "@tylertech/forge/esm/label";

export type { LabelComponentElement };

export interface LabelComponentProps
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
  /** Propagates changes in the label's text content to the associated element. */
  dynamic?: boolean;

  /** Removes click handling from the label. */
  nonInteractive?: boolean;

  /** Whether or not the label should be associated with an ancestor element. */
  legend?: boolean;

  /** The id of the associated form component. */
  for?: LabelComponentElement["for"];

  /** A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the class selectors or functions like the method `Document.getElementsByClassName()`. */
  className?: string;

  /** Contains a space-separated list of the part names of the element that should be exposed on the host element. */
  exportparts?: string;

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

  /** The associated element. */
  forElement?: LabelComponentElement["forElement"];

  /** The element that a click should be simulated on. If not defined clicks act on the associated element. */
  clickTarget?: LabelComponentElement["clickTarget"];
}

/**
 * The Forge Label component is used to associate a text label with a compatible Forge component.
 * ---
 *
 *
 * ### **Methods:**
 *  - **update(): _void_** - Updates the targeted element with the label's current text content.
 */
export const LabelComponent: React.ForwardRefExoticComponent<LabelComponentProps>;
