import { RouteProps } from 'react-router';
import { AccordionDemo } from './demos/accordion/AccordionDemo';
import { ButtonDemo } from './demos/button/ButtonDemo';
import { TableDemo } from './demos/table/TableDemo';
import { Home } from './core/home/Home';
import { AvatarDemo } from './demos/avatar/AvatarDemo';
import { BadgeDemo } from './demos/badge/BadgeDemo';
import { BannerDemo } from './demos/banner/BannerDemo';
import { StackDemo } from './demos/stack/StackDemo';
import { BottomSheetDemo } from './demos/bottom-sheet/BottomSheetDemo';
import { ToastDemo } from './demos/toast/ToastDemo';
import { DialogDemo } from './demos/dialog/DialogDemo';
import { BusyIndicatorDemo } from './demos/busy-indicator/BusyIndicatorDemo';
import { PopupDemo } from './demos/popup/PopupDemo';

export interface IAppRoute extends RouteProps {
  path: string;
  routes?: IAppRoute[];
  text?: string;
  icon?: string;
}

const routes: IAppRoute[] = [
  { path: '/', component: Home, exact: true, text: 'Home', icon: 'home' },
  {
    path: '/components',
    text: 'Components',
    icon: 'settings_input_component',
    routes: [
      { path: '/accordion', component: AccordionDemo, text: 'Accordion' },
      { path: '/avatar', component: AvatarDemo, text: 'Avatar' },
      { path: '/badge', component: BadgeDemo, text: 'Badge' },
      { path: '/banner', component: BannerDemo, text: 'Banner' },
      { path: '/bottom-sheet', component: BottomSheetDemo, text: 'Bottom sheet' },
      { path: '/busy-indicator', component: BusyIndicatorDemo, text: 'Busy indicator' },
      { path: '/button', component: ButtonDemo, text: 'Button' },
      { path: '/dialog', component: DialogDemo, text: 'Dialog' },
      { path: '/popup', component: PopupDemo, text: 'Popup' },
      { path: '/stack', component: StackDemo, text: 'Stack' },
      { path: '/table', component: TableDemo, text: 'Table' },
      { path: '/toast', component: ToastDemo, text: 'Toast' }
    ]
  }
];

export default routes;
