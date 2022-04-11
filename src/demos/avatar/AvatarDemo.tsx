import { IconRegistry } from '@tylertech/forge';
import { ForgeAvatar, ForgeIcon } from 'src/projects/forge-react/src';
import { tylIconFace } from '@tylertech/tyler-icons/standard';
import { useEffect } from 'react';

export function AvatarDemo(): JSX.Element {
  useEffect(() => {
    IconRegistry.define(tylIconFace);
  }, []);

  return (
    <>
      <h2 className="forge-typography--title">Avatar</h2>
      <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
        <ForgeAvatar text="First Last" />
        <ForgeAvatar imageUrl="https://en.gravatar.com/userimage/27084046/aa996f464ca8f1ea69769cef1b76fbf9.jpg" />
        <ForgeAvatar text="First Last" style={{'--forge-avatar-radius': '10px'}} />
        <ForgeAvatar style={{'--forge-avatar-background-color': 'black'}}>
          <ForgeIcon name="face" />
        </ForgeAvatar>
        <ForgeAvatar style={{'--forge-avatar-background-color': '#ff0000', '--forge-avatar-size': '24px', '--forge-avatar-font-size': '16px'}}>A</ForgeAvatar>
      </div>
    </>
  );
}
