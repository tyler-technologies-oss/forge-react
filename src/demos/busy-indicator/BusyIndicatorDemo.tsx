import { ForgeBusyIndicator, ForgeButton } from 'src/projects/forge-react/src';
import { useState } from 'react';
import { useForgeBusyIndicator } from 'src/projects/forge-react/src/hooks';

export function BusyIndicatorDemo(): JSX.Element {
  const [showBusyIndicator, hideBusyIndicator] = useForgeBusyIndicator();
  const [isBusy, setIsBusy] = useState(false);

  function showBusyHook(): void {
    showBusyIndicator({ message: 'Loading (hook)...', cancel: true });
    setTimeout(() => hideBusyIndicator(), 3000);
  }
  
  function showBusyComponent(): void {
    setIsBusy(true);
    setTimeout(() =>setIsBusy(false), 3000);
  }

  return (
    <>
      <h2 className="forge-typography--title">Busy indicator</h2>

      <ForgeButton type="raised">
        <button type="button" onClick={showBusyHook}>Show busy (hook)</button>
      </ForgeButton>

      <ForgeButton type="raised" style={{marginLeft: '16px'}}>
        <button type="button" onClick={showBusyComponent}>Show busy (component)</button>
      </ForgeButton>

      <ForgeBusyIndicator open={isBusy} options={{ message: 'Loading (component)...', cancel: true}} />
    </>
  );
}
