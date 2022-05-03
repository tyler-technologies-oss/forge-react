import { IPopupComponent, POPUP_CONSTANTS } from '@tylertech/forge';
import { MutableRefObject } from 'react';
import { createOverlayComponent, IOverlayController, OverlayProps } from '../core/createOverlayComponent';

export interface ForgePopupOptions extends Partial<IPopupComponent> {
  popupAttributes?: Map<string, string>;
  popupClass?: string;
}

export type ReactPopupProps = OverlayProps & {
  options?: ForgePopupOptions;
  targetElementRef: MutableRefObject<HTMLElement | undefined | null>;
};

const controller: IOverlayController<IPopupComponent, ReactPopupProps> = {
  create: createPopup,
  show: element => element.open = true,
  hide: element => {
    element.open = false;
  }
};

function createPopup({ options, targetElementRef }: ReactPopupProps, dismissCallback: () => void): IPopupComponent {
  const element = document.createElement('forge-popup');

  if (targetElementRef.current) {
    element.targetElement = targetElementRef.current;

    if (!options || options.static !== true) {
      targetElementRef.current.addEventListener(POPUP_CONSTANTS.events.BLUR, () => {
        if (typeof dismissCallback === 'function') {
          dismissCallback();
        }
      });
    }
  }

  if (options) {
    const { popupAttributes, popupClass, ...rest } = options;
    Object.assign(element, rest);
    
    if (popupAttributes) {
      popupAttributes.forEach((value, key) => element.setAttribute(key, value));
    }

    if (popupClass) {
      element.classList.add(popupClass);
    }
  }

  return element;
}

export const ForgePopup = createOverlayComponent<ReactPopupProps, IPopupComponent>(controller);
