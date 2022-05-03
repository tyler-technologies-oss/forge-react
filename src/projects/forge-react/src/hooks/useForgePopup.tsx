import { IPopupComponent, PopupAnimationType, POPUP_CONSTANTS } from '@tylertech/forge';
import { MutableRefObject } from 'react';
import { ForgePopupOptions } from '..';
import { ReactComponentOrElements } from '../utils';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export type UseForgePopupResult = [
  (targetRef: MutableRefObject<any>, options?: ForgePopupOptions, dismissCallback?: () => void) => IPopupComponent,
  () => void
];

export function useForgePopup(component: ReactComponentOrElements, componentProps?: any): UseForgePopupResult {
  const delegate: UseDynamicComponentDelegate<IPopupComponent, ForgePopupOptions> = {
    show: (instance, options) => {
      // Set default options
      instance.static = options?.static || false;
      instance.manageFocus = false;
      instance.animationType = PopupAnimationType.Dropdown;

      // We need to set the target element before the element is initialized to avoid an exception from Forge
      if (options?.targetElement) {
        instance.targetElement = options.targetElement;
      }

      instance.open = true;
    },
    // eslint-disable-next-line arrow-body-style
    hide: (instance, cb) => {
      return new Promise<void>(resolve => {
        instance.open = false;
        setTimeout(() => {
          if (typeof cb === 'function') {
            cb();
          }
          resolve();
        }, POPUP_CONSTANTS.numbers.ANIMATION_DURATION); // Wait for the close animation to complete
      });
    }
  };
  const controller = useDynamicForgeComponent('forge-popup', component, componentProps, delegate);

  function show(targetElement: MutableRefObject<any>, { popupAttributes, popupClass,  ...options }: ForgePopupOptions = {}, dismissCallback?: () => void): IPopupComponent {
    const popupElement = controller.show({ targetElement: targetElement.current, ...options });

    if (popupAttributes) {
      popupAttributes.forEach((value, key) => popupElement.setAttribute(key, value));
    }

    if (popupClass) {
      popupElement.classList.add(popupClass);
    }

    if (options.static !== true) {
      targetElement.current.addEventListener(POPUP_CONSTANTS.events.BLUR, () => {
        controller.hide();
        if (typeof dismissCallback === 'function') {
          dismissCallback();
        }
      });
    }

    return popupElement;
  }

  return [show, controller.hide];
};
