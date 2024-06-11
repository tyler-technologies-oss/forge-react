import { ChipFieldComponent as ChipFieldComponentElement } from "@tylertech/forge/esm/chip-field";

export type { ChipFieldComponentElement };

export interface ChipFieldComponentProps
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
  /** Whether or not to add chip when blur event */
  addOnBlur?: boolean;

  /** Whether the field is in an invalid state. */
  invalid?: boolean;

  /** Whether the field is required. */
  required?: boolean;

  /** Whether the field is optional. */
  optional?: boolean;

  /** Whether the field is disabled. */
  disabled?: boolean;

  /** Whether the label should float above the field. Only applies when the label is inset. */
  floatLabel?: boolean;

  /** Whether the field is dense. */
  dense?: boolean;

  /** Whether the field has a popover icon. */
  popoverIcon?: boolean;

  /** Whether the field's popover is expanded. */
  popoverExpanded?: boolean;

  /** The position of the label relative to the field. */
  labelPosition?: ChipFieldComponentElement["labelPosition"];

  /** The alignment of the label relative to the field. */
  labelAlignment?: ChipFieldComponentElement["labelAlignment"];

  /** The variant of the field. */
  variant?: ChipFieldComponentElement["variant"];

  /** The theme of the field. */
  theme?: ChipFieldComponentElement["theme"];

  /** The shape of the field. */
  shape?: ChipFieldComponentElement["shape"];

  /** The density of the field. */
  density?: ChipFieldComponentElement["density"];

  /** The inset of the support text. */
  supportTextInset?: ChipFieldComponentElement["supportTextInset"];

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

  /** The target element for the popover. */
  popoverTargetElement?: ChipFieldComponentElement["popoverTargetElement"];

  /** Dispatches when the user toggles the button. */
  onForgeButtonToggleSelect?: (
    event: CustomEvent<CustomEvent<IButtonToggleSelectEventData>>
  ) => void;

  /** Dispatches when the user clicks the popover icon. */
  onForgeFieldPopoverIconClick?: (
    event: CustomEvent<CustomEvent<void>>
  ) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-button-toggle-select** - Dispatches when the user toggles the button.
 * - **forge-field-popover-icon-click** - Dispatches when the user clicks the popover icon.
 *
 * ### **Methods:**
 *  - **floatLabelWithoutAnimation(value: _boolean_): _void_** - Floats the label immediately. Only applies when the label is inset.
 *
 * ### **Slots:**
 *  - _default_ - The default/unnamed slot for the field's input.
 * - **label** - Renders its content as a positioned label.
 * - **start** - Typically reserved for content/icons that render logically before the default slot content.
 * - **end** - Typically reserved content/icons that render logically after the default slot content.
 * - **accessory** - Used for content such as a button that is logically connected to the field but should appear distinct from the input
 * - **support-text** - Used for content that provides additional information about the field. Aligns to the inline start of the field.
 * - **support-text-end** - Used for content that provides additional information about the field. Aligns to the inline end of the field.
 *
 * ### **CSS Properties:**
 *  - **--forge-chip-field-member-spacing** - The spacing between chip members. _(default: undefined)_
 * - **--forge-chip-field-content-spacing** - The spacing around chips group. _(default: undefined)_
 * - **--forge-field-background** - The background of the field surface. _(default: undefined)_
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
 * - **support-text** - The support text element.
 * - **support-text-end** - The element containing the support text end slot.
 * - **focus-indicator** - The focus indicator element.
 */
export const ChipFieldComponent: React.ForwardRefExoticComponent<ChipFieldComponentProps>;
