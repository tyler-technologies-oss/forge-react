import { ForgeButton, ForgeCheckbox, ForgeDialog, ForgeScaffold, ForgeToolbar, useForgeDialog } from 'src/projects/forge-react/src';
import { useContext, useState } from 'react';
import { TestContext } from 'src/App';

// eslint-disable-next-line arrow-body-style
const DialogBody = ({ hide }: { hide: () => void }): JSX.Element => {
  const testContext = useContext(TestContext);

  return (
    <ForgeScaffold>
      <ForgeToolbar slot="header">
        <h1 className="forge-typography--title" slot="start" id="dialog-title">Dialog title</h1>
      </ForgeToolbar>
      <div slot="body" style={{padding: '16px', maxWidth: '500px'}}>
        <p>Value from TestContext: {testContext ? <code>{testContext.value}</code> : <code>N/A</code>}</p>
        <p className="forge-typography--body1" id="dialog-message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia veniam omnis labore voluptatem doloribus voluptatibus maxime nisi libero debitis quis porro modi, quos quod obcaecati repudiandae ut voluptatum distinctio!
        </p>
      </div>
      <ForgeToolbar slot="footer" inverted>
        <ForgeButton slot="end" type="raised">
          <button type="button" onClick={hide} forge-dialog-focus="true">Close</button>
        </ForgeButton>
      </ForgeToolbar>
    </ForgeScaffold>
  );
};

export function DialogDemo(): JSX.Element {
  const attributes = new Map([
    ['aria-labeledby', 'dialog-title'],
    ['aria-describedby', 'dialog-message']
  ]);
  const [backdropClose, setBackdropClose] = useState(true);
  const [escapeClose, setEscapeClose] = useState(true);
  const [fullscreen, setFullscreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showDialog, hideDialog] = useForgeDialog(DialogBody, { hide: () => hideDialog() });

  function showHookDialog(): void {
    showDialog({ backdropClose, escapeClose, fullscreen });
  }

  return (
    <>
      <h2 className="forge-typography--title">Dialog</h2>

      <ForgeButton type="raised">
        <button type="button" onClick={() => setIsOpen(true)}>Show dialog (component)</button>
      </ForgeButton>
      <ForgeButton type="raised" style={{marginLeft: '16px'}}>
        <button type="button" onClick={showHookDialog}>Show dialog (hook)</button>
      </ForgeButton>
      <div style={{marginTop: '16px'}}>
        <ForgeCheckbox>
          <input type="checkbox" id="backdrop-close-checkbox" defaultChecked={backdropClose} onChange={() => setBackdropClose(!backdropClose)} />
          <label htmlFor="backdrop-close-checkbox">Backdrop close</label>
        </ForgeCheckbox>
      </div>
      <div>
        <ForgeCheckbox>
          <input type="checkbox" id="escape-close-checkbox" defaultChecked={escapeClose} onChange={() => setEscapeClose(!escapeClose)} />
          <label htmlFor="escape-close-checkbox">Escape close</label>
        </ForgeCheckbox>
      </div>
      <div>
        <ForgeCheckbox>
          <input type="checkbox" id="fullscreen-checkbox" defaultChecked={fullscreen} onChange={() => setFullscreen(!fullscreen)} />
          <label htmlFor="fullscreen-checkbox">Fullscreen</label>
        </ForgeCheckbox>
      </div>
      <ForgeDialog open={isOpen} options={{attributes, backdropClose, escapeClose, fullscreen}} onDismiss={() => setIsOpen(false)}>
        <DialogBody hide={() => setIsOpen(false)} />
      </ForgeDialog>
    </>
  );
}
