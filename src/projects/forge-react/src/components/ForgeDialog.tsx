import { DIALOG_CONSTANTS, IDialogComponent } from '@tylertech/forge';
import { createOverlayComponent, IOverlayController, OverlayProps } from '../core/createOverlayComponent';

export interface ForgeDialogOptions extends Partial<IDialogComponent> {
  dialogAttributes?: Map<string, string>;
  dialogClass?: string;
}

export type ReactDialogProps = OverlayProps & {
  options?: ForgeDialogOptions;
};

const controller: IOverlayController<IDialogComponent, ReactDialogProps> = {
  create: createDialog,
  show: element => element.open = true,
  hide: element => {
    element.open = false;
  }
};

function createDialog({ options }: ReactDialogProps, dismissCallback: () => void): IDialogComponent {
  const element = document.createElement('forge-dialog');

  if (options) {
    const { dialogAttributes, dialogClass, ...rest } = options;
    Object.assign(element, rest);

    if (dialogAttributes) {
      dialogAttributes.forEach((value, key) => element.setAttribute(key, value));
    }

    if (dialogClass) {
      element.classList.add(dialogClass);
    }
  }

  // Listen for the close event in case the bottom sheet is closed via escape key or backdrop click
  element.addEventListener(DIALOG_CONSTANTS.events.CLOSE, () => {
    if (typeof dismissCallback === 'function') {
      dismissCallback();
    }
  });

  return element;
}

export const ForgeDialog = createOverlayComponent<ReactDialogProps, IDialogComponent>(controller);
