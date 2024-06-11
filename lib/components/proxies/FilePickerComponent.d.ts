import { FilePickerComponent as FilePickerComponentElement } from "@tylertech/forge/esm/file-picker";

export type { FilePickerComponentElement };

export interface FilePickerComponentProps
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
  /** Gets/sets whether multiple files are allowed. */
  multiple?: boolean;

  /** Gets/sets whether the file picker is disabled. */
  disabled?: boolean;

  /** Gets/sets whether the file picker uses the compact variant. */
  compact?: boolean;

  /** Gets and sets whether the file picker is borderless. */
  borderless?: boolean;

  /** Gets/sets the allowed file types. */
  accept?: FilePickerComponentElement["accept"];

  /** Gets/sets the maximum allowed file size. */
  maxsize?: FilePickerComponentElement["maxsize"];

  /** Gets/sets the camera to use when capturing video or images. */
  capture?: FilePickerComponentElement["capture"];

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

  /** Gets/sets the maximum allowed file size. */
  maxSize?: FilePickerComponentElement["maxSize"];
}

/**
 * The file-picker component allows for a user to upload files of their own to the system. The component provides a slot for a
 * button, as well as drag-and-drop functionality to launch the system file chooser dialog. There are visual queues to let the
 * user know when files they are dragging can be dropped, as well as events that are relayed to the developer to handle files
 * that are legal and/or illegal based on the parameters set on the component.
 *
 * The expectation of this component is that it will be used as a familiar element on the page that will let users upload files,
 * while providing that visual and functional consistency.
 * ---
 *
 *
 * ### **CSS Properties:**
 *  - **--forge-file-picker-background** - Controls the background color. _(default: undefined)_
 * - **--forge-file-picker-width** - Controls the width. _(default: undefined)_
 * - **--forge-file-picker-height** - Controls the height. _(default: undefined)_
 * - **--forge-file-picker-max-width** - Controls the maximum width. _(default: undefined)_
 * - **--forge-file-picker-border-width** - Controls the border width. _(default: undefined)_
 * - **--forge-file-picker-border-style** - Controls the border style. _(default: undefined)_
 * - **--forge-file-picker-border-color** - Controls the border color. _(default: undefined)_
 * - **--forge-file-picker-gap** - Controls gap between each element. _(default: undefined)_
 * - **--forge-file-picker-padding** - Controls the padding. _(default: undefined)_
 * - **--forge-file-picker-padding-block** - Controls the top and bottom padding. _(default: undefined)_
 * - **--forge-file-picker-padding-inline** - Controls the left and right padding. _(default: undefined)_
 * - **--forge-file-picker-disabled-opacity** - Controls the opacity value of the file picker when it's disabled. _(default: undefined)_
 * - **--forge-file-picker-highlight-background** - Controls the background color of the file picker when dragging files into the form. _(default: undefined)_
 * - **--forge-file-picker-highlight-border-color** - Controls the border color of the file picker when dragging files into the form. _(default: undefined)_
 *
 * ### **CSS Parts:**
 *  - **form** - The <form> element at the root.
 * - **primary** - The container element around the primary slot.
 * - **secondary** - The container element around the secondary slot.
 * - **input** - The <input type="file"> element.
 * - **helper-text-container** - The container around the helper-text slot.
 */
export const FilePickerComponent: React.ForwardRefExoticComponent<FilePickerComponentProps>;
