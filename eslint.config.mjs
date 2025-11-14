{
  rules: {
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@radix-ui/react-avatar',
            message: 'Use namespace import pattern: import * as Avatar from \'@radix-ui/react-avatar\'',
            importNames: ['default']
          }
        ]
      }
    ]
  }
}
