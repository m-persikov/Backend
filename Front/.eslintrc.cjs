module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}', '*.ts', '*.tsx'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		// 'no-var': 'error',
		// 'preffer-const': 'warn',
		'prettier/prettier': ['warn', { endOfLine: 'auto' }]
	}
};
