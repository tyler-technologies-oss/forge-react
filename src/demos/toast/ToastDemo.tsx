import { ForgeButton, ForgeCheckbox, ForgeToast, useForgeToast } from 'src/projects/forge-react/src';
import { useContext, useState } from 'react';
import { TestContext } from 'src/App';

// eslint-disable-next-line arrow-body-style
const CustomToastElement = (): JSX.Element => {
  const testContext = useContext(TestContext);

  return (
    <div>
      <p>Value from TestContext: <code>{testContext.value}</code></p>
      <p className="forge-typography--body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia veniam omnis labore voluptatem doloribus voluptatibus maxime nisi libero debitis quis porro modi, quos quod obcaecati repudiandae ut voluptatum distinctio!
      </p>
    </div>
  );
};

export function ToastDemo(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomComponent, setShowCustomComponent] = useState(false);
  const [showToast] = useForgeToast();

  function showToastComponent(): void {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => setIsOpen(true));
      return;
    }
    setIsOpen(true);
  }

  function showToastHook(): void {
    showToast({ message: 'Toast message! (hook)' });
  }

  return (
    <>
      <h2 className="forge-typography--title">Toast ({isOpen ? 'open' : 'closed'})</h2>

      <ForgeButton type="raised">
        <button type="button" onClick={showToastComponent}>Show toast (component)</button>
      </ForgeButton>

      <ForgeButton type="raised" style={{marginLeft: '16px'}}>
        <button type="button" onClick={showToastHook}>Show toast (hook)</button>
      </ForgeButton>

      <div style={{marginTop: '16px'}}>
        <ForgeCheckbox>
          <input type="checkbox" id="show-custom-component-checkbox" defaultChecked={showCustomComponent} onChange={() => setShowCustomComponent(!showCustomComponent)} />
          <label htmlFor="show-custom-component-checkbox">Show custom component</label>
        </ForgeCheckbox>
      </div>

      <ForgeToast open={isOpen} options={{message: !showCustomComponent ? 'Toast message! (component)' : undefined}} onDismiss={() => setIsOpen(false)}>
        {showCustomComponent && <CustomToastElement />}
      </ForgeToast>
    </>
  );
}
