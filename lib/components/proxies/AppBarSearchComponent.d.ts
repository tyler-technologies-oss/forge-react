import { AppBarSearchComponent as AppBarSearchComponentElement } from "@tylertech/forge/esm/app-bar-search";

export type { AppBarSearchComponentElement };

export interface AppBarSearchComponentProps
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
  /** A boolean attribute that, if present, indicates that the input should be disabled. */
  disabled?: boolean;

  /** The value of the input. */
  value?: AppBarSearchComponentElement["value"];

  /** The placeholder text of the input. */
  placeholder?: AppBarSearchComponentElement["placeholder"];

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

  /** Emits when the users executes the search via pressing the Enter key while the `<input>` has focus. */
  onForgeAppBarSearchInput?: (
    event: CustomEvent<CustomEvent<IAppBarSearchInputEventData>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-app-bar-search-input** - Emits when the users executes the search via pressing the Enter key while the `<input>` has focus.
 *
 * ### **Slots:**
 *  - _default_ - The default (unnamed) slot is where child `<input>` elements will be placed.
 * - **action** - Places actions at the end of the input.
 *
 * ### **CSS Properties:**
 *  - **--forge-theme-on-primary** - Controls the border-color of the container outline, the font-color, and icon color. _(default: undefined)_
 * - **--forge-theme-on-surface** - Controls the font color of the buttons. _(default: undefined)_
 * - **--forge-theme-text-medium** - Controls the placeholder font color. _(default: undefined)_
 * - **--forge-app-bar-search-theme-background** - Controls the background-color of the container. _(default: undefined)_
 * - **--forge-app-bar-search-theme-background-focused** - Controls the focused background-color of the container. _(default: undefined)_
 * - **--forge-app-bar-search-theme-hover-opacity** - Controls the hover opacity of the outline. _(default: undefined)_
 * - **--forge-app-bar-search-theme-disabled-opacity** - Controls the disabled opacity of the component. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root element
 * - **container** - The input container element.
 * - **icon-container** - The icon container element.
 * - **icon** - The <forge-icon> element.
 * - **context** - The context container element.
 * - **context-divider** - The context divider element.
 * - **context-button** - The context button element.
 * - **context-button-text** - The context button text element.
 * - **context-button-icon** - The context button icon element.
 * - **global-icon-container** - The global icon container element.
 * - **global-icon** - The global icon <forge-icon> element.
 * - **actions-container** - The action container element around the slot.
 */
export const AppBarSearchComponent: React.ForwardRefExoticComponent<AppBarSearchComponentProps>;
