import { IconRegistry } from '@tylertech/forge';
import { ForgeButton, ForgeCheckbox, ForgeDivider, ForgeIcon } from '@tylertech/forge-react';
import { tylIconFavorite } from '@tylertech/tyler-icons/standard';
import { useEffect, useState } from 'react';

export function ButtonDemo(): JSX.Element {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    IconRegistry.define(tylIconFavorite);
  }, []);

  return (
    <>
      <h2 className="forge-typography--subheading4">Button</h2>
      <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
        <ForgeButton>
          <button disabled={isDisabled} type="button">Default</button>
        </ForgeButton>

        <ForgeButton type="raised">
          <button disabled={isDisabled} type="button">Raised</button>
        </ForgeButton>

        <ForgeButton type="outlined">
          <button disabled={isDisabled} type="button">Outlined</button>
        </ForgeButton>

        <ForgeButton type="unelevated">
          <button disabled={isDisabled} type="button">Unelevated</button>
        </ForgeButton>

        <ForgeButton type="outlined-dense">
          <button disabled={isDisabled} type="button">Dense outlined</button>
        </ForgeButton>

        <ForgeButton type="outlined">
          <button disabled={isDisabled} type="button">
            <ForgeIcon name="favorite" />
            <span>Leading icon</span>
          </button>
        </ForgeButton>

        <ForgeButton type="outlined">
          <button disabled={isDisabled} type="button">
            <span>Trailing icon</span>
            <ForgeIcon name="favorite" />
          </button>
        </ForgeButton>
      </div>
      <ForgeDivider className="demo-divider" />
      <div>
        <ForgeCheckbox>
          <input type="checkbox" id="disabled-checkbox" onChange={() => setIsDisabled(!isDisabled)} checked={isDisabled} />
          <label htmlFor="disabled-checkbox">Disabled</label>
        </ForgeCheckbox>
      </div>
    </>
  );
}
