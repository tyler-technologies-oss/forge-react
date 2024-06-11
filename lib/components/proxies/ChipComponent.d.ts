import {
  ChipComponent as ChipComponentElement,
  IChipDeleteEventData,
  IChipSelectEventData,
} from "@tylertech/forge/esm/chip";

export type {
  ChipComponentElement,
  IChipDeleteEventData,
  IChipSelectEventData,
};

export interface ChipComponentProps
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
  /** Whether the chip is selected. */
  selected?: boolean;

  /** Whether the chip is invalid. */
  invalid?: boolean;

  /** Whether the chip is disabled. */
  disabled?: boolean;

  /** Whether the chip is dense. */
  dense?: boolean;

  /** The type of chip. */
  type?: ChipComponentElement["type"];

  /** The value of the chip. */
  value?: ChipComponentElement["value"];

  /** The theme of the chip. */
  theme?: ChipComponentElement["theme"];

  /** The href of the chip. */
  href?: ChipComponentElement["href"];

  /** The target of the chip. */
  target?: ChipComponentElement["target"];

  /** The download of the chip. */
  download?: ChipComponentElement["download"];

  /** The rel of the chip. */
  rel?: ChipComponentElement["rel"];

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

  /** Event fired when the chip is deleted. */
  onForgeChipDelete?: (event: CustomEvent<IChipDeleteEventData>) => void;

  /** Event fired when the chip is selected. */
  onForgeChipSelect?: (event: CustomEvent<IChipSelectEventData>) => void;
}

/**
 *
 * ---
 *
 *
 * ### **Events:**
 *  - **forge-chip-delete** - Event fired when the chip is deleted.
 * - **forge-chip-select** - Event fired when the chip is selected.
 *
 * ### **Slots:**
 *  - _default_ - The content of the chip.
 * - **start** - The start content of the chip.
 * - **end** - The end content of the chip.
 *
 * ### **CSS Properties:**
 *  - **--forge-chip-background** - The background color of the chip. _(default: undefined)_
 * - **--forge-chip-color** - The background color of the chip. _(default: undefined)_
 * - **--forge-chip-shape** - The shape of the chip. _(default: undefined)_
 * - **--forge-chip-spacing** - The spacing between chips. _(default: undefined)_
 * - **--forge-chip-height** - The height of the chip. _(default: undefined)_
 * - **--forge-chip-padding-inline** - The inline padding of the chip. _(default: undefined)_
 * - **--forge-chip-padding-block** - The block padding of the chip. _(default: undefined)_
 * - **--forge-chip-cursor** - The cursor style of the chip. _(default: undefined)_
 * - **--forge-chip-icon-font-size** - The font size of the chip icon. _(default: undefined)_
 * - **--forge-chip-disabled-opacity** - The opacity of the disabled chip. _(default: undefined)_
 * - **--forge-chip-disabled-cursor** - The cursor style of the disabled chip. _(default: undefined)_
 * - **--forge-chip-dense-height** - The height of the dense chip. _(default: undefined)_
 * - **--forge-chip-dense-padding-inline** - The inline padding of the dense chip. _(default: undefined)_
 * - **--forge-chip-dense-spacing** - The spacing between dense chips. _(default: undefined)_
 * - **--forge-chip-dense-font-size** - The font size of the dense chip. _(default: undefined)_
 * - **--forge-chip-dense-font-weight** - The font weight of the dense chip. _(default: undefined)_
 * - **--forge-chip-dense-focus-indicator-offset** - The offset of the focus indicator for dense chips. _(default: undefined)_
 * - **--forge-chip-dense-icon-font-size** - The font size of the icon in dense chips. _(default: undefined)_
 * - **--forge-chip-remove-button-spacing** - The spacing of the remove button in chips. _(default: undefined)_
 * - **--forge-chip-remove-button-height-dense** - The height of the remove button in dense chips. _(default: undefined)_
 * - **--forge-chip-remove-button-icon-size-dense** - The icon size of the remove button in dense chips. _(default: undefined)_
 * - **--forge-chip-remove-button-spacing-dense** - The spacing of the remove button in dense chips. _(default: undefined)_
 * - **--forge-chip-selected-background** - The background color of the selected chip. _(default: undefined)_
 * - **--forge-chip-selected-color** - The text color of the selected chip. _(default: undefined)_
 * - **--forge-chip-invalid-color** - The text color of the invalid chip. _(default: undefined)_
 * - **--forge-chip-invalid-selected-background** - The background color of the invalid selected chip. _(default: undefined)_
 * - **--forge-chip-invalid-selected-color** - The text color of the invalid selected chip. _(default: undefined)_
 * - **--forge-chip-border-width** - The width of the chip border. _(default: undefined)_
 * - **--forge-chip-border-style** - The style of the chip border. _(default: undefined)_
 * - **--forge-chip-border-color** - The color of the chip border. _(default: undefined)_
 * - **--forge-chip-field-background** - The background color of the chip field. _(default: undefined)_
 * - **--forge-chip-field-color** - The text color of the chip field. _(default: undefined)_
 * - **--forge-chip-field-shape** - The shape of the chip field. _(default: undefined)_
 * - **--forge-chip-field-border-color** - The color of the chip field border. _(default: undefined)_
 * - **--forge-chip-field-cursor** - The cursor style of the chip field. _(default: undefined)_
 * - **--forge-chip-checkmark-size** - The size of the checkmark in chips. _(default: undefined)_
 * - **--forge-chip-checkmark-color** - The color of the checkmark in chips. _(default: undefined)_
 * - **--forge-chip-checkmark-spacing** - The spacing of the checkmark in chips. _(default: undefined)_
 * - **--forge-chip-avatar-size** - The size of the avatar in chips. _(default: undefined)_
 * - **--forge-chip-avatar-size-dense** - The size of the avatar in dense chips. _(default: undefined)_
 * - **--forge-chip-avatar-font-size** - The font size of the avatar in chips. _(default: undefined)_
 * - **--forge-chip-avatar-font-size-dense** - The font size of the avatar in dense chips. _(default: undefined)_
 * - **--forge-chip-avatar-spacing** - The spacing of the avatar in chips. _(default: undefined)_
 * - **--forge-chip-avatar-spacing-dense** - The spacing of the avatar in dense chips. _(default: undefined)_
 * - **--forge-chip-transition-duration** - The duration of the chip transition. _(default: undefined)_
 * - **--forge-chip-transition-easing** - The easing function of the chip transition. _(default: undefined)_
 * - **--forge-chip-checkmark-transition-delay** - The delay of the checkmark transition in chips. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **root** - The component's root element.
 * - **trigger** - The trigger element of the chip.
 * - **focus-indicator** - The focus indicator of the chip.
 * - **state-layer** - The state layer surface.
 */
export const ChipComponent: React.ForwardRefExoticComponent<ChipComponentProps>;
