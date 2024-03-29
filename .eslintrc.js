module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "mongo": true,
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "max-len": ["error", 120],
        "import/no-unresolved": [2, { "commonjs": true, "amd": true }],
        "no-underscore-dangle": ["off"],
        "no-param-reassign": 0
    }
};