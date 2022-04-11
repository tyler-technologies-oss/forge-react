import { IToastComponent, PopupPlacement, TOAST_CONSTANTS } from '@tylertech/forge';
import { ForgeToastOptions } from '..';
import { ReactComponentOrElements } from '../utils';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export type UseForgeToastResult = [
  (options?: ForgeToastOptions, dismissCallback?: () => void) => IToastComponent,
  () => void
];

export const useForgeToast = (component?: ReactComponentOrElements, componentProps?: any): UseForgeToastResult => {
  const delegate: UseDynamicComponentDelegate<IToastComponent> = {
    // eslint-disable-next-line arrow-body-style
    hide: () => {
      return new Promise<void>(resolve => {
        setTimeout(() => resolve(), 250); // Wait for the toast animation to complete
      });
    }
  };
  const controller = useDynamicForgeComponent('forge-toast', component, componentProps, delegate);

  function show(options?: ForgeToastOptions, dismissCallback?: () => void): IToastComponent {
    const toastElement = controller.show(options);

    // We need to attach a listener for the actions if the consumer cares to respond to it
    const actionHandler = options?.actionHandler;
    if (typeof actionHandler === 'function') {
      toastElement.addEventListener(TOAST_CONSTANTS.events.ACTION, () => actionHandler());
    }
    
    // We need to listen for the component automatically hiding itself so we can update our state
    toastElement.addEventListener(TOAST_CONSTANTS.events.CLOSE, () => {
      controller.hide();
      if (typeof dismissCallback === 'function') {
        dismissCallback();
      }
    });

    return toastElement;
  }

  return [show, controller.hide];
};
