import { IconRegistry } from '@tylertech/forge';
import { ForgeStack } from 'src/projects/forge-react/src';
import { tylIconAddAlert } from '@tylertech/tyler-icons/standard';
import { useEffect } from 'react';
import './StackDemo.scss';

export function StackDemo(): JSX.Element {
  useEffect(() => {
    IconRegistry.define(tylIconAddAlert);
  }, []);

  return (
    <ForgeStack gap="32">
      <h2 className="forge-typography--title">Stack demos</h2>
      <ForgeStack>
        <div className="box">Box</div>
        <div className="box">Box</div>
        <div className="box">Box</div>
      </ForgeStack>
      <ForgeStack inline>
        <div className="box">Box</div>
        <div className="box">Box</div>
        <div className="box">Box</div>
      </ForgeStack>
      <ForgeStack inline stretch>
        <div className="box">Box</div>
        <div className="box">Box</div>
        <div className="box">Box</div>
      </ForgeStack>
    </ForgeStack>
  );
}
