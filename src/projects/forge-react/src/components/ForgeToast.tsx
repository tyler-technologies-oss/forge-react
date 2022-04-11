import { IToastComponent, PopupPlacement, TOAST_CONSTANTS } from '@tylertech/forge';
import { createOverlayComponent, IOverlayController, OverlayProps } from '../core/createOverlayComponent';

export interface ForgeToastOptions {
  message?: string;
  actionText?: string;
  actionHandler?: () => void;
  placement?: PopupPlacement;
  duration?: number;
  showClose?: boolean;
}

export type ReactToastProps = OverlayProps & {
  options?: ForgeToastOptions;
};

const TOAST_CLOSE_DURATION = 250;

const controller: IOverlayController<IToastComponent, ReactToastProps> = {
  create: createToast,
  show: el => document.body.appendChild(el),
  hide: el => new Promise<void>(resolve => setTimeout(() => resolve(), TOAST_CLOSE_DURATION)),
  update: (el, { options }) => {
    if (!options) {
      return;
    }
    const { actionHandler, ...rest } = options;
    if (rest) {
      Object.assign(el, rest);
    }
  }
};

function createToast({ options }: ReactToastProps, dismissCallback: () => void): IToastComponent {
  const element = document.createElement('forge-toast');

  if (options) {
    const { actionHandler, ...rest } = options;
    if (rest) {
      Object.assign(element, rest);
    }

    // Listen for the actions if the consumer cares to respond to it
    if (typeof actionHandler === 'function') {
      element.addEventListener(TOAST_CONSTANTS.events.ACTION, () => actionHandler());
    }
  }
  
  // Listen for the component automatically hiding itself
  element.addEventListener(TOAST_CONSTANTS.events.CLOSE, dismissCallback);

  return element;
}

export const ForgeToast = createOverlayComponent<ReactToastProps, IToastComponent>(controller);
