import { StepperComponent as StepperComponentElement } from "@tylertech/forge/esm/stepper";

export type { StepperComponentElement };

export interface StepperComponentProps
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

  /** The step configurations. */
  steps?: StepperComponentElement["steps"];

  /** The active step index. */
  selectedIndex?: StepperComponentElement["selectedIndex"];

  /** Whether the stepper is linear or non-linear. */
  linear?: StepperComponentElement["linear"];

  /** Whether the stepper uses the default or alternative label layout mode. */
  alternative?: StepperComponentElement["alternative"];

  /** The layout mode of the stepper. */
  layoutMode?: StepperComponentElement["layoutMode"];

  /** The layout alignment of the stepper. */
  layoutAlign?: StepperComponentElement["layoutAlign"];

  /** Emits the index when a step is selected. */
  onForgeStepSelect?: (event: CustomEvent<CustomEvent<number>>) => void;

  /** Emits the step component when the expanded content is focused. */
  onForgeStepExpandedContentFocusin?: (
    event: CustomEvent<CustomEvent<IStepComponent>>
  ) => void;

  /** Emits the step component when the expanded content is blurred. */
  onForgeStepExpandedContentFocusout?: (
    event: CustomEvent<CustomEvent<IStepComponent>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-step-select** - Emits the index when a step is selected.
 * - **forge-step-expanded-content-focusin** - Emits the step component when the expanded content is focused.
 * - **forge-step-expanded-content-focusout** - Emits the step component when the expanded content is blurred.
 */
export const StepperComponent: React.ForwardRefExoticComponent<StepperComponentProps>;
