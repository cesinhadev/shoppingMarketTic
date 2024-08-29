
module.exports = {
    root:true,
    env: { browser:true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylisct-type-checked",
        "plugin:react-hook/recommended",
        "plugin:react/remomended",
        "plugin:react/jsx-runtime",
        "plugin:tailwind/recommended",
				
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOption: {
        ecmaVersion: "latest",
        sourceType:"module",
        project:["tsconfig.json" , "tsconfig.node.json"],
        tsconfigRootDir: __dirname

    },
    plugins:["react-refresh", "@typescript-eslint", "react" ],
    rules: {
        'react-refresh/only-export-components' :[
            'warn',{ allowConstantExport: true},
        ],

        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
    },
    setting: {
        react:{
            version: "detect",
        }
    }
}