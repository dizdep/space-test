import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintConfigPrettier from 'eslint-config-prettier'

export default [
  eslintConfigPrettier,
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { plugins: { perfectionist } },
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } }
  },
  {
    rules: {
      'perfectionist/sort-named-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreAlias: false,
          ignoreCase: true,
          specialCharacters: 'keep',
          groupKind: 'mixed',
          partitionByNewLine: false,
          partitionByComment: false
        }
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          internalPattern: ['^@/.+'],
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'always',
          maxLineLength: undefined,
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown'
          ],
          customGroups: { type: {}, value: {} },
          environment: 'node'
        }
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          groupKind: 'mixed'
        }
      ],
      'perfectionist/sort-enums': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          newlinesBetween: 'ignore',
          sortByValue: false,
          forceNumericSort: false,
          groups: [],
          customGroups: []
        }
      ],
      'tailwindcss/no-custom-classname': 'off',
      'no-magic-numbers': ['warn', { ignoreArrayIndexes: true }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: 'off',
      'vue/block-lang': [
        'error',
        {
          script: {
            lang: 'ts'
          }
        }
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script[setup]', 'template', 'style']
        }
      ],
      'vue/define-emits-declaration': ['error', 'type-based'],
      'vue/define-macros-order': [
        'error',
        {
          order: ['defineProps', 'defineEmits'],
          defineExposeLast: true
        }
      ],
      'vue/define-props-declaration': ['error', 'type-based'],
      'vue/no-multiple-objects-in-class': 'warn',
      'vue/no-async-in-computed-properties': 'error',
      'vue/no-child-content': 'error',
      // 'vue/max-attributes-per-line': [
      // 	'warn',
      // 	{
      // 		singleline: 3
      // 	}
      // ],
      'vue/attributes-order': [
        'warn',
        {
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT'
          ],
          alphabetical: false
        }
      ],
      'vue/no-unused-vars': 'warn',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'warn',
      'vue/html-self-closing': 'off',
      'vue/html-comment-content-newline': 'warn',
      'vue/multi-word-component-names': 'off',
      // TypeScript rules
      '@typescript-eslint/no-explicit-any': ['warn', { fixToUnknown: true }],
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      // '@typescript-eslint/no-magic-numbers': [
      // 	'warn',
      // 	{ ignoreTypeIndexes: true }
      // ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ]
    }
  }
]
