import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslint from 'typescript-eslint';
import seyrinianToolsConfig from '@seyrinian/seyrinian-tools/eslint.config';

export default typescriptEslint.config(
  { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
  ...seyrinianToolsConfig,
  eslintConfigPrettier
);
