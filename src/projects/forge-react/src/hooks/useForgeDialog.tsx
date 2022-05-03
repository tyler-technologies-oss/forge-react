import { DIALOG_CONSTANTS, IDialogComponent } from '@tylertech/forge';
import { ForgeDialogOptions } from '..';
import { ReactComponentOrElements } from '../utils';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export type UseForgeDialogResult = [
  (options?: ForgeDialogOptions, dismissCallback?: () => void) => IDialogComponent,
  () => void
];

export const useForgeDialog = (component: ReactComponentOrElements, componentProps?: any): UseForgeDialogResult => {
  const delegate: UseDynamicComponentDelegate<IDialogComponent> = {
    show: instance => instance.open = true,
    hide: instance => {
      instance.open = false;
    }
  };
  const controller = useDynamicForgeComponent('forge-dialog', component, componentProps, delegate);

  function show({ dialogAttributes, dialogClass, ...options }: ForgeDialogOptions = {}, dismissCallback?: () => void): IDialogComponent {
    const dialogElement = controller.show(options);

    if (dialogAttributes) {
      dialogAttributes.forEach((value, key) => dialogElement.setAttribute(key, value));
    }

    if (dialogClass) {
      dialogElement.classList.add(dialogClass);
    }

    dialogElement.addEventListener(DIALOG_CONSTANTS.events.CLOSE, () => {
      controller.hide();
      if (typeof dismissCallback === 'function') {
        dismissCallback();
      }
    });
    return dialogElement;
  }

  return [show, controller.hide];
};
