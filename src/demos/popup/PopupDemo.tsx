import { ForgeButton, ForgeCheckbox, ForgePopup, useForgePopup } from 'src/projects/forge-react/src';
import { useContext, useRef, useState } from 'react';
import { TestContext } from 'src/App';
import { PopupAnimationType } from '@tylertech/forge';

// eslint-disable-next-line arrow-body-style
const PopupBody = ({ hide }: { hide: () => void }): JSX.Element => {
  const testContext = useContext(TestContext);

  return (
    <div style={{padding: '16px', maxWidth: '256px'}}>
      <p>
        Value from TestContext: {testContext ? <code>{testContext.value}</code> : <code>N/A</code>}
      </p>
      <p className="forge-typography--body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia veniam omnis labore voluptatem doloribus voluptatibus maxime nisi libero debitis quis porro modi, quos quod obcaecati repudiandae ut voluptatum distinctio!
      </p>
      <ForgeButton slot="end" type="raised">
        <button type="button" onClick={hide}>Close</button>
      </ForgeButton>
    </div>
  );
};

export function PopupDemo(): JSX.Element {
  const componentButtonRef = useRef<HTMLButtonElement>(null);
  const hookButtonRef = useRef<HTMLButtonElement>(null);
  const [showPopup, hidePopup] = useForgePopup(PopupBody, { hide: () => hidePopup() });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className="forge-typography--title">Popup ({isOpen ? 'open' : 'closed'})</h2>

      <ForgeButton type="raised">
        <button type="button" ref={componentButtonRef} onClick={() => setIsOpen(true)}>Show popup (component)</button>
      </ForgeButton>

      <ForgeButton type="raised" style={{marginLeft: '16px'}}>
        <button type="button" ref={hookButtonRef} onClick={() => showPopup(hookButtonRef, { animationType: PopupAnimationType.Dropdown })}>Show popup (hook)</button>
      </ForgeButton>

      <ForgePopup open={isOpen} options={{animationType: PopupAnimationType.Dropdown}} targetElementRef={componentButtonRef} onDismiss={() => setIsOpen(false)}>
        <PopupBody hide={() => setIsOpen(false)} />
      </ForgePopup>
    </>
  );
}
