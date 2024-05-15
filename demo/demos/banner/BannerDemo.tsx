import { IconRegistry } from '@tylertech/forge';
import { ForgeBanner, ForgeButton, ForgeIcon } from '@tylertech/forge-react';
import { tylIconAddAlert } from '@tylertech/tyler-icons/standard';
import { useEffect } from 'react';

export function BannerDemo(): JSX.Element {
  useEffect(() => {
    IconRegistry.define(tylIconAddAlert);
  }, []);

  return (
    <>
      <h2 className="forge-typography--subheading4">Banner</h2>
      <ForgeBanner theme="success">
        <ForgeIcon slot="icon" name="add_alert" />
        <div>Minim sunt eu laborum labore minim.</div>
        <ForgeButton type="outlined" slot="button">
          <button type="button">Learn more...</button>
        </ForgeButton>
      </ForgeBanner>
    </>
  );
}
