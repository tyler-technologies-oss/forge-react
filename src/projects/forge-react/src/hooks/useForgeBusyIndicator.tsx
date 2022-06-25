import { BUSY_INDICATOR_CONSTANTS, IBusyIndicatorComponent } from '@tylertech/forge';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export interface ForgeBusyIndicatorOptions extends Partial<IBusyIndicatorComponent> {
  busyIndicatorClass?: string;
  busyIndicatorAttributes?: Map<string, string>;
  hostElement?: HTMLElement;
  cancelCallback?: () => void;
}

export type UseForgeBusyIndicatorResult = [
  (options?: ForgeBusyIndicatorOptions) => IBusyIndicatorComponent,
  () => void
];

export const useForgeBusyIndicator = (): UseForgeBusyIndicatorResult => {
  const delegate: UseDynamicComponentDelegate<IBusyIndicatorComponent> = {
    hide: instance => instance.hide(true)
  };
  const controller = useDynamicForgeComponent('forge-busy-indicator', undefined, undefined, delegate);

  function show({ busyIndicatorClass, hostElement, busyIndicatorAttributes, cancelCallback, ...options }: ForgeBusyIndicatorOptions = {}): IBusyIndicatorComponent {
    const busyIndicatorElement = controller.show(options);

    if (busyIndicatorAttributes) {
      busyIndicatorAttributes.forEach((value, key) => busyIndicatorElement.setAttribute(key, value));
    }

    if (busyIndicatorClass) {
      busyIndicatorElement.classList.add(busyIndicatorClass);
    }

    if (typeof cancelCallback === 'function') {
      busyIndicatorElement.addEventListener(BUSY_INDICATOR_CONSTANTS.events.CANCEL, () => cancelCallback());
    }
    
    return busyIndicatorElement;
  }

  return [show, controller.hide];
};
