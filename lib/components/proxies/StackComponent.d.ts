import { StackComponent as StackComponentElement } from "@tylertech/forge/esm/stack";

export type { StackComponentElement };

export interface StackComponentProps
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
  /** Controls the direction of the stack. */
  inline?: boolean;

  /** Controls if items wrap to a new line in inline mode */
  wrap?: boolean;

  /** Controls if items stretch and take up the maximum amount of space */
  stretch?: boolean;

  /** Controls the gap between the children within the stack */
  gap?: StackComponentElement["gap"];

  /** Controls the align-items property of a row or column */
  alignment?: StackComponentElement["alignment"];

  /** Controls the justify-content property of a row or column */
  justify?: StackComponentElement["justify"];

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
 * The stack is a utility component that helps manage spacing and alignment of immediate children along a vertical or horizontal axis.
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The default/unnamed slot for stack content.
 *
 * ### **CSS Properties:**
 *  - **--forge-stack-alignment** - Controls the align-items CSS property of the root stack element. _(default: undefined)_
 * - **--forge-stack-justify** - Controls the justify-content CSS property of the root stack element. _(default: undefined)_
 * - **--forge-stack-gap** - Controls the gap between each child element within a stack. _(default: undefined)_
 * - **--forge-stack-height** - Controls the height of the root stack element. _(default: undefined)_
 * - **--forge-stack-stretch** - Controls the flex shorthand property of a child element within the stack. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 */
export const StackComponent: React.ForwardRefExoticComponent<StackComponentProps>;
