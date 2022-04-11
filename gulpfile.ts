import { task, series, parallel } from 'gulp';
import { join, resolve } from 'path';
import {
  deleteDir,
  lintESLint,
  createRollupBundle,
  IRollupBundleConfig,
  copyFilesMultiple,
  IFileCopyConfig
} from '@tylertech/forge-build-tools';
import rollupNodeResolve from '@rollup/plugin-node-resolve';
const rollupTypeScript = require('rollup-plugin-typescript2');

const ROOT = resolve(__dirname, './');
const FORGE_REACT_PROJECT_ROOT = join(ROOT, './src/projects/forge-react');
const FORGE_REACT_PROJECT_SRC_ROOT = join(FORGE_REACT_PROJECT_ROOT, 'src');
const FORGE_REACT_PROJECT_DIST_ROOT = join(ROOT, 'dist/forge-react');
const FORGE_REACT_PACKAGE_JSON = require(join(FORGE_REACT_PROJECT_ROOT, 'package.json'));

/** Cleans the build output directory. */
task('clean', () => deleteDir(FORGE_REACT_PROJECT_DIST_ROOT));

/** Lints the TypeScript in the project. */
task('lint', () => lintESLint(join(FORGE_REACT_PROJECT_SRC_ROOT, '**/*.ts')));

/** Creates the rollup bundles. */
task('bundle', () => {
  const rollupConfig: IBundleConfig = {
    name: FORGE_REACT_PACKAGE_JSON.name,
    input: join(FORGE_REACT_PROJECT_SRC_ROOT, 'index.ts'),
    file: join(FORGE_REACT_PROJECT_DIST_ROOT, `dist/forge-react.js`),
    format: 'es',
    version: FORGE_REACT_PACKAGE_JSON.version,
    minify: false
  };
  const globals = {
    'react': 'react',
    'react-dom': 'react-dom'
  };
  return createRollupBundleTask(rollupConfig, globals);
});

/** Copies the package.json to the build output directory. */
task('copy-package-files', () => {
  const files: IFileCopyConfig[] = [
    { path: join(ROOT, 'LICENSE'), rootPath: ROOT, outputPath: FORGE_REACT_PROJECT_DIST_ROOT },
    { path: join(ROOT, 'README.md'), rootPath: ROOT, outputPath: FORGE_REACT_PROJECT_DIST_ROOT },
    { path: join(FORGE_REACT_PROJECT_ROOT, 'package.json'), rootPath: FORGE_REACT_PROJECT_ROOT, outputPath: FORGE_REACT_PROJECT_DIST_ROOT }
  ];
  return copyFilesMultiple(files);
});

/** The main build task that generates the npm package. */
task('build', series('clean', 'lint', parallel('bundle', 'copy-package-files')));

export interface IBundleConfig {
  input: string;
  name: string;
  format: 'es' | 'cjs' | 'umd';
  file: string;
  version: string;
  minify: boolean;
}

function createRollupBundleTask(rollupConfig: IBundleConfig, rollupGlobals: { [key: string]: string }): Promise<void> {
  const bundleConfig: IRollupBundleConfig = {
    input: rollupConfig.input,
    name: rollupConfig.name,
    format: rollupConfig.format,
    file: rollupConfig.file,
    version: rollupConfig.version,
    minify: rollupConfig.minify,
    globals: rollupGlobals,
    banner: ``,
    plugins: [
      rollupNodeResolve(),
      rollupTypeScript({
        tsconfig: resolve(FORGE_REACT_PROJECT_ROOT, 'tsconfig.build.json'),
        useTsconfigDeclarationDir: true
      })
    ]
  };
  return createRollupBundle(bundleConfig);
}
