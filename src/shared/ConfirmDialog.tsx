import { PropsWithChildren } from 'react';
import { ForgeButton, ForgeToolbar } from 'src/projects/forge-react/src';

function ConfirmDialog({ close }: PropsWithChildren<any>): JSX.Element {
  return (
    <div style={{minWidth: '400px'}}>
      <ForgeToolbar forge-dialog-move-target>
        <h1 className="forge-typography--headline5" slot="start">Confirm</h1>
      </ForgeToolbar>
      <p style={{padding: '16px'}}>
        Are you sure you want to cancel?
      </p>
      <ForgeToolbar inverted>
        <ForgeButton slot="end" type="outlined" style={{marginRight: '8px'}}>
          <button type="button" onClick={() => close(false)}>Cancel</button>
        </ForgeButton>
        <ForgeButton slot="end" type="raised">
          <button type="button" onClick={() => close(true)}>OK</button>
        </ForgeButton>
      </ForgeToolbar>
    </div>
  );
}

export default ConfirmDialog;
