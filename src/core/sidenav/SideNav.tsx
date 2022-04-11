/* eslint-disable arrow-body-style */
import { PropsWithChildren, useEffect, useState } from 'react';
import { IListItemSelectEventData, IconRegistry } from '@tylertech/forge';
import { tylIconHome, tylIconSettingsInputComponent, tylIconSettings } from '@tylertech/tyler-icons/standard';
import { ForgeDrawer, ForgeExpansionPanel, ForgeIcon, ForgeList, ForgeListItem, ForgeOpenIcon } from 'src/projects/forge-react/src';
import { useHistory } from 'react-router';
import routeConfig, { IAppRoute } from '../../route-config';

type SideNavProps = {
  open: boolean;
  slot: string;
};

function SideNav(props: PropsWithChildren<SideNavProps>): JSX.Element {
  const history = useHistory();
  const [selectedRoute, setSelectedRoute] = useState(history.location.pathname);

  useEffect(() => {
    IconRegistry.define([
      tylIconHome,
      tylIconSettingsInputComponent,
      tylIconSettings
    ]);
  }, []);

  function onSelect(evt: CustomEvent<IListItemSelectEventData>): void {
    if (evt.detail.value === undefined) {
      return;
    }
    history.push(evt.detail.value);
    setSelectedRoute(evt.detail.value);
  }

  return (
    <ForgeDrawer slot={props.slot} open={props.open ? true : null}>
      <aside>
        <ForgeList on-forge-list-item-select={onSelect} selectedValue={selectedRoute}>
          <SideNavRouterRenderer config={routeConfig} selectedRoute={selectedRoute} />
        </ForgeList>
      </aside>
    </ForgeDrawer>
  );
}

function SideNavRouterRenderer({ config, selectedRoute, parentRoute }: { config: IAppRoute[]; selectedRoute: string; parentRoute?: string }): JSX.Element {
  return (
    <>
      {config.map(({ path, icon, text, routes }, i) => {
        if (!routes) {
          return (
            <ForgeListItem key={i} value={`${parentRoute || ''}${path}`}>
              {icon && <ForgeIcon slot="leading" name={icon} />}
              {text}
            </ForgeListItem>
          );
        }
        return <SideNavExpandableItem key={i} route={{ path, icon, text, routes }} selectedRoute={selectedRoute} />;
      })}
    </>
  );
}

function SideNavExpandableItem({ route, selectedRoute }: { route: IAppRoute; selectedRoute: string }): JSX.Element {
  return (
    <ForgeExpansionPanel open={selectedRoute.startsWith(route.path)}>
      <ForgeListItem slot="header">
        <ForgeIcon name={route.icon} slot="leading" />
        {route.text}
        <ForgeOpenIcon slot="trailing" />
      </ForgeListItem>

      {route.routes &&
        <ForgeList indented>
          <SideNavRouterRenderer config={route.routes} selectedRoute={selectedRoute} parentRoute={route.path} />
        </ForgeList>}
    </ForgeExpansionPanel>
  );
}

export default SideNav;
