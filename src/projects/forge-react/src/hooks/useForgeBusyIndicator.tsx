import { BusyIndicatorLayoutDirection, IBusyIndicatorComponent } from '@tylertech/forge';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export interface ForgeBusyIndicatorOptions extends Partial<IBusyIndicatorComponent> {
  busyIndicatorClass?: string;
  busyIndicatorAttributes?: Map<string, string>;
  hostElement?: HTMLElement;
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

  function show({ busyIndicatorClass, hostElement, busyIndicatorAttributes, ...options }: ForgeBusyIndicatorOptions = {}): IBusyIndicatorComponent {
    const busyIndicatorElement = controller.show(options);

    if (busyIndicatorAttributes) {
      busyIndicatorAttributes.forEach((value, key) => busyIndicatorElement.setAttribute(key, value));
    }

    if (busyIndicatorClass) {
      busyIndicatorElement.classList.add(busyIndicatorClass);
    }
    
    return busyIndicatorElement;
  }

  return [show, controller.hide];
};
