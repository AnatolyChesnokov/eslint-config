import type { OptionsStylistic, TypedFlatConfigItem } from '../types'

import { pluginAchesnokov, pluginImport } from '../plugins'

export async function imports(options: OptionsStylistic = {}): Promise<TypedFlatConfigItem[]> {
  const {
    stylistic = true,
  } = options

  return [
    {
      name: 'achesnokov/imports/rules',
      plugins: {
        achesnokov: pluginAchesnokov,
        import: pluginImport,
      },
      rules: {
        'achesnokov/import-dedupe': 'error',
        'achesnokov/no-import-dist': 'error',
        'achesnokov/no-import-node-modules-by-path': 'error',

        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',

        ...stylistic
          ? {
              'import/newline-after-import': ['error', { count: 1 }],
            }
          : {},
      },
    },
  ]
}
