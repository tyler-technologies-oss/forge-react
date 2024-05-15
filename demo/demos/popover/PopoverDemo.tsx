import { ForgeButton, ForgePopover, useForgePopover } from '@tylertech/forge-react';
import { useContext, useRef, useState } from 'react';
import { TestContext } from '../../App';

// eslint-disable-next-line arrow-body-style
const PopoverBody = ({ hide }: { hide: () => void }): JSX.Element => {
  const testContext = useContext(TestContext);

  return (
    <div style={{padding: '16px', maxWidth: '256px'}}>
      <p>
        Value from TestContext: {testContext ? <code>{testContext.value}</code> : <code>N/A</code>}
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia veniam omnis labore voluptatem doloribus voluptatibus maxime nisi libero debitis quis porro modi, quos quod obcaecati repudiandae ut voluptatum distinctio!
      </p>
      <ForgeButton slot="end" type="raised">
        <button type="button" onClick={hide}>Close</button>
      </ForgeButton>
    </div>
  );
};

export function PopoverDemo(): JSX.Element {
  const componentButtonRef = useRef<HTMLButtonElement>(null);
  const hookButtonRef = useRef<HTMLButtonElement>(null);
  const [showPopover, hidePopover] = useForgePopover(PopoverBody, { hide: () => hidePopover() });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h2 className="forge-typography--subheading4">Popover ({isOpen ? 'open' : 'closed'})</h2>

      <ForgeButton type="raised" id="popover-target">
        <button type="button" ref={componentButtonRef} onClick={() => setIsOpen(true)}>Show popover (component)</button>
      </ForgeButton>
      <ForgePopover anchor="popover-target" open={isOpen} on-forge-popover-toggle={() => setIsOpen(false)}>
        <PopoverBody hide={() => setIsOpen(false)} />
      </ForgePopover>

      <ForgeButton type="raised" style={{marginLeft: '16px'}}>
        <button type="button" ref={hookButtonRef} onClick={() => showPopover(hookButtonRef)}>Show popover (hook)</button>
      </ForgeButton>
    </>
  );
}
