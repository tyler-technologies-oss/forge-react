import { AutoRc } from 'auto';
import { INpmConfig } from '@auto-it/npm';

const npmOptions: INpmConfig = {
  setRcToken: false,
  publishFolder: 'dist/forge-react'
};

export default function rc(): AutoRc {
  return {
    versionBranches: true,
    prereleaseBranches: ['dev', 'beta', 'rc', 'next'],
    author: 'GitHub Actions <41898282+github-actions[bot]@users.noreply.github.com>',
    plugins: [
      ['npm', npmOptions],
      'conventional-commits',
      'released',
      'first-time-contributor'
    ]
  };
}
