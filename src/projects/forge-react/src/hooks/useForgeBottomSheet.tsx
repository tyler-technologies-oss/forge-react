import { BOTTOM_SHEET_CONSTANTS, IBottomSheetComponent } from '@tylertech/forge';
import { ForgeBottomSheetOptions } from '..';
import { ReactComponentOrElements } from '../utils';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export type UseForgeBottomSheetResult = [
  (options?: ForgeBottomSheetOptions, dismissCallback?: () => void) => IBottomSheetComponent,
  () => void
];

const BOTTOM_SHEET_CLOSE_ANIMATION_DURATION = 200;

export const useForgeBottomSheet = (component: ReactComponentOrElements, componentProps?: any): UseForgeBottomSheetResult => {
  const delegate: UseDynamicComponentDelegate<IBottomSheetComponent> = {
    show: instance => instance.open = true,
    // eslint-disable-next-line arrow-body-style
    hide: (instance, cb) => {
      return new Promise<void>(resolve => {
        instance.open = false;
        setTimeout(() => {
          if (typeof cb === 'function') {
            cb();
          }
          resolve();
        }, BOTTOM_SHEET_CLOSE_ANIMATION_DURATION); // Wait for the close animation to complete
      });
    }
  };
  const controller = useDynamicForgeComponent('forge-bottom-sheet', component, componentProps, delegate);

  function show({ bottomSheetAttributes, bottomSheetClass, ...options }: ForgeBottomSheetOptions = {}, dismissCallback?: () => void): IBottomSheetComponent {
    const bottomSheetElement = controller.show(options);

    if (bottomSheetAttributes) {
      bottomSheetAttributes.forEach((value, key) => bottomSheetElement.setAttribute(key, value));
    }

    if (bottomSheetClass) {
      bottomSheetElement.classList.add(bottomSheetClass);
    }

    bottomSheetElement.addEventListener(BOTTOM_SHEET_CONSTANTS.events.CLOSE, () => {
      controller.hide();
      if (typeof dismissCallback === 'function') {
        dismissCallback();
      }
    });

    return bottomSheetElement;
  }

  return [show, controller.hide];
};
