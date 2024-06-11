import { SliderComponent as SliderComponentElement } from "@tylertech/forge/esm/slider";

export type { SliderComponentElement };

export interface SliderComponentProps
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
  /** Controls range mode. */
  range?: boolean;

  /** Controls if tickmarks are visible. */
  tickmarks?: boolean;

  /** Controls if labels are visible. */
  labeled?: boolean;

  /** Controls if the slider is disabled. */
  disabled?: boolean;

  /** Controls if the slider is readonly. */
  readonly?: boolean;

  /** Sets the `aria-label` attribute on the slider handle. */
  dataAriaLabel?: SliderComponentElement["dataAriaLabel"];

  /** Sets the `aria-label` attribute on the start handle in range mode. */
  dataAriaLabelStart?: SliderComponentElement["dataAriaLabelStart"];

  /** Sets the `aria-label` attribute on the end handle in range mode. */
  dataAriaLabelEnd?: SliderComponentElement["dataAriaLabelEnd"];

  /** Sets the current value of the slider. */
  value?: SliderComponentElement["value"];

  /** Sets the current start value of the slider in range mode. */
  valueStart?: SliderComponentElement["valueStart"];

  /** Sets the current end value of the slider in range mode. */
  valueEnd?: SliderComponentElement["valueEnd"];

  /** Sets the label text for the slider handle. */
  label?: SliderComponentElement["label"];

  /** Sets the label text for the start slider handle in range mode. */
  labelStart?: SliderComponentElement["labelStart"];

  /** Sets the label text for the end slider handle in range mode. */
  labelEnd?: SliderComponentElement["labelEnd"];

  /** Sets the minimum value of the slider. */
  min?: SliderComponentElement["min"];

  /** Sets the maximum value of the slider. */
  max?: SliderComponentElement["max"];

  /** Sets the step value of the slider. */
  step?: SliderComponentElement["step"];

  /** Controls the form control name. */
  name?: SliderComponentElement["name"];

  /** Controls the form control name for the start handle in range mode. */
  nameStart?: SliderComponentElement["nameStart"];

  /** Controls the form control name for the end handle in range mode. */
  nameEnd?: SliderComponentElement["nameEnd"];

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

  /** A function that returns a label for the slider handle. */
  labelBuilder?: SliderComponentElement["labelBuilder"];

  /** Dispatches when the slider value changes. */
  onForgeSliderInput?: (
    event: CustomEvent<CustomEvent<ISliderChangeEventData>>
  ) => void;

  /** Dispatches when the slider value changes and the value has been committed. */
  onForgeSliderChange?: (
    event: CustomEvent<CustomEvent<ISliderChangeEventData>>
  ) => void;

  /** Dispatches when the slider range values change. */
  onForgeSliderRangeInput?: (
    event: CustomEvent<CustomEvent<ISliderRangeChangeEventData>>
  ) => void;

  /** Dispatches when the slider range values change and the values have been committed. */
  onForgeSliderRangeChange?: (
    event: CustomEvent<CustomEvent<ISliderRangeChangeEventData>>
  ) => void;
}

/**
 * Sliders allow users to make selections from a range of values.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-slider-input** - Dispatches when the slider value changes.
 * - **forge-slider-change** - Dispatches when the slider value changes and the value has been committed.
 * - **forge-slider-range-input** - Dispatches when the slider range values change.
 * - **forge-slider-range-change** - Dispatches when the slider range values change and the values have been committed.
 *
 * ### **CSS Properties:**
 *  - **--forge-theme-primary** - The primary color of the slider. _(default: undefined)_
 * - **--forge-theme-on-primary** - The color of elements placed on top of the primary color (the label text for example). _(default: undefined)_
 * - **--forge-slider-track-height** - The height of the track. _(default: undefined)_
 * - **--forge-slider-active-track-color** - The color of the active track. _(default: undefined)_
 * - **--forge-slider-active-track-height** - The height of the active track. _(default: undefined)_
 * - **--forge-slider-active-track-shape** - The shape of the active track. _(default: undefined)_
 * - **--forge-slider-disabled-active-track-color** - The color of the active track when disabled. _(default: undefined)_
 * - **--forge-slider-disabled-active-track-opacity** - The opacity of the active track when disabled. _(default: undefined)_
 * - **--forge-slider-disabled-handle-color** - The color of the slider handle when disabled. _(default: undefined)_
 * - **--forge-slider-disabled-inactive-track-color** - The color of the inactive track when disabled. _(default: undefined)_
 * - **--forge-slider-disabled-inactive-track-opacity** - The opacity of the inactive track when disabled. _(default: undefined)_
 * - **--forge-slider-focus-handle-color** - The color of the slider handle when focused. _(default: undefined)_
 * - **--forge-slider-handle-color** - The color of the slider handle. _(default: undefined)_
 * - **--forge-slider-handle-height** - The height of the slider handle. _(default: undefined)_
 * - **--forge-slider-handle-width** - The width of the slider handle. _(default: undefined)_
 * - **--forge-slider-handle-shape** - The shape of the slider handle. _(default: undefined)_
 * - **--forge-slider-hover-handle-color** - The color of the slider handle when hovered. _(default: undefined)_
 * - **--forge-slider-inactive-track-color** - The color of the inactive track. _(default: undefined)_
 * - **--forge-slider-inactive-track-height** - The height of the inactive track. _(default: undefined)_
 * - **--forge-slider-inactive-track-shape** - The shape of the inactive track. _(default: undefined)_
 * - **--forge-slider-label-container-shape** - The shape of the label container. _(default: undefined)_
 * - **--forge-slider-label-container-color** - The color of the label container. _(default: undefined)_
 * - **--forge-slider-label-container-height** - The height of the label container. _(default: undefined)_
 * - **--forge-slider-label-text-color** - The color of the label text. _(default: undefined)_
 * - **--forge-slider-pressed-handle-color** - The color of the slider handle when pressed. _(default: undefined)_
 * - **--forge-slider-state-layer-size** - The size of the state layer. _(default: undefined)_
 * - **--forge-slider-with-overlap-handle-outline-color** - The color of the slider handle outline when overlapping. _(default: undefined)_
 * - **--forge-slider-with-overlap-handle-outline-width** - The width of the slider handle outline when overlapping. _(default: undefined)_
 * - **--forge-slider-with-tick-marks-active-container-color** - The color of the active tick mark container when tick marks are visible. _(default: undefined)_
 * - **--forge-slider-with-tick-marks-container-size** - The size of the tick mark container when tick marks are visible. _(default: undefined)_
 * - **--forge-slider-with-tick-marks-disabled-active-container-color** - The color of the active tick mark container when tick marks are visible and disabled. _(default: undefined)_
 * - **--forge-slider-with-tick-marks-disabled-inactive-container-color** - The color of the inactive tick mark container when tick marks are visible and disabled. _(default: undefined)_
 * - **--forge-slider-with-tick-marks-inactive-container-color** - The color of the inactive tick mark container when tick marks are visible. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **slider** - Styles the slider container element.
 * - **track** - Styles the track element.
 * - **handle-end** - Styles the end handle element.
 * - **handle-end-thumb** - Styles the end handle thumb element.
 * - **handle-end-label** - Styles the end handle label element.
 * - **handle-end-label-content** - Styles the end handle label content element.
 * - **handle-start** - Styles the start handle element.
 * - **handle-start-thumb** - Styles the start handle thumb element.
 * - **handle-start-label** - Styles the start handle label element.
 * - **handle-start-label-content** - Styles the start handle label content element.
 */
export const SliderComponent: React.ForwardRefExoticComponent<SliderComponentProps>;
