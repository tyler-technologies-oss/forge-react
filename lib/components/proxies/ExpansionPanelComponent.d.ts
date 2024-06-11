import { ExpansionPanelComponent as ExpansionPanelComponentElement } from "@tylertech/forge/esm/expansion-panel";

export type { ExpansionPanelComponentElement };

export interface ExpansionPanelComponentProps
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
  /** Whether the panel is open or closed. */
  open?: boolean;

  /** The orientation of the panel. */
  orientation?: ExpansionPanelComponentElement["orientation"];

  /** The type of animation to use when opening/closing the panel. */
  animationType?: ExpansionPanelComponentElement["animationType"];

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

  /** Event fired when the panel is toggled open or closed. */
  onForgeExpansionPanelToggle?: (
    event: CustomEvent<CustomEvent<boolean>>
  ) => void;

  /** Event fired when the panel has finished animating when toggling. */
  onForgeExpansionPanelAnimationComplete?: (
    event: CustomEvent<CustomEvent<boolean>>
  ) => void;
}

/**
 * Expansion panels provide progressive disclosure of content.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-expansion-panel-toggle** - Event fired when the panel is toggled open or closed.
 * - **forge-expansion-panel-animation-complete** - Event fired when the panel has finished animating when toggling.
 *
 * ### **Methods:**
 *  - **toggle(): _void_** - Toggles the open state of the panel.
 *
 * ### **Slots:**
 *  - _default_ - The content of the panel.
 * - **header** - The header of the panel.
 *
 * ### **CSS Properties:**
 *  - **--forge-expansion-panel-animation-duration** - The duration of the open/close animation. _(default: undefined)_
 * - **--forge-expansion-panel-animation-easing** - The easing function of the open/close animation. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root element of the panel.
 * - **header** - The header of the panel.
 * - **content** - The content of the panel.
 */
export const ExpansionPanelComponent: React.ForwardRefExoticComponent<ExpansionPanelComponentProps>;
