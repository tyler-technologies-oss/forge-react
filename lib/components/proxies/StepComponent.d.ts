import { StepComponent as StepComponentElement } from "@tylertech/forge/esm/step";

export type { StepComponentElement };

export interface StepComponentProps
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
  /** Whether the step is selected. */
  selected?: boolean;

  /** Whether the step is editable. */
  editable?: boolean;

  /** Whether the step is completed. */
  completed?: boolean;

  /** Whether the step has an error. */
  error?: boolean;

  /** Whether the step is in alternative mode. */
  alternative?: boolean;

  /** Whether the step is disabled. */
  disabled?: boolean;

  /** Whether the step is in vertical mode. */
  vertical?: boolean;

  /** Whether the step is expanded. */
  expanded?: boolean;

  /** Whether the step should ignore user expansion. */
  ignoreUserExpansion?: boolean;

  /** The index of the step. */
  index?: StepComponentElement["index"];

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
 *
 * ---
 *
 *
 * ### **Slots:**
 *  - _default_ - The content of the step.
 * - **optional** - The optional content of the step.
 * - **expansion-content** - The content of the step expansion.
 *
 * ### **CSS Properties:**
 *  - **--forge-step-primary-color** - The primary color of the step. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-step-text-color** - The text color of the step. Defaults to the on-primary theme. _(default: undefined)_
 * - **--forge-step-border-radius** - The border radius of the step. Defaults to the extra-large shape. _(default: undefined)_
 * - **--forge-step-border-radius-vertical** - The border radius of the step in vertical mode. Defaults to the medium shape. _(default: undefined)_
 * - **--forge-step-disabled-text-color** - The text color of the step when disabled. Defaults to the text-low theme. _(default: undefined)_
 * - **--forge-step-disabled-color** - The color of the step when disabled. Defaults to the surface-container-minimum theme. _(default: undefined)_
 * - **--forge-step-icon-fill** - The fill color of the step icon. Defaults to unset. _(default: undefined)_
 * - **--forge-step-icon-fill-active** - The fill color of the step icon when active. Defaults to the primary color. _(default: undefined)_
 * - **--forge-step-icon-text-color** - The text color of the step icon. Defaults to the primary theme. _(default: undefined)_
 * - **--forge-step-icon-text-color-active** - The text color of the step icon when active. Defaults to the on-primary theme. _(default: undefined)_
 * - **--forge-step-icon-content-size** - The size of the step icon content. Defaults to 24px. _(default: undefined)_
 * - **--forge-step-icon-size** - The size of the step icon. Defaults to 0.875em. _(default: undefined)_
 * - **--forge-step-icon-transition-duration** - The duration of the step icon transition. Defaults to the medium4 animation duration. _(default: undefined)_
 * - **--forge-step-icon-transition-easing** - The easing of the step icon transition. Defaults to the standard animation easing. _(default: undefined)_
 * - **--forge-step-line-color** - The color of the step line. Defaults to the outline theme. _(default: undefined)_
 * - **--forge-step-line-min-width** - The minimum width of the step line. Defaults to 10px. _(default: undefined)_
 * - **--forge-step-line-min-width-clustered** - The minimum width of the step line when clustered. Defaults to 25px. _(default: undefined)_
 * - **--forge-step-label-color** - The color of the step label. Defaults to the text-high theme. _(default: undefined)_
 * - **--forge-step-sub-label-color** - The color of the step sub-label. Defaults to the text-medium theme. _(default: undefined)_
 * - **--forge-step-error-color** - The color of the step error. Defaults to the error theme. _(default: undefined)_
 * - **--forge-step-error-text-color** - The text color of the step error. Defaults to the on-error theme. _(default: undefined)_
 * - **--forge-step-expansion-panel-border-left-width** - The border left width of the step expansion panel. Defaults to 1px. _(default: undefined)_
 * - **--forge-step-expansion-panel-margin-bottom** - The margin bottom of the step expansion panel. Defaults to 4px. _(default: undefined)_
 * - **--forge-step-expansion-panel-margin-left** - The margin left of the step expansion panel. Defaults to 60px. _(default: undefined)_
 * - **--forge-step-expansion-panel-margin-top** - The margin top of the step expansion panel. Defaults to 4px. _(default: undefined)_
 * - **--forge-step-expansion-panel-icon-color** - The color of the step expansion panel icon. Defaults to the text-medium theme. _(default: undefined)_
 */
export const StepComponent: React.ForwardRefExoticComponent<StepComponentProps>;
