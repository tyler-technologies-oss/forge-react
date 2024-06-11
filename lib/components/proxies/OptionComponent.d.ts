import { OptionComponent as OptionComponentElement } from "@tylertech/forge/esm/option";

export type { OptionComponentElement };

export interface OptionComponentProps
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
  /** Gets/sets the disabled status of this option. */
  disabled?: boolean;

  /** Gets/sets the whether this option is a divider. */
  divider?: boolean;

  /** Gets/sets the value of this option. */
  value?: OptionComponentElement["value"];

  /** Gets/sets the label of this option. */
  label?: OptionComponentElement["label"];

  /** Gets/sets the secondary label of this option. */
  secondaryLabel?: OptionComponentElement["secondaryLabel"];

  /** Gets/sets the classes of this option. */
  optionClass?: OptionComponentElement["optionClass"];

  /** Gets/sets the leading icon of this option. */
  leadingIcon?: OptionComponentElement["leadingIcon"];

  /** Gets/sets the leading icon class of this option. */
  leadingIconClass?: OptionComponentElement["leadingIconClass"];

  /** Gets/sets the leading icon type of this option. */
  leadingIconType?: OptionComponentElement["leadingIconType"];

  /** Gets/sets the trailing icon of this option. */
  trailingIcon?: OptionComponentElement["trailingIcon"];

  /** Gets/sets the trailing icon class of this option. */
  trailingIconClass?: OptionComponentElement["trailingIconClass"];

  /** Gets/sets the trailing icon type of this option. */
  trailingIconType?: OptionComponentElement["trailingIconType"];

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

  /** Gets/sets properties on leading icon component. */
  leadingIconComponentProps?: OptionComponentElement["leadingIconComponentProps"];

  /** Gets/sets properties on trailing icon component. */
  trailingIconComponentProps?: OptionComponentElement["trailingIconComponentProps"];

  /** Gets/sets the leading builder of this option. */
  leadingBuilder?: OptionComponentElement["leadingBuilder"];

  /** Gets/sets the trailing builder of this option. */
  trailingBuilder?: OptionComponentElement["trailingBuilder"];
}

/**
 *
 * ---
 *
 */
export const OptionComponent: React.ForwardRefExoticComponent<OptionComponentProps>;
