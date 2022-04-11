import { ForgeBottomSheet, ForgeButton, ForgeScaffold, ForgeToolbar, useForgeBottomSheet } from 'src/projects/forge-react/src';
import { useContext, useState } from 'react';
import { TestContext } from 'src/App';

// eslint-disable-next-line arrow-body-style
const BottomSheetBody = ({ hide }: { hide: () => void }): JSX.Element => {
  const testContext = useContext(TestContext);

  return (
    <ForgeScaffold>
      <ForgeToolbar slot="header">
        <h1 className="forge-typography--title" slot="start" id="bottom-sheet-title">Bottom sheet title</h1>
      </ForgeToolbar>
      <div slot="body" style={{padding: '16px'}}>
        <p>Value from TestContext: {testContext ? <code>{testContext.value}</code> : <code>N/A</code>}</p>
        <p className="forge-typography--body1" id="bottom-sheet-message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia veniam omnis labore voluptatem doloribus voluptatibus maxime nisi libero debitis quis porro modi, quos quod obcaecati repudiandae ut voluptatum distinctio!
        </p>
      </div>
      <ForgeToolbar slot="footer" inverted>
        <ForgeButton slot="end" type="raised">
          <button type="button" onClick={hide}>Close</button>
        </ForgeButton>
      </ForgeToolbar>
    </ForgeScaffold>
  );
};

export function BottomSheetDemo(): JSX.Element {
  const attributes = new Map([
    ['aria-labeledby', 'bottom-sheet-title'],
    ['aria-describedby', 'bottom-sheet-message']
  ]);
  const [showBottomSheet, hideBottomSheet] = useForgeBottomSheet(BottomSheetBody, { hide: () => hideBottomSheet() });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className="forge-typography--title">Bottom sheet</h2>
      <ForgeButton type="raised">
        <button type="button" onClick={() => showBottomSheet({ showBackdrop: true, attributes })}>Show bottom sheet (hooks</button>
      </ForgeButton>

      <ForgeButton type="raised" style={{marginLeft: '16px'}}>
        <button type="button" onClick={() => setIsOpen(true)}>Show bottom sheet (component)</button>
      </ForgeButton>

      <ForgeBottomSheet open={isOpen} options={{showBackdrop: true, attributes}} onDismiss={() => setIsOpen(false)}>
        <BottomSheetBody hide={() => setIsOpen(false)} />
      </ForgeBottomSheet>
    </>
  );
}
