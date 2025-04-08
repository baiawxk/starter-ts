import { antfu } from '@antfu/eslint-config'

export default antfu({
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'curly': ['error', 'all'],
    'import/no-deprecated': 'warn',
    'no-console': 'off',
    'no-control-regex': 'off',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-unused-expressions': ['error', { allowShortCircuit: false }],
    'node/prefer-global/process': 'off',
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: ['function', 'export'], next: '*' }, { blankLine: 'always', next: ['function', 'export'], prev: '*' }],
    'prefer-promise-reject-errors': 'off',
    'style/array-bracket-newline': ['error', 'consistent'],
    'style/array-element-newline': ['error', 'consistent'],
    'style/curly-newline': ['error', { consistent: true }],
    'style/no-extra-parens': ['error', 'all', { conditionalAssign: false, enforceForArrowConditionals: true }],
    'style/object-curly-newline': ['error', { consistent: true }],
    'style/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true, allowMultiplePropertiesPerLine: true }],
    'ts/no-duplicate-enum-values': 'off',
    'unicorn/escape-case': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['error', { caughtErrors: 'none', args: 'none' }],
  },
})
