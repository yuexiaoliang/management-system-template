module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-standard-vue'
  ],
  rules: {
    'unit-no-unknown': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'include', 'extend', 'if', 'else']
      }
    ],
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null
  }
}
