import { generateReactWrappers } from 'custom-element-react-wrappers';
import manifest from '@tylertech/forge/custom-elements.json' assert { type: 'json' };

const options = {
  outdir: 'lib/components/proxies',
  modulePath: (className, tagName) => `@tylertech/forge/esm/${tagName.replace(/^forge-/g, '')}`
};

generateReactWrappers(manifest, options);
