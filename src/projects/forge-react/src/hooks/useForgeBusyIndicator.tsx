import { BusyIndicatorLayoutDirection, IBusyIndicatorComponent } from '@tylertech/forge';
import { useDynamicForgeComponent, UseDynamicComponentDelegate } from './useDynamicForgeComponent';

export interface ForgeBusyIndicatorOptions {
  busyIndicatorClass?: string;
  attributes?: Map<string, string>;
  parentElement?: HTMLElement;
  titleText?: string;
  message?: string;
  cancel?: boolean;
  spinner?: boolean;
  progressBar?: boolean;
  progressBarDeterminate?: boolean;
  progress?: number;
  buffer?: number;
  width?: number | 'auto';
  direction?: BusyIndicatorLayoutDirection;
  manageFocus?: boolean;
  fixed?: boolean;
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

  function show({ busyIndicatorClass, parentElement, attributes, ...options }: ForgeBusyIndicatorOptions = {}): IBusyIndicatorComponent {
    const busyIndicatorElement = controller.show(options);

    if (attributes) {
      attributes.forEach((value, key) => busyIndicatorElement.setAttribute(key, value));
    }

    if (busyIndicatorClass) {
      busyIndicatorElement.classList.add(busyIndicatorClass);
    }
    
    return busyIndicatorElement;
  }

  return [show, controller.hide];
};
