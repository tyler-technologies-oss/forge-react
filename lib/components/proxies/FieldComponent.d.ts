import { FieldComponent as FieldComponentElement } from "@tylertech/forge/esm/field";

export type { FieldComponentElement };

export interface FieldComponentProps
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
  /** Whether an inset positioned label is floated to the top of the container. */
  floatLabel?: boolean;

  /** Whether the field is in an invalid state. */
  invalid?: boolean;

  /** Whether the field is required. */
  required?: boolean;

  /** Whether the field is optional. */
  optional?: boolean;

  /** Whether the field is disabled. */
  disabled?: boolean;

  /** Whether the field is at the "extra-small" density level. */
  dense?: boolean;

  /** Whether the field has a popover icon. */
  popoverIcon?: boolean;

  /** Whether the field's popover icon is in the expanded orientation. */
  popoverExpanded?: boolean;

  /** Whether the field contains a multiline input. */
  multiline?: boolean;

  /** Whether the focus indicator should render when the target element matches `:focus` instead of `:focus-visible`. */
  focusIndicatorAllowFocus?: boolean;

  /** The position of the label relative to the input area. */
  labelPosition?: FieldComponentElement["labelPosition"];

  /** The alignment of the label relative to the input area. */
  labelAlignment?: FieldComponentElement["labelAlignment"];

  /** The variant of the field. */
  variant?: FieldComponentElement["variant"];

  /** The theme of the field. */
  theme?: FieldComponentElement["theme"];

  /** The border radius of the field's corners. */
  shape?: FieldComponentElement["shape"];

  /** The density of the field. */
  density?: FieldComponentElement["density"];

  /** Whether the field's support text is inset from either side. */
  supportTextInset?: FieldComponentElement["supportTextInset"];

  /** The id of the element to attach the focus indicator to. */
  focusIndicatorTarget?: FieldComponentElement["focusIndicatorTarget"];

  /** The focus mode to use on the focus indicator. */
  focusIndicatorFocusMode?: FieldComponentElement["focusIndicatorFocusMode"];

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

  /** The element to attach the focus indicator to. */
  focusIndicatorTargetElement?: FieldComponentElement["focusIndicatorTargetElement"];

  /** Dispatches when the user clicks the popover icon. */
  onForgeFieldPopoverIconClick?: (
    event: CustomEvent<CustomEvent<void>>
  ) => void;
}

/**
 * The Forge Field component is a basic component that handles the layout and theming of
 * form elements that can include a label, various states, and a border around an input area.
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-field-popover-icon-click** - Dispatches when the user clicks the popover icon.
 *
 * ### **Methods:**
 *  - **floatLabelWithoutAnimation(value: _boolean_): _void_** - Sets the floating label without animating the transition.
 *
 * ### **Slots:**
 *  - _default_ - The default/unnamed slot for the field's input.
 * - **label** - Renders its content as a positioned label.
 * - **start** - Typically reserved for content/icons that render logically before the default slot content.
 * - **end** - Typically reserved content/icons that render logically after the default slot content.
 * - **accessory** - Used for content such as a button that is logically connected to the field but should appear distinct from the input.
 * - **support-text** - Used for content that provides additional information about the field. Aligns to the inline start of the field.
 * - **support-text-end** - Used for content that provides additional information about the field. Aligns to the inline end of the field.
 *
 * ### **CSS Properties:**
 *  - **--forge-field-background** - The background of the field surface. _(default: undefined)_
 * - **--forge-field-tonal-background** - The background of the field surface in the tonal variant. _(default: undefined)_
 * - **--forge-field-tonal-background-hover** - The background of the field surface in the tonal variant on hover. _(default: undefined)_
 * - **--forge-field-filled-background** - The background of the field surface in the filled and raised variants. _(default: undefined)_
 * - **--forge-field-outline-style** - The style of the field outline. _(default: undefined)_
 * - **--forge-field-outline-width** - The width of the field outline. _(default: undefined)_
 * - **--forge-field-shape** - The border radius of the field's corners. _(default: undefined)_
 * - **--forge-field-height** - The height of the field in its default density. _(default: undefined)_
 * - **--forge-field-inset-height** - The height of the field in its default density when the label is inset. _(default: undefined)_
 * - **--forge-field-padding-inline** - The inline padding of the field. _(default: undefined)_
 * - **--forge-field-padding-inline-start** - The inline start padding of the field. _(default: undefined)_
 * - **--forge-field-padding-inline-end** - The inline end padding of the field. _(default: undefined)_
 * - **--forge-field-inner-padding-inline** - The padding between elements slotted into the field. _(default: undefined)_
 * - **--forge-field-support-text-margin-block** - The margin between the support text and the field. _(default: undefined)_
 * - **--forge-field-support-text-gap** - The minimum gap between the support text and the support text end. _(default: undefined)_
 * - **--forge-field-support-text-padding-inline** - The inline padding of the support text. _(default: undefined)_
 * - **--forge-field-support-text-padding-inline-start** - The inline start padding of the support text. _(default: undefined)_
 * - **--forge-field-support-text-padding-inline-end** - The inline end padding of the support text. _(default: undefined)_
 * - **--forge-field-label-margin-inline** - The margin between the label and the field when the label is in an inline position. _(default: undefined)_
 * - **--forge-field-label-margin-block** - The margin between the label and the field when the label is in the block start position. _(default: undefined)_
 * - **--forge-field-required-padding** - The padding between the required indicator and the label. _(default: undefined)_
 * - **--forge-field-required-content** - The content of the required indicator. _(default: undefined)_
 * - **--forge-field-optional-padding** - The padding between the optional indicator and the label. _(default: undefined)_
 * - **--forge-field-optional-content** - The content of the optional indicator. _(default: undefined)_
 * - **--forge-field-multiline-resize** - The direction the field can be resized when multiline. _(default: undefined)_
 * - **--forge-field-multiline-min-inline-size** - The minimum inline size the field can be resized to when multiline. _(default: undefined)_
 * - **--forge-field-multiline-max-inline-size** - The maximum inline size the field can be resized to when multiline. _(default: undefined)_
 * - **--forge-field-multiline-min-block-size** - The minimum block size the field can be resized to when multiline. _(default: undefined)_
 * - **--forge-field-multiline-max-block-size** - The maximum block size the field can be resized to when multiline. _(default: undefined)_
 * - **--forge-field-popover-icon-transition-duration** - The duration of the popover icon animation. _(default: undefined)_
 * - **--forge-field-popover-icon-transition-timing** - The timing function of the popover icon animation. _(default: undefined)_
 * - **--forge-field-popover-icon-open-rotation** - The rotation of the popover icon when open. _(default: undefined)_
 * - **--forge-field-surface-animation-duration** - The duration of background and outline animations. _(default: undefined)_
 * - **--forge-field-surface-animation-timing** - The timing function of background and outline animations. _(default: undefined)_
 * - **--forge-field-surface-floating-animation-duration** - The duration of the floating label animation. _(default: undefined)_
 * - **--forge-field-surface-floating-animation-timing** - The timing function of the floating label animation. _(default: undefined)_
 * - **--forge-field-focus-indicator-width** - The width of the focus indicator. _(default: undefined)_
 * - **--forge-field-disabled-opacity** - The opacity of the field when disabled. _(default: undefined)_
 * - **--forge-field-disabled-background** - The background of the field when disabled. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The root container element.
 * - **label** - The label element.
 * - **input** - The element containing the input slot.
 * - **start** - The element containing the start slot.
 * - **end** - The element containing the end slot.
 * - **popover-icon** - The popover icon element.
 * - **accessory** - The element containing the accessory slot.
 * - **support-text** - The element containing the support text slot.
 * - **support-text-end** - The element containing the support text end slot.
 * - **focus-indicator** - The focus indicator element.
 */
export const FieldComponent: React.ForwardRefExoticComponent<FieldComponentProps>;
