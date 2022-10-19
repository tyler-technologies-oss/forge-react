import {
  IAccordionComponent,
  IAppBarComponent,
  IAppBarHelpButtonComponent,
  IAppBarMenuButtonComponent,
  IAppBarNotificationButtonComponent,
  IAppBarProfileButtonComponent,
  IAppBarSearchComponent,
  IAutocompleteComponent,
  IAvatarComponent,
  IBackdropComponent,
  IBadgeComponent,
  IBannerComponent,
  IBottomSheetComponent,
  IBusyIndicatorComponent,
  IButtonComponent,
  IButtonToggleComponent,
  IButtonToggleGroupComponent,
  ICalendarComponent,
  ICardComponent,
  ICheckboxComponent,
  IChipComponent,
  IChipFieldComponent,
  IChipSetComponent,
  ICircularProgressComponent,
  IColorPickerComponent,
  IDatePickerComponent,
  IDateRangePickerComponent,
  IDialogComponent,
  IDividerComponent,
  IDrawerComponent,
  IExpansionPanelComponent,
  IFilePickerComponent,
  IFloatingActionButtonComponent,
  IIconButtonComponent,
  IIconComponent,
  IInlineMessageComponent,
  IKeyboardShortcutComponent,
  ILabelValueComponent,
  ILinearProgressComponent,
  IListComponent,
  IListItemComponent,
  IMenuComponent,
  IMiniDrawerComponent,
  IModalDrawerComponent,
  IOpenIconComponent,
  IOptionComponent,
  IOptionGroupComponent,
  IPageStateComponent,
  IPaginatorComponent,
  IPopupComponent,
  IProductIconComponent,
  IProfileCardComponent,
  IQuantityFieldComponent,
  IRadioComponent,
  IRippleComponent,
  IScaffoldComponent,
  ISelectComponent,
  ISelectDropdownComponent,
  ISkeletonComponent,
  ISliderComponent,
  IStepComponent,
  IStepperComponent,
  ISwitchComponent,
  ITabBarComponent,
  ITabComponent,
  ITableComponent,
  ITextFieldComponent,
  ITimePickerComponent,
  IToastComponent,
  IToolbarComponent,
  ITooltipComponent,
  IViewComponent,
  IViewSwitcherComponent
} from '@tylertech/forge';

export * from './components';
export * from './hooks';
export * from './utils';

export type HTMLElementProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
export type CustomElementProps<T> = HTMLElementProps & Partial<T>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'forge-accordion': CustomElementProps<IAccordionComponent>;
      'forge-app-bar': CustomElementProps<IAppBarComponent>;
      'forge-app-bar-help-button': CustomElementProps<IAppBarHelpButtonComponent>;
      'forge-app-bar-menu-button': CustomElementProps<IAppBarMenuButtonComponent>;
      'forge-app-bar-notification-button': CustomElementProps<IAppBarNotificationButtonComponent>;
      'forge-app-bar-profile-button': CustomElementProps<IAppBarProfileButtonComponent>;
      'forge-app-bar-search': CustomElementProps<IAppBarSearchComponent>;
      'forge-autocomplete': CustomElementProps<IAutocompleteComponent>;
      'forge-avatar': CustomElementProps<IAvatarComponent>;
      'forge-backdrop': CustomElementProps<IBackdropComponent>;
      'forge-badge': CustomElementProps<IBadgeComponent>;
      'forge-banner': CustomElementProps<IBannerComponent>;
      'forge-bottom-sheet': CustomElementProps<IBottomSheetComponent>;
      'forge-busy-indicator': CustomElementProps<IBusyIndicatorComponent>;
      'forge-button': CustomElementProps<IButtonComponent>;
      'forge-button-toggle': CustomElementProps<IButtonToggleComponent>;
      'forge-button-toggle-group': CustomElementProps<IButtonToggleGroupComponent>;
      'forge-calendar': CustomElementProps<ICalendarComponent>;
      'forge-card': CustomElementProps<ICardComponent>;
      'forge-checkbox': CustomElementProps<ICheckboxComponent>;
      'forge-chip-field': CustomElementProps<IChipFieldComponent>;
      'forge-chip-set': CustomElementProps<IChipSetComponent>;
      'forge-chip': CustomElementProps<IChipComponent>;
      'forge-circular-progress': CustomElementProps<ICircularProgressComponent>;
      'forge-color-picker': CustomElementProps<IColorPickerComponent>;
      'forge-date-range-picker': CustomElementProps<IDateRangePickerComponent>;
      'forge-datepicker': CustomElementProps<IDatePickerComponent>;
      'forge-dialog': CustomElementProps<IDialogComponent>;
      'forge-divider': CustomElementProps<IDividerComponent>;
      'forge-drawer': CustomElementProps<IDrawerComponent>;
      'forge-mini-drawer': CustomElementProps<IMiniDrawerComponent>;
      'forge-modal-drawer': CustomElementProps<IModalDrawerComponent>;
      'forge-expansion-panel': CustomElementProps<IExpansionPanelComponent>;
      'forge-file-picker': CustomElementProps<IFilePickerComponent>;
      'forge-floating-action-button': CustomElementProps<IFloatingActionButtonComponent>;
      'forge-icon': CustomElementProps<IIconComponent>;
      'forge-icon-button': CustomElementProps<IIconButtonComponent>;
      'forge-inline-message': CustomElementProps<IInlineMessageComponent>;
      'forge-keyboard-shortcut': CustomElementProps<IKeyboardShortcutComponent>;
      'forge-label-value': CustomElementProps<ILabelValueComponent>;
      'forge-linear-progress': CustomElementProps<ILinearProgressComponent>;
      'forge-list': CustomElementProps<IListComponent>;
      'forge-list-item': CustomElementProps<IListItemComponent>;
      'forge-menu': CustomElementProps<IMenuComponent>;
      'forge-profile-card': CustomElementProps<IProfileCardComponent>;
      'forge-open-icon': CustomElementProps<IOpenIconComponent>;
      'forge-page-state': CustomElementProps<IPageStateComponent>;
      'forge-paginator': CustomElementProps<IPaginatorComponent>;
      'forge-popup': CustomElementProps<IPopupComponent>;
      'forge-product-icon': CustomElementProps<IProductIconComponent>;
      'forge-quantity-field': CustomElementProps<IQuantityFieldComponent>;
      'forge-radio': CustomElementProps<IRadioComponent>;
      'forge-ripple': CustomElementProps<IRippleComponent>;
      'forge-scaffold': CustomElementProps<IScaffoldComponent>;
      'forge-select': CustomElementProps<ISelectComponent>;
      'forge-select-dropdown': CustomElementProps<ISelectDropdownComponent>;
      'forge-option': CustomElementProps<IOptionComponent>;
      'forge-option-group': CustomElementProps<IOptionGroupComponent>;
      'forge-skeleton': CustomElementProps<ISkeletonComponent>;
      'forge-slider': CustomElementProps<ISliderComponent>;
      'forge-stepper': CustomElementProps<IStepperComponent>;
      'forge-step': CustomElementProps<IStepComponent>;
      'forge-switch': CustomElementProps<ISwitchComponent>;
      'forge-table': CustomElementProps<ITableComponent>;
      'forge-tab': CustomElementProps<ITabComponent>;
      'forge-tab-bar': CustomElementProps<ITabBarComponent>;
      'forge-text-field': CustomElementProps<ITextFieldComponent>;
      'forge-time-picker': CustomElementProps<ITimePickerComponent>;
      'forge-toast': CustomElementProps<IToastComponent>;
      'forge-toolbar': CustomElementProps<IToolbarComponent>;
      'forge-tooltip': CustomElementProps<ITooltipComponent>;
      'forge-view': CustomElementProps<IViewComponent>;
      'forge-view-switcher': CustomElementProps<IViewSwitcherComponent>;
    }
  }
};
