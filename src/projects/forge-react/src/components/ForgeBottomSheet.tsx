import { BOTTOM_SHEET_CONSTANTS, IBottomSheetComponent } from '@tylertech/forge';
import { createOverlayComponent, IOverlayController, OverlayProps } from '../core/createOverlayComponent';

export interface ForgeBottomSheetOptions extends Partial<IBottomSheetComponent> {
  bottomSheetClass?: string;
  bottomSheetAttributes?: Map<string, string>;
}

export type ReactBottomSheetProps = OverlayProps & {
  options?: ForgeBottomSheetOptions;
};

const BOTTOM_SHEET_CLOSE_ANIMATION_DURATION = 200;

const controller: IOverlayController<IBottomSheetComponent, ReactBottomSheetProps> = {
  create: createBottomSheet,
  show: element => element.open = true,
  // eslint-disable-next-line arrow-body-style
  hide: element => {
    return new Promise<void>(resolve => {
      element.open = false;
      setTimeout(() => resolve(), BOTTOM_SHEET_CLOSE_ANIMATION_DURATION);
    });
  }
};

function createBottomSheet({ options }: ReactBottomSheetProps, dismissCallback: () => void): IBottomSheetComponent {
  const element = document.createElement('forge-bottom-sheet');

  if (options) {
    const { bottomSheetAttributes, bottomSheetClass, ...rest } = options;
    Object.assign(element, rest);

    if (bottomSheetAttributes) {
      bottomSheetAttributes.forEach((value, key) => element.setAttribute(key, value));
    }

    if (bottomSheetClass) {
      element.classList.add(bottomSheetClass);
    }
  }

  // Listen for the close event in case the bottom sheet is closed via escape key or backdrop click
  element.addEventListener(BOTTOM_SHEET_CONSTANTS.events.CLOSE, () => {
    if (typeof dismissCallback === 'function') {
      dismissCallback();
    }
  });

  return element;
}

export const ForgeBottomSheet = createOverlayComponent<ReactBottomSheetProps, IBottomSheetComponent>(controller);
