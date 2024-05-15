import { IconRegistry } from '@tylertech/forge';
import { useEffect } from 'react';
import { ForgeIcon, ForgeIconButton } from '@tylertech/forge-react';
import { tylIconFace } from '@tylertech/tyler-icons/standard';

export function CellButton({ data, index }: { data: any; index: number }): JSX.Element {
  useEffect(() => {
    IconRegistry.define(tylIconFace);
  }, []);
  
  function handleClick(): void {
    console.log(`Yay clicked row index ${index}`);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <ForgeIconButton>
        <button type="button" onClick={handleClick}>
          <ForgeIcon name="face" />
        </button>
      </ForgeIconButton>
      <span className="forge-typography--label1">{data.name}</span>
    </div>
  );
}
