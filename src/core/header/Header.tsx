import { IconRegistry } from '@tylertech/forge';
import { PropsWithChildren, useEffect } from 'react';
import { ForgeAppBar, ForgeAppBarMenuButton, ForgeIcon } from 'src/projects/forge-react/src';
import { tylIconTylerTalkingTLogo } from '@tylertech/tyler-icons/custom';

export interface HeaderProps {
  onToggleMenu: () => void;
  slot: string;
}

function Header(props: PropsWithChildren<HeaderProps>): JSX.Element {
  useEffect(() => {
    IconRegistry.define(tylIconTylerTalkingTLogo);
  }, []);

  return (
    <ForgeAppBar title-text="Forge - React" {...props}>
      <ForgeAppBarMenuButton slot="start" onClick={props.onToggleMenu} />
      <ForgeIcon slot="logo" name="tyler_talking_t_logo" />
    </ForgeAppBar>
  );
}

export default Header;
