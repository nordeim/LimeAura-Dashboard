# Add to .lintstagedrc.js
'*.{js,jsx,ts,tsx}': [
  'eslint --fix',
  'next build --no-lint'  # Quick build validation
]
